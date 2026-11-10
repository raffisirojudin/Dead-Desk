// ══════════════════════════════════════════════════════════════════════════
// DEAD DESK: SORTIR JIWA — ENGINE UTAMA SIMULASI HRD AKHIRAT
// ══════════════════════════════════════════════════════════════════════════

let score = 0;
let lives = 3;
let maxLives = 3;
let currentGhost = null;
let queue = [];
let queueIndex = 0;
let currentLevel = 1;
let inBossFight = false;
let bossTimer = null;
let bossTimeLeft = 0;

let combo = 0;
let bestCombo = 0;
let hintCharges = 2;
let uvCharges = 3;
let tutorialDone = false;
let isPaused = false;
let isProcessing = false;
let pauseTimer = null;

// Status investigasi untuk kandidat yang sedang duduk di meja interview
let candidateState = {
  expression: "neutral", // neutral | nervous | exposed | happy
  uvActive: false,
  inspectedItems: new Set(),
  askedQuestions: new Set(),
  confronted: false,
  flaggedFields: new Set(),
};

let stageUsedBossIndices = [];
let arsipData = [];
let arsipFilter = "semua";
let activeTab = "biodata";
let speechTypeTimer = null;

const QUEUE_SIZE = 10;
const BOSS_POSITIONS = [5, 10];

// ── UTILITAS ACAK ──
function shuffle(a) {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

function randomDate() {
  const d = Math.floor(Math.random() * 28) + 1;
  const m = [
    "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
    "Jul", "Agu", "Sep", "Okt", "Nov", "Des",
  ][Math.floor(Math.random() * 12)];
  const y = 2021 + Math.floor(Math.random() * 6);
  return `${String(d).padStart(2, "0")} ${m} ${y}`;
}

function getDest(dosa) {
  return dosa === "Suka Berbagi" ? "Surga" : "Neraka";
}

function getCurrentRank() {
  let current = HRD_RANKS[0];
  for (const r of HRD_RANKS) {
    if (score >= r.minScore) current = r;
  }
  return current;
}

// ── RANDOMIZE GHOST SECARA KONSISTEN (PERBAIKAN BUG BARANG & DIALOG) ──
function randomizeGhost(g) {
  const clone = JSON.parse(JSON.stringify(g));
  if (Math.random() >= 0.4) {
    return enrichCandidate(clone);
  }

  // Balik dosa DAN ganti paket kebiasaan, catatan, karma, barang, & dialog secara koheren!
  clone.dosa =
    g.dosa === "Suka Berbohong" ? "Suka Berbagi" : "Suka Berbohong";

  const pool =
    clone.dosa === "Suka Berbagi"
      ? COHERENT_GOOD_PROFILES
      : COHERENT_BAD_PROFILES;
  const tpl = pool[Math.floor(Math.random() * pool.length)];

  clone.kebiasaan = tpl.kebiasaan;
  clone.catatan = tpl.catatan;
  clone.karma = [...tpl.karma];
  clone.barang = JSON.parse(JSON.stringify(tpl.barang));
  clone.dialog = JSON.parse(JSON.stringify(tpl.dialog));
  clone.uvSecret = tpl.uvSecret;

  return enrichCandidate(clone);
}

// ── AMBIL BOSS UNTUK STAGE (SEMUA 4 BOSS PER STAGE BISA MUNCUL) ──
function getBossForStage(stage, position) {
  const poolKey = Math.min(stage, 4);
  const pool = bossPool[poolKey];

  if (position === 1 || stageUsedBossIndices.length >= pool.length) {
    stageUsedBossIndices = [];
  }

  const available = pool
    .map((_, idx) => idx)
    .filter((idx) => !stageUsedBossIndices.includes(idx));
  const chosenIdx =
    available[Math.floor(Math.random() * available.length)] ?? 0;
  stageUsedBossIndices.push(chosenIdx);

  const bossClone = JSON.parse(JSON.stringify(pool[chosenIdx]));
  return enrichCandidate(bossClone);
}

// ── PERKAYA DATA KANDIDAT DENGAN ATRIBUT LAMARAN KERJA HRD ──
function enrichCandidate(g) {
  const seed = nameHash(g.nama);
  const isBad = g.dosa === "Suka Berbohong";

  g.posisiDilamar =
    g.posisiDilamar || JOB_POSITIONS_POOL[seed % JOB_POSITIONS_POOL.length];
  g.ekspektasi =
    g.ekspektasi || EXPECTATIONS_POOL[(seed >> 2) % EXPECTATIONS_POOL.length];

  if (!g.klaimDiri) {
    g.klaimDiri = isBad
      ? SELF_CLAIMS_DECEPTIVE[seed % SELF_CLAIMS_DECEPTIVE.length]
      : SELF_CLAIMS_HONEST[seed % SELF_CLAIMS_HONEST.length];
  }

  if (!g.uvSecret) {
    if (g.isBoss) {
      g.uvSecret =
        isBad
          ? "⚠ SCAN MALAIKAT: Terdeteksi enkripsi dosa tingkat tinggi & pemalsuan tanda tangan!"
          : "✦ SCAN MALAIKAT: Entitas anomali ini tidak memiliki niat jahat maupun residu dosa.";
    } else {
      g.uvSecret =
        isBad
          ? `⚠ DETEKSI TIP-EX GAIB: Pelamar menyembunyikan catatan "${g.catatan}"`
          : `✦ SEGEL KEJUJURAN: Berkas murni, selaras dengan catatan hidup pelamar.`;
    }
  }

  // Di Stage 3+, pelamar pembohong sering memalsukan teks Kebiasaan & Catatan di CV!
  g.cvForged = false;
  g.displayedKebiasaan = g.kebiasaan;
  g.displayedCatatan = g.catatan;
  g.displayedKarma = [...(g.karma || [])];

  if (!g.isBoss && isBad && currentLevel >= 3 && Math.random() < 0.65) {
    g.cvForged = true;
    const fakeGood =
      COHERENT_GOOD_PROFILES[seed % COHERENT_GOOD_PROFILES.length];
    g.displayedKebiasaan = fakeGood.kebiasaan;
    g.displayedCatatan =
      fakeGood.catatan + " [Tinta tampak masih basah]";
    g.displayedKarma = [...fakeGood.karma];
  }

  return g;
}

// ── SPEECH BUBBLE KANDIDAT ──
function setSpeechBubble(text, mood = "normal") {
  const bubble = document.getElementById("speech-bubble");
  const textEl = document.getElementById("speech-text");
  if (!bubble || !textEl) return;

  bubble.className = `speech-bubble mood-${mood}`;
  if (speechTypeTimer) {
    clearInterval(speechTypeTimer);
    speechTypeTimer = null;
  }

  textEl.textContent = "";
  let i = 0;
  speechTypeTimer = setInterval(() => {
    if (i < text.length) {
      textEl.textContent += text[i];
      if (i % 4 === 0) playSoundType();
      i++;
    } else {
      clearInterval(speechTypeTimer);
      speechTypeTimer = null;
    }
  }, 16);
}

function getOpeningLine(g) {
  if (g.isBoss) {
    const bossLines = {
      1: "Halo Petugas HRD. Berkas saya sudah diurus 'orang dalam', langsung stempel Surga saja.",
      2: "...Apakah kursi ini untuk saya? Saya hanya mengikuti antrean ke ruangan ini.",
      3: "Menarik. Seorang petugas meja mencoba menilai entitas di luar sistemnya.",
      4: "... [Frekuensi ruangan bergetar pelan saat ia duduk] ...",
    };
    return bossLines[g.bossLevel || 1] || bossLines[1];
  }
  const isBad = g.dosa === "Suka Berbohong";
  const seed = nameHash(g.nama);
  if (isBad) {
    const lines = [
      `Halo Malaikat HRD! Saya melamar posisi "${g.posisiDilamar}". CV saya bersih kok!`,
      `Selamat siang Pak/Bu HRD! Jangan dengar gosip tetangga ya, saya orang paling jujur!`,
      `Permisi, berkas lamaran Surga saya sudah lengkap. Langsung di-approve saja ya!`,
    ];
    return lines[seed % lines.length];
  } else {
    const lines = [
      `Selamat siang Malaikat HRD. Berikut berkas lamaran saya untuk "${g.posisiDilamar}".`,
      `Permisi... semoga catatan hidup saya cukup layak untuk diterima di Surga.`,
      `Terima kasih sudah menerima wawancara saya hari ini, Petugas.`,
    ];
    return lines[seed % lines.length];
  }
}

// ── LOCK/UNLOCK TOMBOL SORT ──
function setSortBtnsDisabled(disabled) {
  const bh = document.getElementById("btn-heaven");
  const bk = document.getElementById("btn-hell");
  if (!bh || !bk) return;
  bh.disabled = disabled;
  bk.disabled = disabled;
  const op = disabled ? "0.5" : "1";
  bh.style.opacity = op;
  bk.style.opacity = op;
  bh.style.pointerEvents = disabled ? "none" : "";
  bk.style.pointerEvents = disabled ? "none" : "";
}

// ── UPDATE HUD & INSTRUMEN MEJA ──
function updateHUD() {
  document.getElementById("score-val").textContent = score;

  const rank = getCurrentRank();
  const rankEl = document.getElementById("rank-badge");
  if (rankEl) {
    rankEl.textContent = `${rank.badge} ${rank.title}`;
  }

  const totalSlots = Math.max(maxLives, lives);
  document.getElementById("lives-val").textContent =
    "❤️".repeat(Math.max(lives, 0)) +
    "🖤".repeat(Math.max(totalSlots - lives, 0));

  document.getElementById("title-hud").textContent =
    `⚖️ HRD ALAM BAKA · SHIFT ${currentLevel}`;

  const hb = document.getElementById("hint-btn");
  if (hb) {
    hb.textContent = `💡 HINT (${hintCharges})`;
    hb.style.opacity = hintCharges > 0 ? "1" : "0.45";
  }

  const uvb = document.getElementById("uv-btn");
  if (uvb) {
    uvb.textContent = `👁️ MATA MALAIKAT (${uvCharges})`;
    uvb.classList.toggle("active", candidateState.uvActive);
    uvb.style.opacity = uvCharges > 0 || candidateState.uvActive ? "1" : "0.45";
  }

  const cd = document.getElementById("combo-display");
  if (cd) {
    if (combo >= 2) {
      cd.textContent = `🔥 STREAK AUDIT x${combo}`;
      cd.style.opacity = "1";
    } else {
      cd.textContent = "";
      cd.style.opacity = "0";
    }
  }
}

function setFeedback(m, c) {
  const el = document.getElementById("feedback");
  if (!el) return;
  el.textContent = m;
  el.className = c;
}

function renderQueue() {
  const bar = document.getElementById("queue-bar");
  if (!bar) return;
  bar.innerHTML = "";
  for (let i = 0; i < QUEUE_SIZE; i++) {
    const isB = BOSS_POSITIONS.includes(i + 1);
    const dot = document.createElement("div");
    let c = "queue-dot";
    if (isB) c += " boss-dot";
    if (i < queueIndex) c += " done";
    else if (i === queueIndex) c += " current";
    else c += " pending";
    dot.className = c;
    dot.title = isB ? `Kandidat #${i + 1}: VIP / ANOMALI` : `Kandidat #${i + 1}`;
    bar.appendChild(dot);
  }

  const sl = document.getElementById("stage-label");
  if (!sl) return;
  const sop = STAGE_SOP_RULES[Math.min(currentLevel, 4)];
  sl.innerHTML = `
    <span style="color:#a08040">SHIFT ${currentLevel}</span>
    <span style="color:#6a5020;font-size:11px;letter-spacing:1px;">[${sop.code}]</span>
    <span style="color:#7a6030;margin-left:6px;font-size:11px">Antrean: ${queueIndex}/${QUEUE_SIZE} Pelamar</span>
  `;
}

// ── BOSS MODE & TIMER ──
function setBossMode(on) {
  const t = document.getElementById("title-hud");
  const d = document.getElementById("ghost-doll");
  const p = document.getElementById("form-paper");
  if (on) {
    t.classList.add("boss-mode");
    d.classList.add("boss-aura");
    p.classList.add("boss-paper");
    showBossWarning();
  } else {
    t.classList.remove("boss-mode");
    d.classList.remove("boss-aura");
    p.classList.remove("boss-paper");
    document.getElementById("boss-warning").classList.remove("show");
  }
}

function showBossWarning() {
  const el = document.getElementById("boss-warning");
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 3000);
}

function startBossTimer(s) {
  stopBossTimer();
  bossTimeLeft = s;
  const fb = document.getElementById("feedback");
  fb.textContent = `⏱ ${bossTimeLeft}s — Periksa PORTOFOLIO BARANG & WAWANCARA!`;
  fb.className = "wrong";
  bossTimer = setInterval(() => {
    bossTimeLeft--;
    if (bossTimeLeft <= 0) {
      stopBossTimer();
      const bossSnap = currentGhost;
      triggerJumpscare(bossSnap, () => {
        isProcessing = false;
        setSortBtnsDisabled(false);
        lives--;
        updateHUD();
        setFeedback(
          "⏰ WAKTU INTERVIEW HABIS! Kandidat menerobos lobi!",
          "wrong"
        );
        document.getElementById("form-paper").classList.add("shake");
        if (lives <= 0) {
          triggerGameOver();
          return;
        }
        queueIndex++;
        inBossFight = false;
        setBossMode(false);
        setTimeout(nextGhost, 800);
      });
    } else {
      fb.textContent = `⏱ ${bossTimeLeft}s tersisa${bossTimeLeft <= 5 ? " — SEGERA STEMPEL!" : ""}`;
      fb.className = "wrong";
      if (bossTimeLeft <= 5) hapticTimer();
    }
  }, 1000);
}

function stopBossTimer() {
  if (bossTimer) {
    clearInterval(bossTimer);
    bossTimer = null;
  }
  bossTimeLeft = 0;
}

// ── RENDER VISUAL KARAKTER & PASFOTO ──
function refreshCharacterVisuals() {
  if (!currentGhost) return;
  const dollEl = document.getElementById("ghost-doll");
  if (dollEl) {
    dollEl.innerHTML = buildGhostSVG(currentGhost, candidateState);
  }
  const photoEl = document.getElementById("cv-photo-box");
  if (photoEl) {
    photoEl.innerHTML = buildPassportPhotoSVG(currentGhost, candidateState);
  }
  const paper = document.getElementById("form-paper");
  if (paper) {
    paper.classList.toggle("uv-mode", candidateState.uvActive);
  }
  const uvBanner = document.getElementById("uv-secret-banner");
  if (uvBanner) {
    if (candidateState.uvActive) {
      uvBanner.textContent = currentGhost.uvSecret;
      uvBanner.classList.add("show");
    } else {
      uvBanner.classList.remove("show");
    }
  }
}

// ── TOGGLE RED FLAG PADA FIELD CV ──
function toggleRedFlag(fieldId) {
  if (!currentGhost || isProcessing) return;
  const el = document.getElementById(fieldId);
  if (!el) return;
  playSoundPaper();
  if (candidateState.flaggedFields.has(fieldId)) {
    candidateState.flaggedFields.delete(fieldId);
    el.classList.remove("flagged-field");
  } else {
    candidateState.flaggedFields.add(fieldId);
    el.classList.add("flagged-field");
  }
}

// ── MATA MALAIKAT (UV SCANNER) ──
function toggleUVScanner() {
  if (!currentGhost || isProcessing) return;
  if (!candidateState.uvActive) {
    if (uvCharges <= 0) {
      playSoundHintEmpty();
      showFloatingText("ENERGI MATA MALAIKAT HABIS!", "#cc8800");
      return;
    }
    uvCharges--;
    candidateState.uvActive = true;
    playSoundScanner(true);
    showFloatingText("👁️ PEMINDAIAN AURA AKTIF", "#38bdf8");
  } else {
    candidateState.uvActive = false;
    playSoundScanner(false);
  }
  updateHUD();
  refreshCharacterVisuals();
}

// ── RENDER KANDIDAT & BERKAS CV LAMARAN ──
function renderGhost() {
  const g = currentGhost;
  candidateState = {
    expression: "neutral",
    uvActive: false,
    inspectedItems: new Set(),
    askedQuestions: new Set(),
    confronted: false,
    flaggedFields: new Set(),
  };

  // Set mode awal Polygraph
  if (g.isBoss && (g.bossLevel || 1) >= 2) {
    PolygraphMonitor.setMode("anomaly");
  } else {
    PolygraphMonitor.setMode("calm");
  }

  refreshCharacterVisuals();

  // Stage 3+: nama ghost biasa disamarkan
  const hideName = !g.isBoss && currentLevel >= 3;
  const nameEl = document.getElementById("ghost-name-tag");
  if (hideName) {
    nameEl.textContent = "[PELAMAR ANONIM]";
    nameEl.style.cssText =
      "font-size:12px;color:var(--ink-faded);letter-spacing:1px;";
  } else {
    nameEl.textContent = g.nama;
    nameEl.style.cssText = "";
  }
  nameEl.className = g.isBoss ? "boss-tag" : "";

  const badge = document.getElementById("sin-badge");
  if (g.isBoss) {
    const fakeDosa =
      g.bossLevel <= 2
        ? g.dosa === "Suka Berbohong"
          ? "Klaim: Dermawan (?)"
          : "Klaim: Berbahaya (?)"
        : "STATUS: ANOMALI";
    badge.textContent = `☠ ${fakeDosa}`;
    badge.className = "boss";
    badge.style.cssText = "";
  } else if (currentLevel >= 2) {
    badge.textContent = "🔒 WAJIB AUDIT CV & BUKTI";
    badge.className = "";
    badge.style.cssText =
      'display:block;background:#1a1408;color:#c9a84c;border:1px dashed #6a5020;padding:4px 10px;border-radius:20px;font-family:var(--font-mono);font-size:12px;letter-spacing:1.5px;text-align:center;width:100%;';
  } else {
    badge.textContent =
      g.dosa === "Suka Berbohong"
        ? "⚠ Rekam: Suka Berbohong"
        : "✦ Rekam: Suka Berbagi";
    badge.className = g.dosa === "Suka Berbohong" ? "bohong" : "berbagi";
    badge.style.cssText = "";
  }

  document.getElementById("ref-no").textContent =
    "#HRD-" + String(currentLevel) + String(queueIndex + 1).padStart(2, "0");
  document.getElementById("tgl-masuk").textContent = randomDate();

  document.getElementById("f-posisi").textContent = g.posisiDilamar;
  document.getElementById("f-klaim").textContent = g.klaimDiri;

  document.getElementById("f-nama").textContent = hideName
    ? "[ IDENTITAS DISENSOR ]"
    : g.nama;
  document.getElementById("f-alias").textContent = hideName
    ? "[ TIDAK DIKETAHUI ]"
    : '"' + g.alias + '"';
  document.getElementById("f-umur").textContent = g.umur + " tahun";
  document.getElementById("f-sebab").textContent = g.sebab;
  document.getElementById("f-asal").textContent = hideName
    ? "[ DIKLASIFIKASI ]"
    : g.asal;
  document.getElementById("f-pekerjaan").textContent = g.pekerjaan;

  // Dosa di formulir
  if (g.isBoss && g.bossLevel <= 2) {
    document.getElementById("f-dosa").textContent =
      g.dosa === "Suka Berbohong" ? "Suka Berbagi (?)" : "Suka Berbohong (?)";
  } else if (g.isBoss && g.bossLevel >= 3) {
    document.getElementById("f-dosa").textContent =
      "[DATA CORRUPT / TIDAK TERBACA]";
  } else if (currentLevel >= 2) {
    document.getElementById("f-dosa").textContent =
      "[ DIKLASIFIKASI — CEK BARANG & WAWANCARA ]";
  } else {
    document.getElementById("f-dosa").textContent = g.dosa;
  }

  document.getElementById("f-kebiasaan").textContent = g.displayedKebiasaan;
  document.getElementById("f-catatan").textContent = g.displayedCatatan;

  // Bersihkan red flag lama
  ["f-klaim", "f-dosa", "f-kebiasaan", "f-catatan"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("flagged-field");
  });

  const kc = document.getElementById("karma-checks");
  kc.innerHTML = "";
  (g.displayedKarma || g.karma).forEach((k) => {
    kc.innerHTML += `<div class="check-item"><div class="checkbox checked">✓</div>${k}</div>`;
  });

  const stamp = document.getElementById("stamp");
  stamp.className = "";
  document.getElementById("stamp-icon").textContent = "";
  document.getElementById("stamp-text").textContent = "";

  setFeedback("", "");
  resetTabs();
  setSpeechBubble(getOpeningLine(g), "normal");

  const paper = document.getElementById("form-paper");
  paper.style.animation = "none";
  void paper.offsetWidth;
  paper.style.animation = "";

  updateHUD();
  renderQueue();
}

function buildQueue() {
  const sh = shuffle(ghosts);
  queue = [];
  stageUsedBossIndices = [];
  let gi = 0;
  for (let i = 0; i < QUEUE_SIZE; i++) {
    const pos = i + 1;
    if (BOSS_POSITIONS.includes(pos)) {
      const bossPos = pos === 5 ? 1 : 2;
      queue.push(getBossForStage(currentLevel, bossPos));
    } else {
      queue.push(randomizeGhost(sh[gi % sh.length]));
      gi++;
    }
  }
  queueIndex = 0;
}

function nextGhost() {
  if (queueIndex >= QUEUE_SIZE) {
    isProcessing = false;
    setSortBtnsDisabled(false);
    showLevelComplete();
    return;
  }
  currentGhost = queue[queueIndex];
  inBossFight = currentGhost.isBoss || false;
  if (inBossFight) {
    showBossIntro(currentGhost);
  } else {
    setBossMode(false);
    const paper = document.getElementById("form-paper");
    const doll = document.getElementById("ghost-doll");
    paper.classList.remove(
      "slide-in",
      "slide-out",
      "flash-correct",
      "flash-wrong-boss",
      "shake"
    );
    doll.classList.remove("slide-in-doll");
    const noAnim = window.matchMedia(
      "(prefers-reduced-motion:reduce)"
    ).matches;
    if (noAnim) {
      renderGhost();
    } else {
      paper.classList.add("slide-out");
      playSoundPaper();
      setTimeout(() => {
        paper.classList.remove("slide-out");
        renderGhost();
        paper.classList.add("slide-in");
        doll.classList.add("slide-in-doll");
        setTimeout(() => {
          paper.classList.remove("slide-in");
          doll.classList.remove("slide-in-doll");
        }, 320);
      }, 180);
    }
  }
}

function showBossIntro(boss) {
  playSoundBoss();
  const labels = {
    1: "⚠ KANDIDAT VIP BERBAHAYA TERDETEKSI ⚠",
    2: "⛔ PELAMAR ANOMALI LINTAS ALAM ⛔",
    3: "🔴 PERINGATAN AUDIT TINGKAT 3 🔴",
    4: "☠ DARURAT — ENTITAS DI LUAR PROTOKOL ☠",
  };
  const titles = {
    1: "INTERVIEW KHUSUS VIP",
    2: "AUDIT ANOMALI ROH",
    3: "PARADOKS REKRUTMEN",
    4: "[ENTITAS TAK TERKLASIFIKASI]",
  };
  const bl = boss.bossLevel || 1;
  document.getElementById("bi-label").textContent = labels[bl] || labels[1];
  document.getElementById("bi-title").textContent = titles[bl] || titles[1];
  document.getElementById("bi-name").textContent = `${boss.nama} ("${boss.alias}")`;
  document.getElementById("bi-desc").textContent = boss.bossIntroDesc;
  document.getElementById("bi-doll").innerHTML = buildGhostSVG(boss);
  document.getElementById("boss-intro-screen").classList.add("show");
}

function startBossFight() {
  document.getElementById("boss-intro-screen").classList.remove("show");
  isProcessing = false;
  setSortBtnsDisabled(false);
  setBossMode(true);
  renderGhost();
  if (currentGhost.timerLimit > 0) {
    startBossTimer(currentGhost.timerLimit);
  }
}

function showLevelComplete() {
  stopBossTimer();
  setBossMode(false);
  playSoundLevel();
  const bonus = 5;
  score += bonus;
  updateHUD();

  const rank = getCurrentRank();
  document.getElementById("lc-bonus").textContent =
    `+${bonus} BONUS SHIFT · Pangkat: ${rank.title}`;

  const nextStage = currentLevel + 1;
  const nextSop = STAGE_SOP_RULES[Math.min(nextStage, 4)];
  const lc = document.getElementById("lc-icon");
  const lcSub = document.getElementById("lc-sub");

  lcSub.innerHTML = `<strong>${nextSop.title}</strong><br>${nextSop.desc}`;
  lc.textContent = nextStage >= 2 ? "📋" : "⭐";
  lcSub.style.color = "#d8b878";
  lcSub.style.fontSize = "14px";

  document.getElementById("level-complete-screen").classList.add("show");
}

function continueToNext() {
  document.getElementById("level-complete-screen").classList.remove("show");
  isProcessing = false;
  setSortBtnsDisabled(false);
  combo = 0;
  hintCharges = Math.min(hintCharges + 1, 3);
  uvCharges = Math.min(uvCharges + 2, 4);
  currentLevel++;
  stopAmbient();
  buildQueue();
  nextGhost();
  setTimeout(() => {
    startAmbient(currentLevel);
  }, 400);
}

// ── KEPUTUSAN STEMPEL HRD (TERIMA KE SURGA / TOLAK KE NERAKA) ──
function sort(pilihan) {
  if (!currentGhost || isPaused || isProcessing) return;
  ensureAudio();
  if (!ambientNode && !isMuted) startAmbient(currentLevel);

  stopBossTimer();
  isProcessing = true;
  setSortBtnsDisabled(true);

  const seharusnya = getDest(currentGhost.dosa);
  const stamp = document.getElementById("stamp");
  const paper = document.getElementById("form-paper");

  playSoundStamp(pilihan === "Surga");

  if (pilihan === "Surga") {
    stamp.className = "show-heaven";
    document.getElementById("stamp-icon").textContent = "☁️";
    document.getElementById("stamp-text").textContent = "DITERIMA\nSURGA";
  } else {
    stamp.className = "show-hell";
    document.getElementById("stamp-icon").textContent = "🔥";
    document.getElementById("stamp-text").textContent = "DITOLAK\nNERAKA";
  }

  // Tampilkan wujud asli kandidat saat keputusan diketok
  candidateState.expression = "exposed";
  refreshCharacterVisuals();

  if (pilihan === seharusnya) {
    combo++;
    if (combo > bestCombo) bestCombo = combo;
    const pts = currentGhost.isBoss ? 3 : 1;
    let bonusPts = 0;
    if (combo >= 3 && combo % 2 === 1) {
      bonusPts += Math.floor((combo - 1) / 2);
    }
    // Bonus ketelitian jika menandai Red Flag pada pelamar bohong
    const flagBonus =
      currentGhost.dosa === "Suka Berbohong" &&
      candidateState.flaggedFields.size > 0
        ? 1
        : 0;
    score += pts + bonusPts + flagBonus;
    updateHUD();

    // Reaksi balon dialog kandidat
    if (pilihan === "Surga") {
      setSpeechBubble(
        "Alhamdulillah! Terima kasih Malaikat HRD, saya janji jadi warga Surga teladan!",
        "verified"
      );
    } else {
      setSpeechBubble(
        "Aduh! Kok ketahuan sih kalau berkas lamaran saya palsu?! Ampun!!",
        "panic"
      );
    }

    let msg = `✅ AUDIT TEPAT`;
    if (flagBonus) msg += ` (+1 Red Flag)`;
    if (combo >= 3)
      msg += ` — STREAK x${combo}!${bonusPts ? ` (+${bonusPts})` : ""}`;
    else if (currentGhost.isBoss) msg += ` — AUDIT VIP SUKSES! (+${pts} poin)`;
    else msg += ` — Kandidat ditempatkan ke ${pilihan}.`;
    setFeedback(msg, "correct");

    if (combo >= 3) {
      playSoundCombo(combo);
      hapticCombo(combo);
    } else if (currentGhost.isBoss) {
      playSoundBossWin();
      hapticBossWin();
    } else {
      playSoundCorrect();
      hapticCorrect();
    }

    if (currentGhost.isBoss && lives < 5) {
      lives++;
      maxLives = Math.max(maxLives, lives);
      hintCharges = Math.min(hintCharges + 1, 3);
      uvCharges = Math.min(uvCharges + 1, 4);
      updateHUD();
      setTimeout(() => {
        playSoundLifeUp();
        hapticLifeUp();
        showFloatingText("+1 ❤️  +1 💡  +1 👁️", "#ff9999");
      }, 400);
    } else if (combo > 0 && combo % 5 === 0) {
      if (lives < 5) {
        lives++;
        maxLives = Math.max(maxLives, lives);
        updateHUD();
        setTimeout(() => {
          playSoundLifeUp();
          hapticLifeUp();
          showFloatingText(`STREAK x${combo} → +1 ❤️`, "#ff9999");
        }, 300);
      } else if (hintCharges < 3) {
        hintCharges++;
        updateHUD();
        setTimeout(() => {
          playSoundHint();
          showFloatingText(`STREAK x${combo} → +1 💡 HINT`, "#c9a84c");
        }, 300);
      }
    }

    stamp.style.animation = "none";
    void stamp.offsetWidth;
    stamp.style.animation =
      "stampBounce 0.4s cubic-bezier(0.36,0.07,0.19,0.97)";

    paper.classList.remove("flash-correct", "shake", "flash-wrong-boss");
    void paper.offsetWidth;
    paper.classList.add("flash-correct");

    recordToArsip(currentGhost, pilihan);
    if (inBossFight) {
      inBossFight = false;
      setBossMode(false);
    }
    queueIndex++;
    setTimeout(() => {
      isProcessing = false;
      setSortBtnsDisabled(false);
      nextGhost();
    }, 1050);
  } else {
    combo = 0;
    lives--;
    updateHUD();

    if (pilihan === "Surga") {
      setSpeechBubble(
        "Hahaha! Malaikat HRD-nya ketipu CV palsu saya! Dadah, saya masuk Surga dulu!",
        "panic"
      );
    } else {
      setSpeechBubble(
        "Lho?! Saya jujur seumur hidup kok malah ditolak ke Neraka?!",
        "panic"
      );
    }

    const bossHint = currentGhost.isBoss
      ? " [Cek BARANG & WAWANCARA!]"
      : " [Cek Portofolio Barang / Polygraph!]";
    setFeedback(
      `❌ SALAH REKRUT — Seharusnya: ${seharusnya}.${bossHint}`,
      "wrong"
    );
    playSoundWrong();
    hapticWrong();
    paper.classList.remove("flash-correct", "shake", "flash-wrong-boss");
    void paper.offsetWidth;
    paper.classList.add(currentGhost.isBoss ? "flash-wrong-boss" : "shake");

    if (lives <= 0) {
      setTimeout(triggerGameOver, 750);
      return;
    }
    if (currentGhost.isBoss) {
      setTimeout(() => {
        isProcessing = false;
        setSortBtnsDisabled(false);
        if (currentGhost.timerLimit > 0)
          startBossTimer(currentGhost.timerLimit);
      }, 650);
    } else {
      recordToArsip(currentGhost, seharusnya);
      queueIndex++;
      setTimeout(() => {
        isProcessing = false;
        setSortBtnsDisabled(false);
        nextGhost();
      }, 1050);
    }
  }
}

function triggerGameOver() {
  isProcessing = false;
  setSortBtnsDisabled(false);
  playSoundGameOver();
  stopBossTimer();
  setBossMode(false);
  stopAmbient();
  document.getElementById("go-score-val").textContent = score;
  bestCombo = Math.max(bestCombo, combo);
  const rank = getCurrentRank();
  const statsEl = document.getElementById("go-stats");
  if (statsEl) {
    statsEl.innerHTML =
      `Pangkat Akhir: <span style="color:var(--gold)">${rank.title}</span><br>` +
      `Shift: <span style="color:var(--gold)">${currentLevel}</span> &nbsp;·&nbsp; ` +
      `Nyawa Maks: <span style="color:#ff9999">${maxLives}</span> &nbsp;·&nbsp; ` +
      `Streak Terbaik: <span style="color:#ff9944">${bestCombo}x</span>`;
  }
  document.getElementById("game-over-screen").classList.add("show");
}

function restartGame() {
  score = 0;
  lives = 3;
  maxLives = 3;
  combo = 0;
  bestCombo = 0;
  hintCharges = 2;
  uvCharges = 3;
  currentLevel = 1;
  inBossFight = false;
  isPaused = false;
  isProcessing = false;
  arsipData = [];
  updateArsipBtn();
  stopBossTimer();
  setBossMode(false);
  stopAmbient();
  document.getElementById("game-over-screen").classList.remove("show");
  updateHUD();
  buildQueue();
  nextGhost();
}

// ── SWITCH TAB: BIODATA CV / PORTOFOLIO BARANG / WAWANCARA & KONFRONTASI BUKTI ──
function switchTab(tab) {
  activeTab = tab;
  playSoundPaper();
  document
    .querySelectorAll(".ghost-tab")
    .forEach((b, i) =>
      b.classList.toggle("active", ["biodata", "barang", "tanya"][i] === tab)
    );

  const panel = document.getElementById("side-panel");
  const body = document.getElementById("side-panel-body");
  const title = document.getElementById("side-panel-title");

  if (tab === "biodata") {
    panel.classList.remove("show");
    return;
  }

  panel.classList.add("show");
  if (tab === "barang") {
    title.textContent = "🎒 PORTOFOLIO & BARANG BAWAAN";
    body.innerHTML = `<div class="panel-helper-note">Klik setiap barang untuk memeriksa keaslian klaim CV pelamar. Barang yang sudah diperiksa dapat digunakan untuk <strong>⚡ Konfrontasi Bukti</strong> di tab Wawancara!</div>`;

    (currentGhost.barang || []).forEach((b, idx) => {
      const card = document.createElement("div");
      const alreadyInspected = candidateState.inspectedItems.has(idx);
      card.className = `item-card${alreadyInspected ? " inspected" : ""}`;
      card.innerHTML = `
        <span class="item-icon">${b.icon}</span>
        <div class="item-info">
          <div class="item-name">${b.nama} ${alreadyInspected ? '<span class="inspected-tag">✓ Diperiksa</span>' : ""}</div>
          <div class="item-tap">${alreadyInspected ? "[ lihat catatan bukti ]" : "[ klik untuk periksa bukti ]"}</div>
          <div class="item-hint${alreadyInspected ? " show" : ""}">${b.hint}</div>
        </div>`;

      card.addEventListener("click", () => {
        candidateState.inspectedItems.add(idx);
        const hint = card.querySelector(".item-hint");
        const tap = card.querySelector(".item-tap");
        const isOpen = hint.classList.contains("show");
        card.classList.add("inspected");
        const nameRow = card.querySelector(".item-name");
        if (nameRow && !nameRow.querySelector(".inspected-tag")) {
          nameRow.innerHTML += ' <span class="inspected-tag">✓ Diperiksa</span>';
        }
        if (!isOpen) {
          hint.classList.add("show");
          tap.textContent = "[ tutup catatan ]";
          tone(480, "sine", 0.08, 0.15);
        } else {
          hint.classList.remove("show");
          tap.textContent = "[ lihat catatan bukti ]";
        }
      });
      body.appendChild(card);
    });
  } else if (tab === "tanya") {
    renderInterviewTab(body, title);
  }
}

function renderInterviewTab(body, title) {
  title.textContent = "💬 RUANG WAWANCARA & KONFRONTASI";
  body.innerHTML = "";

  const isBad = currentGhost.dosa === "Suka Berbohong";

  const intro = document.createElement("div");
  intro.className = "panel-helper-note";
  intro.innerHTML = `Ajukan pertanyaan kepada <strong>${currentGhost.nama}</strong>. Amati perubahan <strong>Ekspresi Wajah</strong> dan gelombang <strong>Polygraph Detak Roh</strong> di panel kiri!`;
  body.appendChild(intro);

  // Daftar pertanyaan interview
  (currentGhost.dialog || []).forEach((d, qIdx) => {
    const wrap = document.createElement("div");
    const btn = document.createElement("button");
    const ans = document.createElement("div");

    const wasAsked = candidateState.askedQuestions.has(qIdx);
    btn.className = `dialog-question-btn${wasAsked ? " asked" : ""}`;
    btn.textContent = d.pertanyaan;
    ans.className = `dialog-answer-box${wasAsked ? " show" : ""}`;

    // Jika sudah dikonfrontasi, pelamar selalu jujur!
    const forceTruth = candidateState.confronted;
    const slips = forceTruth || (nameHash(currentGhost.nama + qIdx) % 10 < 3);
    const isLyingNow = isBad && !slips && d.bohong;
    const jawabanText = isLyingNow
      ? `"${d.bohong}"`
      : slips && isBad
        ? `*terbata-bata* "${d.jujur}"`
        : `"${d.jujur}"`;

    const polyBadge = isLyingNow
      ? `<span class="poly-inline-tag lie">📈 Polygraph: NAIK TAJAM (Indikasi Dusta/Tegang)</span>`
      : `<span class="poly-inline-tag calm">📉 Polygraph: Stabil / Konsisten</span>`;

    ans.innerHTML = `<div class="dialog-speaker">${currentGhost.nama} menjawab: ${polyBadge}</div>${jawabanText}`;

    btn.addEventListener("click", () => {
      candidateState.askedQuestions.add(qIdx);
      btn.classList.add("asked");
      ans.classList.add("show");

      if (isBad && !candidateState.confronted) {
        candidateState.expression = "nervous";
        PolygraphMonitor.setMode(isLyingNow ? "lie" : "nervous");
        playSoundPolygraph(true);
      } else {
        if (!candidateState.confronted) {
          candidateState.expression = "neutral";
          PolygraphMonitor.setMode("calm");
        }
        playSoundPolygraph(false);
      }
      refreshCharacterVisuals();
      setSpeechBubble(jawabanText.replace(/^"|"$/g, ""), isBad ? "nervous" : "normal");
    });

    wrap.appendChild(btn);
    wrap.appendChild(ans);
    body.appendChild(wrap);
  });

  // ── FITUR BARU: ⚡ KONFRONTASI BUKTI PORTOFOLIO ──
  const confrontBox = document.createElement("div");
  confrontBox.className = "confront-section";

  if (candidateState.confronted) {
    confrontBox.innerHTML = `
      <div class="confront-result ${isBad ? "break" : "verified"}">
        ${
          isBad
            ? "⚡ <strong>SKAKMAT! KEBOHONGAN TERBONGKAR!</strong><br>Pelamar tidak berkutik saat melihat barang buktinya sendiri dan mengakui dosanya!"
            : "✨ <strong>BUKTI TERVERIFIKASI JUJUR!</strong><br>Barang bawaan pelamar selaras 100% dengan kesaksian hidupnya."
        }
      </div>`;
  } else if (candidateState.inspectedItems.size === 0) {
    confrontBox.innerHTML = `
      <div class="confront-locked">
        🔒 <strong>KONFRONTASI BUKTI BELUM SIAP</strong><br>
        Buka tab <strong>🎒 Barang</strong> dan periksa minimal 1 barang terlebih dahulu untuk menyodorkan bukti ke hadapan pelamar!
      </div>`;
  } else {
    let itemsHtml = "";
    candidateState.inspectedItems.forEach((idx) => {
      const item = currentGhost.barang[idx];
      if (item) {
        itemsHtml += `<button class="confront-item-btn" onclick="confrontWithEvidence(${idx})">
          <span>${item.icon}</span> Sodorkan: <strong>${item.nama}</strong>
        </button>`;
      }
    });
    confrontBox.innerHTML = `
      <div class="confront-header">⚡ SODORKAN BUKTI KE MEJA INTERVIEW:</div>
      <div class="confront-sub">Pilih barang yang sudah kamu periksa untuk menguji kejujuran pelamar:</div>
      <div class="confront-btn-list">${itemsHtml}</div>
    `;
  }
  body.appendChild(confrontBox);
}

function confrontWithEvidence(itemIdx) {
  if (!currentGhost || candidateState.confronted) return;
  const item = currentGhost.barang[itemIdx];
  if (!item) return;

  candidateState.confronted = true;
  const isBad = currentGhost.dosa === "Suka Berbohong";

  playSoundConfront(isBad);

  if (isBad) {
    candidateState.expression = "exposed";
    PolygraphMonitor.setMode("lie");
    score += 1; // Bonus investigasi
    updateHUD();
    showFloatingText("⚡ SKAKMAT! +1 POIN AUDIT", "#f87171");

    // Jika CV dipalsukan di Stage 3+, bongkar teks aslinya di CV!
    if (currentGhost.cvForged) {
      document.getElementById("f-kebiasaan").textContent =
        currentGhost.kebiasaan + " [TERBONGKAR!]";
      document.getElementById("f-catatan").textContent =
        currentGhost.catatan;
    }

    const firstHonest =
      (currentGhost.dialog && currentGhost.dialog[0]?.jujur) ||
      "Ampun! Saya mengaku saya telah berbohong di berkas lamaran!";
    setSpeechBubble(
      `Gawat, dari mana Malaikat tahu soal ${item.nama}?! ${firstHonest}`,
      "panic"
    );
  } else {
    candidateState.expression = "happy";
    PolygraphMonitor.setMode("verified");
    showFloatingText("✨ BUKTI VALID & JUJUR", "#38bdf8");
    setSpeechBubble(
      `Oh, ${item.nama} itu memang kenang-kenangan tulus saya semasa hidup, Pak/Bu Malaikat.`,
      "verified"
    );
  }

  refreshCharacterVisuals();
  const body = document.getElementById("side-panel-body");
  const title = document.getElementById("side-panel-title");
  if (activeTab === "tanya" && body && title) {
    renderInterviewTab(body, title);
  }
}

function resetTabs() {
  activeTab = "biodata";
  document
    .querySelectorAll(".ghost-tab")
    .forEach((b, i) => b.classList.toggle("active", i === 0));
  document.getElementById("side-panel").classList.remove("show");
  document.getElementById("side-panel-body").innerHTML = "";
}

// ── HINT SYSTEM ──
function useHint() {
  if (!currentGhost || inBossFight) return;
  if (hintCharges <= 0) {
    playSoundHintEmpty();
    showFloatingText("KUOTA HINT HABIS!", "#cc8800");
    return;
  }
  hintCharges--;
  updateHUD();
  playSoundHint();
  hapticHint();
  const dest = getDest(currentGhost.dosa);
  const icon = dest === "Surga" ? "☁️" : "🔥";
  showFloatingText(`💡 REKOMENDASI PUSAT: ${icon} ${dest.toUpperCase()}`, "#c9a84c");
  setFeedback(
    `💡 BOCORAN HRD PUSAT: Kandidat ini seharusnya ke ${dest}.`,
    "correct"
  );
  setTimeout(() => setFeedback("", ""), 2800);
}

// ── FLOATING TEXT ──
function showFloatingText(msg, color) {
  const el = document.createElement("div");
  el.textContent = msg;
  Object.assign(el.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontFamily: "var(--font-mono)",
    fontSize: "22px",
    color,
    textShadow: `0 0 12px ${color}`,
    letterSpacing: "3px",
    pointerEvents: "none",
    zIndex: "9999",
    whiteSpace: "nowrap",
    animation: "floatUp 1.4s ease forwards",
  });
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1400);
}

// ── BUKU PANDUAN SOP HRD & TUTORIAL ──
function openSOP() {
  const sop = STAGE_SOP_RULES[Math.min(currentLevel, 4)];
  const rank = getCurrentRank();
  const existing = document.getElementById("sop-modal");
  if (existing) existing.remove();

  const el = document.createElement("div");
  el.id = "sop-modal";
  el.innerHTML = `
    <div class="sop-modal-card">
      <div class="sop-modal-header">
        <div>
          <div class="sop-code">${sop.code} · PANGKAT: ${rank.title.toUpperCase()}</div>
          <div class="sop-title">📘 BUKU PANDUAN SOP HRD ALAM BAKA</div>
        </div>
        <button class="sop-close-btn" onclick="document.getElementById('sop-modal').remove()">✕ TUTUP</button>
      </div>
      <div class="sop-modal-body">
        <div class="sop-stage-banner">
          <strong>${sop.title}</strong>
          <p>${sop.desc}</p>
        </div>
        <div class="sop-rules-list">
          ${sop.rules.map((r) => `<div class="sop-rule-item">${r}</div>`).join("")}
        </div>
        <div class="sop-tools-grid">
          <div class="sop-tool-box">
            <strong>📈 Polygraph Detak Roh</strong>
            <p>Memantau frekuensi kejujuran kandidat saat menjawab pertanyaan wawancara.</p>
          </div>
          <div class="sop-tool-box">
            <strong>⚡ Konfrontasi Bukti</strong>
            <p>Periksa barang di tab <em>Barang</em>, lalu sodorkan di tab <em>Wawancara</em> untuk membongkar kebohongan (+1 Poin)!</p>
          </div>
          <div class="sop-tool-box">
            <strong>👁️ Mata Malaikat (UV)</strong>
            <p>Menembus tip-ex gaib pada kertas CV dan memperlihatkan residu aura sejati kandidat.</p>
          </div>
          <div class="sop-tool-box">
            <strong>🚩 Red Flag CV</strong>
            <p>Klik kolom klaim/kebiasaan di CV yang mencurigakan untuk menandainya (+1 Bonus jika pelamar memang penipu).</p>
          </div>
        </div>
      </div>
      <div class="sop-modal-footer">
        <button class="sop-confirm-btn" onclick="document.getElementById('sop-modal').remove()">SIAP LAKSANAKAN SOP ▶</button>
      </div>
    </div>
  `;
  el.addEventListener("click", (e) => {
    if (e.target === el) el.remove();
  });
  document.body.appendChild(el);
}

function showTutorial() {
  if (tutorialDone) return;
  tutorialDone = true;
  openSOP();
}

// ── ARSIP JIWA ──
function recordToArsip(ghost, dest) {
  const exists = arsipData.find(
    (a) => a.ghost.nama === ghost.nama && a.ghost.isBoss === ghost.isBoss
  );
  if (!exists) {
    arsipData.push({
      ghost: { ...ghost },
      dest,
      stage: currentLevel,
      timestamp: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
    updateArsipBtn();
  }
}

function updateArsipBtn() {
  const btn = document.getElementById("arsip-btn");
  if (btn) {
    const n = arsipData.length;
    btn.textContent = n > 0 ? `📜${n}` : "📜";
  }
}

function openArsip() {
  if (inBossFight && !isPaused) togglePause();
  renderArsip();
  document.getElementById("arsip-screen").classList.add("show");
}

function closeArsip() {
  document.getElementById("arsip-screen").classList.remove("show");
  if (isPaused) togglePause();
}

function closeArsipDetail() {
  document.getElementById("arsip-detail").classList.remove("show");
}

function filterArsip(f) {
  arsipFilter = f;
  document.querySelectorAll(".arsip-filter-btn").forEach((b) => {
    b.classList.toggle(
      "active",
      b.textContent.toLowerCase().includes(f) ||
        (f === "semua" && b.textContent.includes("Semua"))
    );
  });
  renderArsip();
}

function renderArsip() {
  const body = document.getElementById("arsip-body");
  const countEl = document.getElementById("arsip-count");
  body.innerHTML = "";

  let filtered = arsipData;
  if (arsipFilter === "surga")
    filtered = arsipData.filter((a) => a.dest === "Surga");
  else if (arsipFilter === "neraka")
    filtered = arsipData.filter((a) => a.dest === "Neraka");
  else if (arsipFilter === "boss")
    filtered = arsipData.filter((a) => a.ghost.isBoss);

  countEl.textContent = `${arsipData.length} pelamar tercatat${
    filtered.length !== arsipData.length
      ? ` · ${filtered.length} ditampilkan`
      : ""
  }`;

  if (filtered.length === 0) {
    body.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;font-family:var(--font-mono);color:#6a5030;font-size:15px;letter-spacing:2px;">
      ${
        arsipData.length === 0
          ? '☠ BELUM ADA BERKAS PELAMAR TERCATAT<br><span style="font-size:12px;margin-top:8px;display:block;color:#4a3418">Stempel berkas lamaran untuk mengisi arsip HRD ini</span>'
          : "☠ TIDAK ADA PELAMAR DENGAN FILTER INI"
      }
    </div>`;
    return;
  }

  filtered.forEach((entry) => {
    const card = document.createElement("div");
    const destClass = entry.dest === "Surga" ? "surga" : "neraka";
    card.className = `arsip-card ${destClass}${
      entry.ghost.isBoss ? " boss-card" : ""
    }`;

    const svgStr = buildGhostSVG(entry.ghost, { expression: "exposed" });
    card.innerHTML = `
      <div class="arsip-stamp ${destClass}">${
        entry.dest === "Surga" ? "☁️ SURGA" : "🔥 NERAKA"
      }</div>
      <div class="arsip-doll">${svgStr}</div>
      <div class="arsip-nama">${entry.ghost.isBoss ? "☠ " : ""}"${
        entry.ghost.alias || entry.ghost.nama
      }"</div>
      <div class="arsip-pekerjaan">${entry.ghost.pekerjaan}</div>
      <div class="arsip-dosa" style="margin-top:4px;color:${
        entry.dest === "Surga" ? "#2a5885" : "#8a2a2a"
      }">
        Shift ${entry.stage} · ${entry.timestamp}
      </div>`;

    card.addEventListener("click", () => showArsipDetail(entry));
    body.appendChild(card);
  });
}

function showArsipDetail(entry) {
  const g = entry.ghost;
  const destColor = entry.dest === "Surga" ? "#2a5885" : "#8a2a2a";
  const destIcon = entry.dest === "Surga" ? "☁️" : "🔥";
  const svgStr = buildGhostSVG(g, { expression: "exposed" });

  document.getElementById("arsip-detail-body").innerHTML = `
    <div style="display:flex;gap:16px;align-items:flex-start;margin-bottom:14px;padding-top:8px;">
      <div style="width:90px;height:115px;flex-shrink:0;">${svgStr}</div>
      <div>
        <div style="font-family:var(--font-hand);font-size:20px;font-weight:700;color:#1a1008;margin-bottom:4px;">${g.nama}</div>
        <div style="font-family:var(--font-hand);font-size:14px;color:#6a5030;margin-bottom:6px;">"${g.alias}"</div>
        <div style="font-family:var(--font-mono);font-size:12px;color:${destColor};letter-spacing:2px;border:1px solid ${destColor};border-radius:2px;padding:2px 8px;display:inline-block;">${destIcon} ${entry.dest.toUpperCase()}</div>
      </div>
    </div>
    <div style="border-top:1px solid #c0a060;padding-top:10px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 12px;margin-bottom:8px;">
        <div><div style="font-size:8px;letter-spacing:2px;text-transform:uppercase;color:#9a7a4a;">Pekerjaan</div><div style="font-family:var(--font-hand);font-size:14px;color:#1a1008;">${g.pekerjaan}</div></div>
        <div><div style="font-size:8px;letter-spacing:2px;text-transform:uppercase;color:#9a7a4a;">Sebab Wafat</div><div style="font-family:var(--font-hand);font-size:14px;color:#1a1008;">${g.sebab}</div></div>
        <div><div style="font-size:8px;letter-spacing:2px;text-transform:uppercase;color:#9a7a4a;">Asal</div><div style="font-family:var(--font-hand);font-size:14px;color:#1a1008;">${g.asal}</div></div>
        <div><div style="font-size:8px;letter-spacing:2px;text-transform:uppercase;color:#9a7a4a;">Umur</div><div style="font-family:var(--font-hand);font-size:14px;color:#1a1008;">${g.umur} tahun</div></div>
      </div>
      <div style="margin-bottom:8px;">
        <div style="font-size:8px;letter-spacing:2px;text-transform:uppercase;color:#9a7a4a;margin-bottom:3px;">Sifat Sejati (Hasil Audit)</div>
        <div style="font-family:var(--font-hand);font-size:16px;font-weight:700;color:#1a1008;">${g.dosa}</div>
      </div>
      <div style="margin-bottom:8px;">
        <div style="font-size:8px;letter-spacing:2px;text-transform:uppercase;color:#9a7a4a;margin-bottom:3px;">Kebiasaan Asli</div>
        <div style="font-family:var(--font-hand);font-size:13px;color:#3a2010;">${g.kebiasaan}</div>
      </div>
      <div style="margin-top:10px;padding-top:8px;border-top:1px dashed #c0a860;">
        <div style="font-size:8px;letter-spacing:2px;text-transform:uppercase;color:#9a7a4a;margin-bottom:3px;">Catatan Investigasi</div>
        <div style="font-family:var(--font-hand);font-size:13px;color:#4a3010;font-style:italic;">${g.catatan}</div>
      </div>
    </div>`;

  document.getElementById("arsip-detail").classList.add("show");
}

// ── JUMPSCARE HANDLER ──
function triggerJumpscare(boss, onDone) {
  const screen = document.getElementById("jumpscare");
  const svgEl = document.getElementById("jumpscare-svg");
  const textEl = document.getElementById("jumpscare-text");
  const bl = boss.bossLevel || 1;

  const texts = {
    1: "WAKTU INTERVIEW HABIS, PETUGAS.",
    2: "KAU TIDAK BISA MENOLAKKU.",
    3: "AKU SUDAH ADA SEBELUM MEJA INI.",
    4: "∞",
  };
  textEl.textContent = texts[Math.min(bl, 4)];
  svgEl.innerHTML = buildJumpscareSVG(boss)
    .replace(/<svg[^>]*>/, "")
    .replace("</svg>", "");

  playSoundJumpscare(bl);
  hapticJumpscare();
  document.body.classList.add("jumpscare-shake");
  setTimeout(() => document.body.classList.remove("jumpscare-shake"), 650);

  document.body.style.overflow = "hidden";
  screen.classList.add("show");

  setTimeout(() => {
    screen.classList.remove("show");
    document.body.style.overflow = "";
    onDone();
  }, 1200);
}

// ── MUTE & PAUSE ──
function toggleMute() {
  isMuted = !isMuted;
  const btn = document.getElementById("mute-btn");
  if (btn) {
    btn.textContent = isMuted ? "🔇" : "🔊";
    btn.classList.toggle("muted", isMuted);
  }
  if (isMuted) {
    stopAmbient();
  } else {
    startAmbient(currentLevel);
  }
}

function togglePause() {
  if (document.getElementById("game-over-screen").classList.contains("show"))
    return;
  if (
    document.getElementById("level-complete-screen").classList.contains("show")
  )
    return;
  if (document.getElementById("boss-intro-screen").classList.contains("show"))
    return;

  isPaused = !isPaused;
  const btn = document.getElementById("pause-btn");
  if (isPaused) {
    if (bossTimer) {
      clearInterval(bossTimer);
      bossTimer = null;
      pauseTimer = bossTimeLeft;
    }
    stopAmbient();
    showPauseOverlay();
    if (btn) {
      btn.textContent = "▶";
      btn.style.color = "#c9a84c";
      btn.style.borderColor = "#c9a84c";
    }
  } else {
    hidePauseOverlay();
    if (pauseTimer !== null && inBossFight) {
      startBossTimer(pauseTimer);
      pauseTimer = null;
    }
    if (!isMuted) startAmbient(currentLevel);
    if (btn) {
      btn.textContent = "⏸";
      btn.style.color = "";
      btn.style.borderColor = "";
    }
  }
}

function showPauseOverlay() {
  if (document.getElementById("pause-overlay")) return;
  const el = document.createElement("div");
  el.id = "pause-overlay";
  el.innerHTML = `
    <div style="background:rgba(10,7,2,0.97);border:1px solid #4a3010;border-top-color:#5a3e18;border-radius:6px;padding:28px 36px;text-align:center;box-shadow:0 0 40px rgba(0,0,0,0.9);">
      <div style="font-family:var(--font-mono);font-size:32px;color:var(--gold);letter-spacing:6px;margin-bottom:8px;">⏸ ISTIRAHAT SHIFT</div>
      <p style="font-family:var(--font-type);font-size:13px;color:#8a6a3a;letter-spacing:1px;margin-bottom:20px;">Antrean pelamar di lobi akhirat ditahan sementara...</p>
      <button onclick="togglePause()"
        style="font-family:var(--font-mono);font-size:20px;letter-spacing:3px;padding:10px 32px;background:linear-gradient(170deg,#c9a84c,#7a6020);color:#1a0f00;border:none;border-radius:3px;cursor:pointer;box-shadow:0 4px 0 #3a2808;min-height:48px;">
        ▶ LANJUTKAN INTERVIEW
      </button>
    </div>`;
  Object.assign(el.style, {
    position: "fixed",
    inset: "0",
    zIndex: "9980",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(5,3,0,0.88)",
    animation: "fadeIn 0.25s ease",
  });
  document.body.appendChild(el);
}

function hidePauseOverlay() {
  const el = document.getElementById("pause-overlay");
  if (el) el.remove();
}

// ── KEYBOARD SHORTCUTS ──
document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const overlayOpen =
    document.getElementById("game-over-screen").classList.contains("show") ||
    document
      .getElementById("level-complete-screen")
      .classList.contains("show") ||
    document.getElementById("boss-intro-screen").classList.contains("show");

  if (e.key === "Escape") {
    const sopModal = document.getElementById("sop-modal");
    if (sopModal) {
      sopModal.remove();
      return;
    }
    if (document.getElementById("arsip-detail").classList.contains("show")) {
      closeArsipDetail();
      return;
    }
    if (document.getElementById("arsip-screen").classList.contains("show")) {
      closeArsip();
      return;
    }
    if (activeTab !== "biodata") {
      switchTab("biodata");
      return;
    }
    return;
  }
  if (overlayOpen || !currentGhost) return;

  if (!isProcessing && !isPaused) {
    if (e.key === "1" || e.key === "ArrowLeft") sort("Surga");
    if (e.key === "2" || e.key === "ArrowRight") sort("Neraka");
  }

  if (e.key === "h" || e.key === "H") useHint();
  if (e.key === "u" || e.key === "U") toggleUVScanner();
  if (e.key === "s" || e.key === "S") openSOP();
  if (e.key === "a" || e.key === "A") openArsip();
  if (e.key === "p" || e.key === "P") {
    togglePause();
    return;
  }
  if (isPaused) return;
  if (e.key === "q" || e.key === "Q") switchTab("biodata");
  if (e.key === "w" || e.key === "W") switchTab("barang");
  if (e.key === "e" || e.key === "E") switchTab("tanya");
});

// ── BOOT & LOADING SCREEN ──
window.addEventListener("DOMContentLoaded", () => {
  PolygraphMonitor.init("poly-canvas");
  updateHUD();
  buildQueue();
  nextGhost();

  const lines = [
    "HRD ALAM BAKA OS v7.0",
    "──────────────────────",
    "[ OK ] Kalibrasi Polygraph Roh",
    "[ OK ] Scanner Mata Malaikat UV",
    "[ OK ] Database CV 999.999 Arwah",
    "[ OK ] Server Kavling Surga & Neraka",
    "[ OK ] Kopi Malaikat Diseduh ☕",
    "",
    "MEJA INTERVIEW SIAP.",
    ">>> BUKA ANTREAN <<<",
  ];
  const el = document.getElementById("ls-boot-text");
  let li = 0;
  let ci = 0;
  let txt = "";

  function go() {
    if (li >= lines.length) {
      document.getElementById("ls-room").classList.add("do-zoom");
      setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        if (!tutorialDone) showTutorial();
      }, 850);
      return;
    }
    const line = lines[li];
    if (ci < line.length) {
      txt += line[ci++];
      el.textContent = txt;
      setTimeout(go, line.startsWith("[") ? 6 : line.startsWith(">") ? 35 : 10);
    } else {
      txt += "\n";
      el.textContent = txt;
      el.scrollTop = el.scrollHeight;
      li++;
      ci = 0;
      setTimeout(go, 15);
    }
  }
  setTimeout(go, 150);
});
