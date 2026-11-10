// ══════════════════════════════════════════════════════════════════════════
// DEAD DESK: GRAPHICS, DYNAMIC PAPERDOLL, PASFOTO CV & POLYGRAPH ENGINE
// ══════════════════════════════════════════════════════════════════════════

function nameHash(s) {
  let h = 0;
  const str = String(s || "soul");
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

// ── COSTUME & OCCUPATION PROPS ──
function getCostume(ghost, w) {
  const p = (ghost.pekerjaan || "").toLowerCase();
  const n = (ghost.nama || "").toLowerCase();
  const warna = w.aksen;

  if (
    p.includes("biarawati") ||
    p.includes("suster") ||
    p.includes("nun") ||
    n.includes("sister") ||
    n.includes("agnes") ||
    n.includes("margaretha")
  ) {
    return `<path d="M46 72 Q50 48 80 42 Q110 48 114 72 Q106 58 80 56 Q54 58 46 72 Z" fill="#1a1a1a" opacity="0.90"/>
      <rect x="77" y="42" width="6" height="16" rx="1" fill="white" opacity="0.85"/>
      <rect x="72" y="50" width="16" height="4" rx="1" fill="white" opacity="0.85"/>
      <path d="M54 132 Q50 148 56 162 L104 162 Q110 148 106 132 Q100 136 80 138 Q60 136 54 132 Z" fill="#1a1a1a" opacity="0.75"/>`;
  }
  if (
    p.includes("pejabat") ||
    p.includes("anggota dewan") ||
    p.includes("koruptor") ||
    n.includes("bambang") ||
    n.includes("soeharto")
  ) {
    return `<path d="M50 130 Q46 150 52 172 L108 172 Q114 150 110 130 Q96 140 80 142 Q64 140 50 130 Z" fill="#0d1326" opacity="0.92"/>
      <polygon points="80,132 74,148 86,148" fill="#cc2222" opacity="0.95"/>
      <path d="M75,148 L73,164 L80,170 L87,164 L85,148 Z" fill="#aa1818" opacity="0.9"/>
      <circle cx="94" cy="146" r="3.5" fill="#d4af37"/>`;
  }
  if (p.includes("pengacara") || n.includes("hargrove") || n.includes("victor")) {
    return `<path d="M50 130 Q46 150 52 172 L108 172 Q114 150 110 130 Q98 142 80 144 Q62 142 50 130 Z" fill="#10121e" opacity="0.92"/>
      <rect x="75" y="138" width="10" height="7" rx="2" fill="#e8e4d8" opacity="0.9"/>`;
  }
  if (
    p.includes("ilmuwan") ||
    p.includes("dokter") ||
    p.includes("peneliti") ||
    n.includes("evelyn") ||
    n.includes("cross") ||
    n.includes("hartanto")
  ) {
    return `<path d="M50 130 Q46 150 52 172 L108 172 Q114 150 110 130 Q98 138 80 140 Q62 138 50 130 Z" fill="#eeeef8" opacity="0.88" stroke="#bbbbcc" stroke-width="1"/>
      <rect x="64" y="146" width="12" height="14" rx="1" fill="none" stroke="#7799bb" stroke-width="1.2"/>
      <line x1="67" y1="142" x2="67" y2="148" stroke="#cc2222" stroke-width="2"/>
      <line x1="71" y1="143" x2="71" y2="148" stroke="#2255cc" stroke-width="2"/>`;
  }
  if (p.includes("perawat") || n.includes("patricia") || n.includes("walsh")) {
    return `<path d="M52 130 Q48 150 54 170 L106 170 Q112 150 108 130 Q96 140 80 142 Q64 140 52 130 Z" fill="#f0f8f4" opacity="0.88"/>
      <rect x="77" y="48" width="6" height="14" rx="1" fill="#cc2222" opacity="0.92"/>
      <rect x="71" y="53" width="18" height="4" rx="1" fill="#cc2222" opacity="0.92"/>`;
  }
  if (p.includes("guru") || n.includes("ratnasari")) {
    return `<path d="M52 130 Q48 150 54 170 L106 170 Q112 150 108 130 Q96 138 80 140 Q64 138 52 130 Z" fill="#5a3e24" opacity="0.88"/>
      <rect x="104" y="132" width="22" height="16" rx="2" fill="#1a3a22" stroke="#c9a84c" stroke-width="1"/>
      <line x1="108" y1="138" x2="122" y2="138" stroke="white" stroke-width="1.5" opacity="0.75"/>`;
  }
  if (
    p.includes("musisi") ||
    p.includes("pengamen") ||
    p.includes("dalang") ||
    n.includes("bobby") ||
    n.includes("robert")
  ) {
    return `<line x1="40" y1="128" x2="40" y2="168" stroke="${warna}" stroke-width="3.5" opacity="0.88"/>
      <ellipse cx="40" cy="158" rx="10" ry="13" fill="${warna}" opacity="0.78"/>`;
  }
  if (p.includes("dukun") || n.includes("wening")) {
    return `<path d="M46 128 Q40 150 46 170 L114 170 Q120 150 114 128 Q104 136 80 138 Q56 136 46 128 Z" fill="#2a1a08" opacity="0.86"/>
      <line x1="126" y1="168" x2="118" y2="90" stroke="${warna}" stroke-width="4" opacity="0.88" stroke-linecap="round"/>
      <circle cx="118" cy="88" r="7" fill="${warna}" opacity="0.75"/>`;
  }
  if (p.includes("pejuang") || p.includes("veteran") || n.includes("slamet")) {
    return `<ellipse cx="80" cy="54" rx="26" ry="12" fill="#2a3a1a" opacity="0.92"/>
      <path d="M54 54 Q80 46 106 54" stroke="#1a2a0a" stroke-width="6" opacity="0.75"/>
      <circle cx="66" cy="142" r="6" fill="#c9a84c" opacity="0.95"/>`;
  }

  // Default: Pakaian Pelamar Kerja HRD Akhirat (Kerah Kemeja, Dasi, & ID Card Lanyard)
  const seed = nameHash(ghost.nama);
  const tieColors = ["#8b2626", "#1e487a", "#2e6b48", "#7a581e", "#4a2e6b"];
  const tieCol = tieColors[seed % tieColors.length];
  return `
    <!-- Kerah & Jas Pelamar Kerja -->
    <path d="M50 130 Q46 152 52 174 L108 174 Q114 152 110 130 Q96 138 80 140 Q64 138 50 130 Z" fill="#1e2229" opacity="0.84"/>
    <polygon points="66,131 80,144 73,130" fill="#f4efe0" opacity="0.92"/>
    <polygon points="94,131 80,144 87,130" fill="#f4efe0" opacity="0.92"/>
    <!-- Dasi Pelamar -->
    <polygon points="78,139 82,139 84,158 80,164 76,158" fill="${tieCol}" opacity="0.94"/>
    <!-- Tali Lanyard & ID Card Pelamar -->
    <path d="M68 132 L76 154 L84 154 L92 132" fill="none" stroke="#c9a84c" stroke-width="1.2" opacity="0.75"/>
    <rect x="88" y="147" width="13" height="16" rx="1.5" fill="#faf2dc" stroke="#8a6a3a" stroke-width="1"/>
    <line x1="90" y1="152" x2="99" y2="152" stroke="#1a1008" stroke-width="1.5"/>
    <line x1="90" y1="156" x2="97" y2="156" stroke="#8a6a3a" stroke-width="1"/>
    <line x1="90" y1="159" x2="98" y2="159" stroke="#8a6a3a" stroke-width="1"/>
  `;
}

// ── BOSS SVG GENERATOR (DENGAN DUKUNGAN EKSPRESI & UV SCANNER) ──
function buildBossSVG(ghost, state = {}) {
  const w = ghost.warna;
  const bl = ghost.bossLevel || 1;
  const seed = nameHash(ghost.nama);
  const bv = seed % 3;
  const expr = state.expression || "neutral"; // neutral | nervous | exposed | happy
  const uv = !!state.uvActive;

  const bl1Bodies = [
    `M24 122 Q18 165 26 194 L134 194 Q142 165 136 122 Q124 52 80 44 Q36 52 24 122 Z`,
    `M38 118 Q34 162 36 194 L124 194 Q126 162 122 118 Q114 56 80 46 Q46 56 38 118 Z`,
    `M16 132 Q12 168 20 194 L140 194 Q148 168 144 132 Q130 62 80 50 Q30 62 16 132 Z`,
  ];
  const bl2Bodies = [
    `M32 126 Q26 168 32 196 L128 196 Q134 168 128 126 Q118 44 80 32 Q42 44 32 126 Z`,
    `M12 138 Q8 172 16 196 L144 196 Q152 172 148 138 Q134 56 80 42 Q26 56 12 138 Z`,
    `M26 120 Q18 162 24 196 L130 196 Q140 168 136 124 Q126 50 80 40 Q38 52 26 120 Z`,
  ];

  const bodies = bl <= 2 ? bl1Bodies : bl2Bodies;
  const bp = bodies[bv];
  const fy = [-2, 4, -4, 2, 0, 3][bv] || 0;
  const isDeep = bl >= 3;

  const eyeSeed = (seed >> 2) % 4;
  let beyes = "";
  if (bl <= 1) {
    const bl1Eyes = [
      `<polygon points="50,${84 + fy} 74,${80 + fy} 74,${98 + fy} 50,${94 + fy}" fill="${w.mata}"/>
       <polygon points="86,${80 + fy} 110,${84 + fy} 110,${94 + fy} 86,${98 + fy}" fill="${w.mata}"/>
       <ellipse cx="62" cy="${89 + fy}" rx="2" ry="7" fill="#ff2200"/>
       <ellipse cx="98" cy="${89 + fy}" rx="2" ry="7" fill="#ff2200"/>`,
      `<circle cx="62" cy="${89 + fy}" r="11" fill="${w.mata}"/>
       <circle cx="98" cy="${89 + fy}" r="11" fill="${w.mata}"/>
       <circle cx="62" cy="${89 + fy}" r="7" fill="#cc0000"/>
       <circle cx="98" cy="${89 + fy}" r="7" fill="#cc0000"/>
       <circle cx="62" cy="${89 + fy}" r="3" fill="#ff6600" opacity="0.9"/>
       <circle cx="98" cy="${89 + fy}" r="3" fill="#ff6600" opacity="0.9"/>`,
      `<ellipse cx="62" cy="${92 + fy}" rx="10" ry="7" fill="${w.mata}"/>
       <ellipse cx="98" cy="${92 + fy}" rx="10" ry="7" fill="${w.mata}"/>
       <ellipse cx="62" cy="${91 + fy}" rx="4" ry="3" fill="#ff4444"/>
       <ellipse cx="98" cy="${91 + fy}" rx="4" ry="3" fill="#ff4444"/>`,
      `<circle cx="62" cy="${89 + fy}" r="10" fill="${w.mata}"/>
       <circle cx="98" cy="${89 + fy}" r="10" fill="${w.mata}"/>
       <text x="54" y="${95 + fy}" font-size="13" fill="#ffdd00" font-family="sans-serif" font-weight="bold">$</text>
       <text x="90" y="${95 + fy}" font-size="13" fill="#ffdd00" font-family="sans-serif" font-weight="bold">$</text>`,
    ];
    beyes = bl1Eyes[eyeSeed];
  } else {
    const bl2Eyes = [
      `<circle cx="62" cy="${89 + fy}" r="12" fill="${w.mata}"/>
       <circle cx="98" cy="${89 + fy}" r="12" fill="${w.mata}"/>
       <circle cx="62" cy="${89 + fy}" r="9" fill="#220033"/>
       <circle cx="98" cy="${89 + fy}" r="9" fill="#220033"/>
       <circle cx="62" cy="${89 + fy}" r="3" fill="#ff00ff"/>
       <circle cx="98" cy="${89 + fy}" r="3" fill="#ff00ff"/>`,
      `<ellipse cx="62" cy="${89 + fy}" rx="11" ry="12" fill="${w.mata}"/>
       <ellipse cx="98" cy="${89 + fy}" rx="11" ry="12" fill="${w.mata}"/>
       <polygon points="62,${81 + fy} 68,${98 + fy} 56,${98 + fy}" fill="#ff00ff" opacity="0.9"/>
       <polygon points="98,${81 + fy} 104,${98 + fy} 92,${98 + fy}" fill="#ff00ff" opacity="0.9"/>`,
      `<ellipse cx="62" cy="${89 + fy}" rx="11" ry="13" fill="#0a0010"/>
       <ellipse cx="98" cy="${89 + fy}" rx="11" ry="13" fill="#0a0010"/>
       <ellipse cx="62" cy="${91 + fy}" rx="3" ry="4" fill="#ff00ff" opacity="0.8"/>
       <ellipse cx="98" cy="${91 + fy}" rx="3" ry="4" fill="#ff00ff" opacity="0.8"/>`,
      `<circle cx="62" cy="${89 + fy}" r="11" fill="${w.mata}"/>
       <circle cx="98" cy="${89 + fy}" r="11" fill="${w.mata}"/>
       <circle cx="62" cy="${89 + fy}" r="2.5" fill="#ffffff"/>
       <circle cx="98" cy="${89 + fy}" r="2.5" fill="#ffffff"/>`,
    ];
    beyes = bl2Eyes[eyeSeed];
  }

  const browSeed = (seed >> 4) % 3;
  const bBrows = [
    `<path d="M48 ${74 + fy} L72 ${68 + fy}" stroke="${w.mata}" stroke-width="5" stroke-linecap="round"/>
     <path d="M112 ${74 + fy} L88 ${68 + fy}" stroke="${w.mata}" stroke-width="5" stroke-linecap="round"/>`,
    `<path d="M48 ${78 + fy} L56 ${70 + fy} L64 ${76 + fy} L72 ${68 + fy}" stroke="${w.mata}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
     <path d="M112 ${78 + fy} L104 ${70 + fy} L96 ${76 + fy} L88 ${68 + fy}" stroke="${w.mata}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,
    `<rect x="48" y="${68 + fy}" width="26" height="6" rx="3" fill="${w.mata}" transform="rotate(-6,61,71)"/>
     <rect x="86" y="${68 + fy}" width="26" height="6" rx="3" fill="${w.mata}" transform="rotate(6,99,71)"/>`,
  ][browSeed];

  const mouthSeed = (seed >> 6) % 4;
  const bMouths = [
    `<path d="M60 ${110 + fy} Q80 ${103 + fy} 100 ${110 + fy}" stroke="${w.mata}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
     <path d="M63 ${111 + fy} Q80 ${118 + fy} 97 ${111 + fy}" stroke="${w.mata}" stroke-width="2" fill="none" opacity="0.5"/>`,
    `<path d="M62 ${112 + fy} L98 ${108 + fy}" stroke="${w.mata}" stroke-width="4" stroke-linecap="round"/>`,
    `<ellipse cx="80" cy="${113 + fy}" rx="14" ry="9" fill="${w.mata}" opacity="0.9"/>`,
    `<path d="M64 ${114 + fy} Q72 ${109 + fy} 80 ${111 + fy} Q88 ${109 + fy} 96 ${114 + fy}" stroke="${w.mata}" stroke-width="3" fill="none" stroke-linecap="round"/>`,
  ][mouthSeed];

  const accSeed = (seed >> 8) % 4;
  let bacc = "";
  if (bl <= 1) {
    const bl1Acc = [
      `<ellipse cx="80" cy="22" rx="28" ry="7" fill="none" stroke="#cc2222" stroke-width="4" opacity="0.9"/>`,
      `<polygon points="63,35 57,8 73,32" fill="#8b0000" opacity="0.95"/>
       <polygon points="97,35 91,8 107,32" fill="#8b0000" opacity="0.95"/>`,
      `<path d="M50 38 Q60 24 70 36 Q80 22 90 36 Q100 24 110 38" stroke="#5a1010" stroke-width="3" fill="none" stroke-linecap="round"/>`,
      `<ellipse cx="80" cy="26" rx="22" ry="10" fill="#1a0808" stroke="#cc2222" stroke-width="2"/>
       <text x="64" y="31" font-size="11" fill="#cc4444" font-family="sans-serif">VIP</text>`,
    ];
    bacc = bl1Acc[accSeed];
  } else {
    const bl2Acc = [
      `<path d="M42 46 L50 20 L60 40 L70 16 L80 38 L90 16 L100 40 L110 20 L118 46" fill="#220011" stroke="#880044" stroke-width="2.5"/>`,
      `<ellipse cx="80" cy="22" rx="30" ry="8" fill="#0a0010" stroke="#440066" stroke-width="3" opacity="0.9"/>`,
      `<path d="M48 40 Q80 16 112 40" stroke="#440022" stroke-width="6" fill="none"/>`,
      `<text x="54" y="28" font-size="18" fill="#ff00ff" opacity="0.7">⛧</text><text x="88" y="24" font-size="14" fill="#cc00ff" opacity="0.6">⛧</text>`,
    ];
    bacc = bl2Acc[accSeed];
  }

  const bArms = `<path d="M28 126 Q4 112 6 94 Q10 82 22 86" fill="${w.body}" stroke="${w.aksen}" stroke-width="2.5" opacity="0.9"/>
    <path d="M132 126 Q156 112 154 94 Q150 82 138 86" fill="${w.body}" stroke="${w.aksen}" stroke-width="2.5" opacity="0.9"/>`;

  const bTails = `<path d="M44 194 L36 220 L54 210 L50 228 L66 212 L64 230 L80 214 L96 230 L94 212 L110 228 L106 210 L124 220 L116 194 Z" fill="${w.body}" opacity="0.9" stroke="${w.aksen}" stroke-width="1"/>`;

  let statusOverlay = "";
  if (expr === "nervous") {
    statusOverlay = `<path d="M116 ${74 + fy} Q120 ${82 + fy} 116 ${86 + fy} Q112 ${82 + fy} 116 ${74 + fy} Z" fill="#66ccff" opacity="0.9"/>`;
  } else if (expr === "exposed") {
    const isActuallyBad = ghost.dosa === "Suka Berbohong";
    statusOverlay = isActuallyBad
      ? `<circle cx="80" cy="115" r="68" fill="none" stroke="#ff2222" stroke-width="3" stroke-dasharray="6 4"/>`
      : `<circle cx="80" cy="115" r="68" fill="none" stroke="#ffd700" stroke-width="3" stroke-dasharray="6 4"/>`;
  }

  const uvOverlay = uv
    ? `<g opacity="0.85">
        <ellipse cx="80" cy="120" rx="52" ry="66" fill="none" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="4 3"/>
        <text x="80" y="162" text-anchor="middle" font-family="monospace" font-size="9" fill="#e9d5ff">AURA LV.${bl}</text>
      </g>`
    : "";

  const uid = `b${seed % 99}`;
  return `<svg viewBox="0 0 160 242" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg${uid}" cx="50%" cy="38%" r="58%">
      <stop offset="0%" stop-color="white" stop-opacity="${isDeep ? 0.08 : 0.18}"/>
      <stop offset="100%" stop-color="${w.body}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <ellipse cx="80" cy="140" rx="${isDeep ? 74 : 64}" ry="${isDeep ? 96 : 84}" fill="${w.body}" opacity="0.25"/>
  ${bacc}
  <path d="${bp}" fill="${w.body}" opacity="0.96"/>
  <path d="${bp}" fill="url(#bg${uid})"/>
  <path d="${bp}" fill="none" stroke="${w.aksen}" stroke-width="2.5" opacity="0.7"/>
  ${getCostume(ghost, w)}
  ${bArms}
  ${bBrows}
  ${beyes}
  ${bMouths}
  ${bTails}
  ${statusOverlay}
  ${uvOverlay}
</svg>`;
}

// ── REGULAR GHOST PAPERDOLL (BEBAS SPOILER TANDUK/HALO + EKSPRESI DINAMIS) ──
function buildGhostSVG(ghost, state = {}) {
  if (ghost.isBoss) return buildBossSVG(ghost, state);

  const w = ghost.warna || {
    body: "#d8e4dc",
    aksen: "#6a8a74",
    mata: "#1a2e22",
    pipi: "#eab8a8",
  };
  const isBad = ghost.dosa === "Suka Berbohong";
  const seed = nameHash(ghost.nama);
  const expr = state.expression || "neutral"; // neutral | nervous | exposed | happy
  const uv = !!state.uvActive;

  const costume = getCostume(ghost, w);
  const bodyPaths = [
    "M28 118 Q22 162 28 192 L132 192 Q138 162 132 118 Q122 55 80 48 Q38 55 28 118 Z",
    "M35 122 Q30 162 34 192 L126 192 Q130 162 125 122 Q116 62 80 52 Q44 62 35 122 Z",
    "M22 130 Q18 165 24 192 L136 192 Q142 165 138 130 Q126 68 80 58 Q34 68 22 130 Z",
    "M36 126 Q32 160 36 192 L124 192 Q128 160 124 126 Q118 72 80 64 Q42 72 36 126 Z",
    "M18 136 Q14 168 20 192 L140 192 Q146 168 142 136 Q130 74 80 62 Q30 74 18 136 Z",
  ];
  const bv = seed % 5;
  const bp = bodyPaths[bv];
  const fy = [0, 2, -4, 4, -2][bv];
  const ec = w.mata;

  // ── MATA BERDASARKAN EKSPRESI (Tidak membocorkan isBad saat neutral!) ──
  let eyes = "";
  if (expr === "nervous") {
    // Mata melirik ke samping + pupil mengecil gugup
    eyes = `
      <ellipse cx="62" cy="${91 + fy}" rx="8" ry="7.5" fill="white" stroke="${ec}" stroke-width="1.5"/>
      <ellipse cx="98" cy="${91 + fy}" rx="8" ry="7.5" fill="white" stroke="${ec}" stroke-width="1.5"/>
      <circle cx="66" cy="${91 + fy}" r="4" fill="${ec}"/>
      <circle cx="102" cy="${91 + fy}" r="4" fill="${ec}"/>
      <circle cx="67" cy="${89 + fy}" r="1.5" fill="white"/>
      <circle cx="103" cy="${89 + fy}" r="1.5" fill="white"/>`;
  } else if (expr === "exposed" && isBad) {
    // Terbongkar bohong: mata panik spiral / merah menyala
    eyes = `
      <circle cx="62" cy="${91 + fy}" r="9" fill="#2a0000"/>
      <circle cx="98" cy="${91 + fy}" r="9" fill="#2a0000"/>
      <circle cx="62" cy="${91 + fy}" r="5" fill="#ff2222"/>
      <circle cx="98" cy="${91 + fy}" r="5" fill="#ff2222"/>
      <circle cx="62" cy="${91 + fy}" r="2" fill="#ffffaa"/>
      <circle cx="98" cy="${91 + fy}" r="2" fill="#ffffaa"/>`;
  } else if (expr === "happy" || (expr === "exposed" && !isBad)) {
    // Terbukti jujur / bahagia: mata melengkung tenang bersinar
    eyes = `
      <path d="M54 ${91 + fy} Q62 ${83 + fy} 70 ${91 + fy}" stroke="${ec}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M90 ${91 + fy} Q98 ${83 + fy} 106 ${91 + fy}" stroke="${ec}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  } else {
    // Neutral: berdasarkan seed nama, BUKAN isBad!
    const ev = seed % 4;
    const neutralEyes = [
      `<ellipse cx="62" cy="${91 + fy}" rx="7.5" ry="8" fill="${ec}"/><ellipse cx="98" cy="${91 + fy}" rx="7.5" ry="8" fill="${ec}"/><ellipse cx="64" cy="${88 + fy}" rx="2.8" ry="2.8" fill="white"/><ellipse cx="100" cy="${88 + fy}" rx="2.8" ry="2.8" fill="white"/>`,
      `<ellipse cx="62" cy="${91 + fy}" rx="6.5" ry="9" fill="${ec}"/><ellipse cx="98" cy="${91 + fy}" rx="6.5" ry="9" fill="${ec}"/><ellipse cx="63.5" cy="${88 + fy}" rx="2.5" ry="3" fill="white"/><ellipse cx="99.5" cy="${88 + fy}" rx="2.5" ry="3" fill="white"/>`,
      `<ellipse cx="62" cy="${92 + fy}" rx="8" ry="6" fill="${ec}"/><ellipse cx="98" cy="${92 + fy}" rx="8" ry="6" fill="${ec}"/><ellipse cx="64" cy="${91 + fy}" rx="2.5" ry="2" fill="white"/><ellipse cx="100" cy="${91 + fy}" rx="2.5" ry="2" fill="white"/>`,
      `<circle cx="62" cy="${91 + fy}" r="8" fill="${ec}"/><circle cx="98" cy="${91 + fy}" r="8" fill="${ec}"/><circle cx="60" cy="${88 + fy}" r="3" fill="white"/><circle cx="96" cy="${88 + fy}" r="3" fill="white"/>`,
    ];
    eyes = neutralEyes[ev];
  }

  // ── ALIS BERDASARKAN EKSPRESI ──
  let brows = "";
  if (expr === "nervous") {
    brows = `<path d="M52 ${82 + fy} Q60 ${75 + fy} 70 ${80 + fy}" stroke="${ec}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
             <path d="M90 ${80 + fy} Q100 ${75 + fy} 108 ${82 + fy}" stroke="${ec}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
  } else if (expr === "exposed" && isBad) {
    brows = `<path d="M50 ${82 + fy} L70 ${75 + fy}" stroke="#990000" stroke-width="3.5" stroke-linecap="round"/>
             <path d="M110 ${82 + fy} L90 ${75 + fy}" stroke="#990000" stroke-width="3.5" stroke-linecap="round"/>`;
  } else {
    brows = `<path d="M54 ${80 + fy} Q62 ${76 + fy} 70 ${80 + fy}" stroke="${ec}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
             <path d="M90 ${80 + fy} Q98 ${76 + fy} 106 ${80 + fy}" stroke="${ec}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
  }

  // ── MULUT BERDASARKAN EKSPRESI ──
  let mouths = "";
  if (expr === "nervous") {
    // Mulut bergelombang gugup
    mouths = `<path d="M66 ${111 + fy} Q73 ${107 + fy} 80 ${111 + fy} Q87 ${115 + fy} 94 ${111 + fy}" stroke="${ec}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
  } else if (expr === "exposed" && isBad) {
    // Mulut panik terbuka
    mouths = `<ellipse cx="80" cy="${112 + fy}" rx="11" ry="8" fill="#2a0000"/>
              <path d="M72 ${108 + fy} L76 ${113 + fy} L80 ${108 + fy} L84 ${113 + fy} L88 ${108 + fy}" stroke="white" stroke-width="1.5" fill="none"/>`;
  } else if (expr === "happy" || (expr === "exposed" && !isBad)) {
    // Senyum lega tulus
    mouths = `<path d="M66 ${108 + fy} Q80 ${121 + fy} 94 ${108 + fy}" stroke="${ec}" stroke-width="2.8" fill="none" stroke-linecap="round"/>`;
  } else {
    // Neutral sopan pelamar kerja
    const mv = (seed >> 3) % 3;
    mouths = [
      `<path d="M69 ${109 + fy} Q80 ${116 + fy} 91 ${109 + fy}" stroke="${ec}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
      `<path d="M71 ${111 + fy} L89 ${111 + fy}" stroke="${ec}" stroke-width="2.4" stroke-linecap="round"/>`,
      `<ellipse cx="80" cy="${111 + fy}" rx="5" ry="4" fill="${ec}" opacity="0.8"/>`,
    ][mv];
  }

  const cheeks = `<ellipse cx="50" cy="${101 + fy}" rx="9" ry="6" fill="${w.pipi}" opacity="0.35"/>
                  <ellipse cx="110" cy="${101 + fy}" rx="9" ry="6" fill="${w.pipi}" opacity="0.35"/>`;

  const arms = `<path d="M28 132 Q10 148 14 166 Q18 176 28 170" fill="${w.body}" stroke="${w.aksen}" stroke-width="1.5" opacity="0.85"/>
                <path d="M132 132 Q150 148 146 166 Q142 176 132 170" fill="${w.body}" stroke="${w.aksen}" stroke-width="1.5" opacity="0.85"/>`;

  // ── AKSESORIS KEPALA PELAMAR (Netral saat awal, Tanduk/Halo HANYA muncul saat Exposed atau UV!) ──
  const headStyles = [
    // Rambut belah samping rapi
    `<path d="M52 54 Q66 42 84 45 Q102 46 108 56 Q92 48 76 50 Q60 52 52 54 Z" fill="${w.aksen}" opacity="0.75"/>`,
    // Topi fedora/pet pelamar
    `<ellipse cx="80" cy="48" rx="30" ry="6" fill="#2b2620"/><path d="M58 48 Q62 32 80 32 Q98 32 102 48 Z" fill="#3a332a"/>`,
    // Kacamata bulat profesional
    `<circle cx="62" cy="${91 + fy}" r="11" fill="none" stroke="#5a4528" stroke-width="1.8" opacity="0.75"/>
     <circle cx="98" cy="${91 + fy}" r="11" fill="none" stroke="#5a4528" stroke-width="1.8" opacity="0.75"/>
     <line x1="73" y1="${91 + fy}" x2="87" y2="${91 + fy}" stroke="#5a4528" stroke-width="1.8" opacity="0.75"/>`,
    // Jambul / pita kecil
    `<path d="M76 48 Q80 34 86 44 Q82 40 78 48 Z" fill="${w.aksen}" opacity="0.8"/>`,
  ];
  let acc = headStyles[seed % headStyles.length];

  // Jika sudah TERBONGKAR (exposed) atau selesai disortir, tampilkan wujud sejatinya!
  if (expr === "exposed") {
    if (isBad) {
      acc += `<polygon points="62,40 55,14 73,36" fill="#cc2222" opacity="0.95"/>
              <polygon points="98,40 105,14 87,36" fill="#cc2222" opacity="0.95"/>`;
    } else {
      acc += `<ellipse cx="80" cy="24" rx="28" ry="7" fill="none" stroke="#ffd700" stroke-width="4" opacity="0.95"/>
              <ellipse cx="80" cy="24" rx="28" ry="7" fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.8"/>`;
    }
  }

  // Keringat dingin saat gugup atau terbongkar bohong
  let sweatDrops = "";
  if (expr === "nervous" || (expr === "exposed" && isBad)) {
    sweatDrops = `
      <path d="M114 ${70 + fy} Q119 ${79 + fy} 114 ${83 + fy} Q109 ${79 + fy} 114 ${70 + fy} Z" fill="#7dd3fc" opacity="0.9"/>
      <path d="M44 ${76 + fy} Q48 ${83 + fy} 44 ${86 + fy} Q40 ${83 + fy} 44 ${76 + fy} Z" fill="#7dd3fc" opacity="0.8"/>`;
  }

  // Efek UV / Mata Malaikat
  let uvLayer = "";
  if (uv) {
    const auraColor = isBad ? "#ef4444" : "#38bdf8";
    const auraLabel = isBad ? "RESIDU DUSTA" : "AURA MURNI";
    uvLayer = `
      <g class="uv-svg-layer">
        <ellipse cx="80" cy="122" rx="54" ry="68" fill="none" stroke="${auraColor}" stroke-width="2" stroke-dasharray="5 4" opacity="0.85"/>
        ${
          isBad
            ? `<path d="M65 135 L78 152 L70 168 L86 182" stroke="#ef4444" stroke-width="2" fill="none" opacity="0.8"/>
               <polygon points="62,42 56,20 72,38" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2 2"/>
               <polygon points="98,42 104,20 88,38" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2 2"/>`
            : `<ellipse cx="80" cy="26" rx="26" ry="6" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3 2"/>`
        }
        <rect x="42" y="176" width="76" height="14" rx="3" fill="rgba(10,6,20,0.85)" stroke="${auraColor}" stroke-width="1"/>
        <text x="80" y="186" text-anchor="middle" font-family="monospace" font-size="8.5" fill="${auraColor}" letter-spacing="1">${auraLabel}</text>
      </g>`;
  }

  const tail = `<path d="M50 192 Q46 214 60 218 Q72 212 74 222 Q80 224 86 222 Q88 212 100 218 Q114 214 110 192 Z" fill="${w.body}" opacity="0.9"/>`;
  const uid = seed % 99;

  return `<svg viewBox="0 0 160 228" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg${uid}" cx="50%" cy="38%" r="58%">
      <stop offset="0%" stop-color="white" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="${w.body}" stop-opacity="0"/>
    </radialGradient>
    <filter id="glo${uid}">
      <feGaussianBlur stdDeviation="4" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <ellipse cx="80" cy="135" rx="58" ry="78" fill="${w.body}" opacity="0.18" filter="url(#glo${uid})"/>
  <path d="${bp}" fill="${w.body}" opacity="0.93"/>
  <path d="${bp}" fill="url(#bg${uid})"/>
  <path d="${bp}" fill="none" stroke="${w.aksen}" stroke-width="1.6" opacity="0.5"/>
  ${costume}
  ${arms}
  ${cheeks}
  ${brows}
  ${eyes}
  ${mouths}
  ${acc}
  ${sweatDrops}
  ${tail}
  ${uvLayer}
</svg>`;
}

// ── GENERATOR PASFOTO 3x4 UNTUK BERKAS CV LAMARAN ──
function buildPassportPhotoSVG(ghost, state = {}) {
  // Crop fokus ke wajah & bahu kandidat (viewBox 38 30 84 115)
  const fullSvg = buildGhostSVG(ghost, state);
  return fullSvg
    .replace(/viewBox="0 0 160 228"/, 'viewBox="36 28 88 122"')
    .replace(/viewBox="0 0 160 242"/, 'viewBox="32 18 96 132"');
}

// ── JUMPSCARE SVG ──
function buildJumpscareSVG(boss) {
  const bl = boss.bossLevel || 1;
  const w = boss.warna || { body: "#6a0a0a", aksen: "#cc2222", mata: "#ff0000" };
  const faces = {
    1: `<ellipse cx="200" cy="200" rx="160" ry="180" fill="${w.body}"/>
      <ellipse cx="200" cy="200" rx="160" ry="180" fill="none" stroke="${w.aksen}" stroke-width="4" opacity="0.6"/>
      <circle cx="140" cy="160" r="38" fill="#000"/><circle cx="260" cy="160" r="38" fill="#000"/>
      <circle cx="140" cy="160" r="28" fill="${w.mata}"/><circle cx="260" cy="160" r="28" fill="${w.mata}"/>
      <circle cx="140" cy="160" r="12" fill="#ff0000"/><circle cx="260" cy="160" r="12" fill="#ff0000"/>
      <path d="M100 118 L176 140" stroke="#cc0000" stroke-width="10" stroke-linecap="round"/>
      <path d="M300 118 L224 140" stroke="#cc0000" stroke-width="10" stroke-linecap="round"/>
      <path d="M110 270 Q200 340 290 270" fill="#1a0000" stroke="#cc0000" stroke-width="5"/>`,
    2: `<ellipse cx="200" cy="200" rx="170" ry="175" fill="${w.body}"/>
      ${[
        [130, 140, 26],
        [270, 140, 26],
        [200, 100, 20],
        [100, 200, 18],
        [300, 200, 18],
      ]
        .map(
          ([cx, cy, r]) =>
            `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#000"/><circle cx="${cx}" cy="${cy}" r="${r * 0.6}" fill="${w.mata}"/><circle cx="${cx}" cy="${cy}" r="${r * 0.25}" fill="#ff00ff"/>`
        )
        .join("")}
      <path d="M80 300 Q130 270 200 310 Q270 350 320 300" fill="#0a0010" stroke="#880044" stroke-width="4"/>`,
    3: `<ellipse cx="200" cy="200" rx="175" ry="170" fill="${w.body}"/>
      <circle cx="135" cy="160" r="40" fill="#000"/><circle cx="265" cy="160" r="40" fill="#000"/>
      <circle cx="135" cy="160" r="16" fill="#6666ff"/><circle cx="265" cy="160" r="16" fill="#6666ff"/>
      <text x="200" y="290" text-anchor="middle" font-family="monospace" font-size="18" fill="#8888ff">[TIDAK DAPAT DIRENDER]</text>`,
    4: `<circle cx="200" cy="200" r="185" fill="#000" stroke="#ffffff" stroke-width="2"/>
      <circle cx="155" cy="185" r="8" fill="white"/><circle cx="245" cy="185" r="8" fill="white"/>
      <path d="M155 250 Q200 278 245 250" stroke="white" stroke-width="2.5" fill="none"/>`,
  };
  return `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">${faces[Math.min(bl, 4)]}</svg>`;
}

// ── REAL-TIME SOUL POLYGRAPH MONITOR (DETAK ROH KANDIDAT) ──
const PolygraphMonitor = {
  canvas: null,
  ctx: null,
  mode: "calm", // calm | nervous | lie | verified | anomaly
  phase: 0,
  animId: null,

  init(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    if (!this.animId) this.loop();
  },

  setMode(mode) {
    this.mode = mode;
    const statusEl = document.getElementById("poly-status-text");
    const bpmEl = document.getElementById("poly-bpm");
    if (!statusEl || !bpmEl) return;

    const cfg = {
      calm: { text: "STABIL", bpm: "68 Hz", color: "#4ade80" },
      nervous: { text: "TEGANG", bpm: "118 Hz", color: "#fbbf24" },
      lie: { text: "BOHONG / ANOMALI!", bpm: "164 Hz", color: "#f87171" },
      verified: { text: "JUJUR TERVERIFIKASI", bpm: "60 Hz", color: "#38bdf8" },
      anomaly: { text: "DISTORSI KOSMIS", bpm: "??? Hz", color: "#c084fc" },
    }[mode] || { text: "STABIL", bpm: "68 Hz", color: "#4ade80" };

    statusEl.textContent = cfg.text;
    statusEl.style.color = cfg.color;
    bpmEl.textContent = cfg.bpm;
    bpmEl.style.color = cfg.color;
  },

  loop() {
    this.animId = requestAnimationFrame(() => this.loop());
    if (!this.ctx || !this.canvas) return;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const ctx = this.ctx;

    ctx.fillStyle = "rgba(4, 12, 8, 0.28)";
    ctx.fillRect(0, 0, w, h);

    // Grid tipis
    ctx.strokeStyle = "rgba(60, 140, 90, 0.12)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    const cfg = {
      calm: { color: "#4ade80", speed: 0.12, amp: 7, freq: 0.08, jitter: 0.5 },
      nervous: { color: "#fbbf24", speed: 0.22, amp: 13, freq: 0.15, jitter: 3.5 },
      lie: { color: "#f87171", speed: 0.34, amp: 19, freq: 0.24, jitter: 7.5 },
      verified: { color: "#38bdf8", speed: 0.1, amp: 9, freq: 0.06, jitter: 0.2 },
      anomaly: { color: "#c084fc", speed: 0.28, amp: 16, freq: 0.2, jitter: 6.0 },
    }[this.mode] || { color: "#4ade80", speed: 0.12, amp: 7, freq: 0.08, jitter: 0.5 };

    this.phase += cfg.speed;
    ctx.strokeStyle = cfg.color;
    ctx.lineWidth = 1.8;
    ctx.beginPath();

    for (let x = 0; x < w; x += 2) {
      const pulse =
        (x + Math.floor(this.phase * 15)) % 48 < 6 ? cfg.amp * 1.45 : cfg.amp * 0.45;
      const noise = (Math.random() - 0.5) * cfg.jitter;
      const y =
        h / 2 +
        Math.sin(x * cfg.freq + this.phase) * pulse +
        Math.cos(x * 0.04 - this.phase * 0.5) * (cfg.amp * 0.3) +
        noise;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  },
};
