// ══════════════════════════════════════════════════════════════════════════
// DEAD DESK: AUDIO & HAPTIC ENGINE (WEB AUDIO SYNTHESIZER)
// ══════════════════════════════════════════════════════════════════════════

const actx = new (window.AudioContext || window.webkitAudioContext)();
let isMuted = false;
let ambientNode = null;
let ambientLfo = null;
let ambientGain = null;

function ensureAudio() {
  if (actx.state === "suspended") {
    actx.resume().catch(() => {});
  }
}

// Semua efek suara melewati tone() dan menghormati status isMuted
function tone(f, t, d, v = 0.3, dl = 0) {
  if (isMuted) return;
  ensureAudio();
  try {
    const o = actx.createOscillator();
    const g = actx.createGain();
    o.connect(g);
    g.connect(actx.destination);
    o.type = t;
    const start = actx.currentTime + dl;
    o.frequency.setValueAtTime(f, start);
    g.gain.setValueAtTime(Math.max(v, 0.001), start);
    g.gain.exponentialRampToValueAtTime(0.001, start + d);
    o.start(start);
    o.stop(start + d + 0.04);
  } catch (e) {}
}

// Suara hentakan stempel HRD di atas meja
function playSoundStamp(isHeaven) {
  if (isMuted) return;
  ensureAudio();
  // Thud fisik meja
  tone(95, "triangle", 0.11, 0.45, 0);
  tone(58, "sine", 0.16, 0.5, 0.02);
  // Chime keputusan
  if (isHeaven) {
    tone(523.25, "sine", 0.14, 0.22, 0.06);
    tone(659.25, "sine", 0.18, 0.2, 0.12);
  } else {
    tone(196, "sawtooth", 0.15, 0.25, 0.06);
    tone(146.8, "sawtooth", 0.2, 0.25, 0.12);
  }
}

// Suara gesekan kertas berkas lamaran
function playSoundPaper() {
  tone(320, "triangle", 0.05, 0.12, 0);
  tone(480, "sine", 0.06, 0.08, 0.03);
}

// Suara ketikan dialog / wawancara
function playSoundType() {
  tone(700 + Math.random() * 180, "triangle", 0.025, 0.06, 0);
}

// Suara detak polygraph
function playSoundPolygraph(isLying) {
  if (isLying) {
    tone(880, "sawtooth", 0.08, 0.16, 0);
    tone(980, "square", 0.09, 0.14, 0.09);
  } else {
    tone(520, "sine", 0.06, 0.1, 0);
  }
}

// Suara konfrontasi bukti ("SKAKMAT / OBJECTION!")
function playSoundConfront(isBreak) {
  if (isBreak) {
    tone(220, "sawtooth", 0.12, 0.35, 0);
    tone(440, "sawtooth", 0.14, 0.35, 0.08);
    tone(659.25, "square", 0.22, 0.3, 0.16);
    tone(880, "sine", 0.3, 0.28, 0.24);
  } else {
    tone(440, "sine", 0.12, 0.22, 0);
    tone(554.37, "sine", 0.15, 0.22, 0.09);
    tone(659.25, "sine", 0.2, 0.2, 0.18);
  }
}

// Suara Mata Malaikat (UV Scanner)
function playSoundScanner(on) {
  if (on) {
    tone(380, "sine", 0.12, 0.18, 0);
    tone(760, "sine", 0.22, 0.15, 0.07);
  } else {
    tone(620, "sine", 0.1, 0.14, 0);
    tone(310, "sine", 0.15, 0.14, 0.06);
  }
}

function playSoundCorrect() {
  tone(660, "sine", 0.12, 0.25);
  tone(880, "sine", 0.15, 0.2, 0.08);
  tone(1100, "sine", 0.12, 0.15, 0.16);
}

function playSoundCombo(n) {
  const base = 660 + Math.min(n - 2, 6) * 80;
  tone(base, "sine", 0.1, 0.28);
  tone(base * 1.25, "sine", 0.12, 0.22, 0.06);
  tone(base * 1.5, "sine", 0.15, 0.18, 0.13);
  tone(base * 2, "sine", 0.1, 0.14, 0.2);
}

function playSoundLifeUp() {
  tone(440, "sine", 0.15, 0.2);
  tone(554, "sine", 0.15, 0.2, 0.1);
  tone(659, "sine", 0.2, 0.25, 0.2);
  tone(880, "sine", 0.15, 0.2, 0.35);
}

function playSoundHint() {
  tone(330, "sine", 0.08, 0.15);
  tone(440, "sine", 0.1, 0.15, 0.1);
  tone(550, "sine", 0.08, 0.12, 0.2);
}

function playSoundHintEmpty() {
  tone(180, "sawtooth", 0.15, 0.3);
  tone(160, "square", 0.1, 0.2, 0.15);
}

function playSoundWrong() {
  tone(200, "sawtooth", 0.2, 0.4);
  tone(150, "sawtooth", 0.25, 0.4, 0.15);
  tone(120, "square", 0.3, 0.35, 0.3);
}

function playSoundGameOver() {
  tone(220, "sawtooth", 0.4, 0.5);
  tone(180, "sawtooth", 0.5, 0.5, 0.35);
  tone(140, "square", 0.7, 0.5, 0.7);
  tone(100, "sawtooth", 0.9, 0.4, 1.1);
}

function playSoundBoss() {
  tone(80, "sawtooth", 0.6, 0.5);
  tone(60, "square", 0.8, 0.5, 0.4);
  tone(40, "sawtooth", 1.0, 0.4, 0.8);
}

function playSoundBossWin() {
  [300, 400, 550, 700, 900].forEach((f, i) =>
    tone(f, "sine", 0.2, 0.25, i * 0.12)
  );
}

function playSoundLevel() {
  [523, 659, 784, 1047].forEach((f, i) =>
    tone(f, "sine", 0.25, 0.25, i * 0.1)
  );
}

function playSoundJumpscare(level) {
  if (isMuted) return;
  ensureAudio();
  tone(30, "sawtooth", 1.0, 0.6);
  tone(45, "sawtooth", 0.9, 0.5, 0.02);
  tone(800 + level * 200, "sawtooth", 0.3, 0.4, 0.0);
  tone(1200 + level * 300, "square", 0.25, 0.35, 0.05);
  tone(600, "sawtooth", 0.4, 0.35, 0.1);
  tone(200, "square", 0.5, 0.5, 0.0);
  tone(80, "sawtooth", 0.7, 0.55, 0.08);
  tone(50, "sine", 0.8, 0.3, 0.15);
}

function startAmbient(stageLevel = 1) {
  stopAmbient();
  if (isMuted) return;
  ensureAudio();
  try {
    const stageFreqs = { 1: 55, 2: 48, 3: 42, 4: 36 };
    const freq = stageFreqs[Math.min(stageLevel, 4)];
    ambientGain = actx.createGain();
    ambientGain.gain.setValueAtTime(0, actx.currentTime);
    ambientGain.gain.linearRampToValueAtTime(0.035, actx.currentTime + 2.5);
    ambientGain.connect(actx.destination);

    ambientNode = actx.createOscillator();
    ambientNode.type = "sine";
    ambientNode.frequency.value = freq;
    ambientNode.connect(ambientGain);
    ambientNode.start();

    ambientLfo = actx.createOscillator();
    const lfoGain = actx.createGain();
    ambientLfo.frequency.value = 0.3 + stageLevel * 0.1;
    lfoGain.gain.value = 0.012;
    ambientLfo.connect(lfoGain);
    lfoGain.connect(ambientGain.gain);
    ambientLfo.start();
  } catch (e) {}
}

function stopAmbient() {
  if (ambientGain) {
    try {
      ambientGain.gain.linearRampToValueAtTime(0, actx.currentTime + 0.6);
    } catch (e) {}
  }
  const oldNode = ambientNode;
  const oldLfo = ambientLfo;
  setTimeout(() => {
    try {
      if (oldNode) oldNode.stop();
      if (oldLfo) oldLfo.stop();
    } catch (e) {}
  }, 700);
  ambientNode = null;
  ambientLfo = null;
  ambientGain = null;
}

// ── HAPTIC FEEDBACK ──
function haptic(pattern) {
  if (!isMuted && navigator.vibrate) {
    try {
      navigator.vibrate(pattern);
    } catch (e) {}
  }
}
function hapticCorrect() {
  haptic(60);
}
function hapticWrong() {
  haptic([100, 50, 100]);
}
function hapticCombo(n) {
  haptic(
    Array.from({ length: Math.min(n, 5) }, () => [40, 20])
      .flat()
      .slice(0, -1)
  );
}
function hapticBossWin() {
  haptic([80, 40, 80, 40, 160]);
}
function hapticLifeUp() {
  haptic([60, 30, 60, 30, 200]);
}
function hapticJumpscare() {
  haptic([200, 50, 200, 50, 400]);
}
function hapticHint() {
  haptic([30, 20, 30]);
}
function hapticTimer() {
  haptic(20);
}
