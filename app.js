// ---------- Dati dei progetti ----------
// I progetti di lavoro sono anonimizzati: niente nomi di aziende, clienti o sistemi interni.
// hook: la frase della figurina · story: i paragrafi del dettaglio
// gallery: [immagine, didascalia, sfondo scuro?]
const projects = [
  {
    id: "agente",
    group: "lavoro",
    kind: "Agente AI",
    year: "2026",
    title: "Agente Preventivi",
    foot: "In azienda, 2026",
    hook: "Il tecnico manda un vocale su WhatsApp e riceve il preventivo in PDF, senza aprire il gestionale.",
    cover: "chat",
    tint: "#2448b8",
    tags: ["n8n", "GPT-4.1", "Whisper", "WhatsApp API", "ERP API"],
    story: [
      "I tecnici descrivono il lavoro con un vocale o un messaggio su WhatsApp. L'agente capisce cosa serve, riconosce il cliente, crea l'offerta nel gestionale e rimanda il preventivo in chat come PDF.",
      "Dietro ci sono due agenti AI in fila. Il primo trasforma la richiesta in dati ordinati, il secondo compila il modello del preventivo. Quando manca un'informazione l'agente la chiede al tecnico, così nel documento finiscono solo dati verificati.",
      "Il cliente viene trovato anche se il nome è scritto male, ma la scelta finale la conferma sempre il tecnico. Possono usarlo solo i numeri autorizzati, e ogni messaggio in arrivo è verificato con una firma.",
    ],
    role: "Progettazione del flusso, prompt engineering, logica di matching in JavaScript, documentazione tecnica e guida per i tecnici.",
    gallery: [
      ["assets/agente-fasi.jpg", "Le 5 fasi dell'agente", true],
      ["assets/agente-flusso.jpg", "Ingresso del messaggio e gestione della sessione"],
      ["assets/agente-agente1.jpg", "Agente 1: comprensione e dati mancanti"],
      ["assets/agente-agente2.jpg", "Agente 2: compilazione del template", true],
    ],
  },
  {
    id: "corsi",
    group: "lavoro",
    kind: "Automazione",
    year: "2026",
    title: "Corsi online automatici",
    foot: "In azienda, 2026",
    hook: "Quando un'azienda compra un corso online, codici di accesso e attestato arrivano senza che nessuno li prepari a mano.",
    cover: "flow",
    tint: "#3d5fd4",
    tags: ["n8n", "Shopify", "API e-learning", "Outlook", "Data Tables"],
    story: [
      "Appena un ordine viene pagato sull'e-commerce, l'azienda cliente nasce sulla piattaforma e-learning con i suoi codici di attivazione. A intervalli regolari un secondo processo cerca i corsi conclusi, emette gli attestati e li invia.",
      "Ogni ordine e ogni attestato ha una riga in un registro, così nessuno viene lavorato due volte. Se manca la partita IVA ne viene creata una temporanea e l'amministrazione riceve un avviso per sostituirla.",
      "In caso di errore arriva una notifica con i dati utili per intervenire, e niente riparte da solo. È una scelta voluta, per non rischiare codici duplicati.",
    ],
    role: "Analisi del processo, progettazione e sviluppo del workflow, documentazione tecnica e operativa.",
    gallery: [
      ["assets/corsi-architettura.svg", "Architettura: due automazioni, due registri", true],
      ["assets/corsi-flusso-ordine.svg", "Ramo ordini: dal pagamento ai codici", true],
      ["assets/corsi-flusso-attestato.svg", "Ramo attestati: dal controllo alla trasmissione", true],
    ],
  },
  {
    id: "campo",
    group: "lavoro",
    kind: "App per i tecnici",
    year: "2026",
    title: "Gestionale da campo",
    foot: "In azienda, 2026",
    hook: "Un'app per i tecnici di un'azienda di impianti, che dal cantiere timbrano e fanno firmare il foglio di lavoro.",
    cover: "screens",
    tint: "#1b3487",
    tags: ["React", "Express", "PostgreSQL", "PWA", "Replit Agent"],
    story: [
      "Un'app da installare sul telefono. Il manager pianifica i turni, i tecnici timbrano con la verifica della posizione e compilano il foglio di lavoro dal cantiere, con foto e dettatura vocale. Alla fine il cliente firma e il PDF è pronto.",
      "La timbratura vale solo entro 80 metri dal magazzino. Le foto scattate senza rete restano sul telefono e partono da sole quando torna il segnale.",
      "Prima che le ore arrivino al gestionale, un semaforo mostra all'amministrazione quali giornate sono complete. L'applicazione l'ho sviluppata guidando l'agente AI di Replit.",
    ],
    role: "Progettazione funzionale su lavagna, architettura e integrazioni, sviluppo con l'agente AI di Replit, relazione tecnica.",
    gallery: [
      ["assets/campo-cal-desktop.jpg", "Pianificazione settimanale"],
      ["assets/campo-cal-mobile.jpg", "Il calendario da telefono"],
      ["assets/campo-menu.jpg", "Il menu dell'app"],
      ["assets/campo-fase.jpg", "Una fase del foglio di lavoro"],
      ["assets/campo-firme.jpg", "Doppia firma prima del PDF"],
      ["assets/campo-posizione.jpg", "Posizione di timbratura personalizzata"],
      ["assets/campo-dialog.jpg", "Verifica GPS al rientro"],
      ["assets/campo-sistema.jpg", "La progettazione, su lavagna"],
      ["assets/campo-grafo.jpg", "Il grafo delle entità, su lavagna"],
    ],
  },
  {
    id: "proforma",
    group: "lavoro",
    kind: "Automazione con AI",
    year: "2026",
    title: "Proforme automatiche",
    foot: "In azienda, 2026",
    hook: "Le proforme si preparano da sole dai lavori da fatturare, con l'AI che legge i dati delle offerte in PDF.",
    cover: "invoice",
    tint: "#2f4fb8",
    tags: ["n8n", "OpenAI", "Fatture in Cloud", "ERP API"],
    story: [
      "Il workflow trova nel gestionale i lavori pronti da fatturare e recupera il cliente. Un modello di AI legge i dati dell'offerta in PDF, poi la proforma nasce nel software di fatturazione già assegnata al centro di ricavo giusto.",
      "Un registro tiene traccia di ogni lavoro fatturato, così nessuno viene fatturato due volte. La risposta dell'AI viene controllata e, se non è affidabile, il workflow prosegue per una strada senza AI.",
      "Il modello dei dati l'abbiamo definito su carta e alla lavagna prima di scrivere un solo nodo.",
    ],
    role: "Progettazione e sviluppo in coppia con un collega, documentazione tecnica.",
    gallery: [
      ["assets/proforma-carta.jpg", "Il modello su carta"],
      ["assets/proforma-log.jpg", "Progettazione del registro"],
    ],
  },
  {
    id: "dataware",
    group: "uni",
    kind: "Tesi di laurea",
    year: "Università",
    title: "Dataware",
    foot: "Università, da solo",
    hook: "La mia tesi. Un sistema che legge le privacy policy e spiega, criterio per criterio, quanto rischi accettandole.",
    cover: "risk",
    tint: "#2448b8",
    rare: true,
    tags: ["Machine Learning", "RAG", "NLP", "GDPR", "Python"],
    story: [
      "Privacy policy e termini di servizio sono i documenti più firmati e meno compresi del digitale. I dieci criteri della tesi uniscono i principi del GDPR alla logica dei contratti, con punteggi da 1 a 5 e cinque classi di rischio.",
      "Oltre al modello supervisionato ho provato LDA e K-Means, che raggruppano le piattaforme per settore commerciale e non per rischio. Legal-BERT, addestrato su testi giuridici, non è andato oltre il modello più semplice.",
      "Nella validazione lo scarto medio dalla mia valutazione è di 1.7 punti. Ogni risultato si può aprire criterio per criterio, perché le regole del sistema sono pubbliche.",
      "I limiti sono dichiarati. Il dataset è piccolo, l'annotazione è in parte soggettiva e il sistema valuta solo ciò che le piattaforme scrivono nei documenti.",
    ],
    role: "Progetto individuale, dalla ricerca al dataset, dai modelli di ML al prototipo RAG, fino al design dell'app e alla tesi.",
    gallery: [
      ["assets/dataware-landing.jpg", "«Ogni Accetto ha un prezzo»"],
      ["assets/dataware-app1.jpg", "L'app: la community", true],
      ["assets/dataware-app2.jpg", "L'app: la scheda di una piattaforma", true],
      ["assets/dataware-analisi.jpg", "Analisi di una nuova policy"],
      ["assets/dataware-dataset.jpg", "Estratto del dataset"],
      ["assets/dataware-modelli.jpg", "Confronto tra i modelli"],
      ["assets/dataware-confusion.jpg", "Matrice di confusione del modello finale"],
    ],
  },
  {
    id: "playence",
    group: "uni",
    kind: "Hackathon aziendale",
    year: "1° posto",
    foot: "In squadra, in quattro",
    title: "Playence",
    hook: "Una piattaforma per allenarsi con un campione, con l'AI che dopo la sessione analizza i dati. Ha vinto l'hackathon.",
    cover: "phones",
    tint: "#4a6ad8",
    rare: true,
    badge: "1° posto",
    tags: ["Angular", "ASP.NET Core", "SQL Server", "n8n", "Wearable"],
    story: [
      "Il progetto ha vinto un hackathon aziendale. È una piattaforma che mette in contatto sportivi amatori e campioni per sessioni di allenamento esclusive.",
      "Dopo l'evento, i dati del coach e dei dispositivi indossabili passano da un flusso n8n con l'AI, che restituisce un'analisi della performance. Il frontend è in Angular, il backend in ASP.NET Core con SQL Server.",
      "Alla giuria abbiamo presentato anche il mercato, l'analisi SWOT e il modello di business, partendo da personas e scenari d'uso per tre profili di utente.",
    ],
    role: "Progettazione del flusso AI in n8n, architettura e presentazione, in un team di quattro persone.",
    gallery: [
      ["assets/playence-s1.jpg", "Dettaglio di un evento", true],
      ["assets/playence-s2.jpg", "Analisi della performance", true],
      ["assets/playence-s3.jpg", "Insight generati dall'AI", true],
      ["assets/playence-s4.jpg", "Accesso", true],
      ["assets/playence-arch.jpg", "Architettura e flusso n8n", true],
      ["assets/playence-db.jpg", "Schema del database"],
    ],
  },
  {
    id: "gufy",
    group: "uni",
    kind: "Design di un'app",
    year: "Università",
    title: "Gufy",
    foot: "Università, in coppia",
    hook: "Un'app per dormire in treno, con un gufo che ti sveglia poco prima della tua fermata.",
    cover: "gufy",
    tint: "#5671d0",
    tags: ["UX research", "Personas", "Storyboard", "Figma"],
    story: [
      "Un gufo veglia sul viaggiatore e lo sveglia al momento giusto, anche tramite un auricolare dedicato. Il progetto, fatto in coppia, segue tutta la progettazione centrata sull'utente, dal questionario al prototipo interattivo su Figma.",
      "Dalle risposte al questionario sono nati personas, scenari e requisiti. Su quella base abbiamo costruito il modello concettuale, gli user flow e lo storyboard.",
      "L'interfaccia chiede pochissima attenzione, perché chi la usa è spesso stanco.",
    ],
    role: "Ricerca utente, progettazione dell'interazione e prototipazione.",
    gallery: [
      ["assets/gufy-owl.jpg", "La mascotte"],
      ["assets/gufy-app1.jpg", "Benvenuto", true],
      ["assets/gufy-app2.jpg", "Inserimento del viaggio", true],
      ["assets/gufy-app3.jpg", "Anticipo della sveglia", true],
      ["assets/gufy-app4.jpg", "Pronto: ora puoi riposare", true],
      ["assets/gufy-story1.jpg", "Storyboard: si parte"],
      ["assets/gufy-story2.jpg", "Storyboard: ti sveglio io"],
      ["assets/gufy-pod.jpg", "Il GufyPod", true],
    ],
  },
  {
    id: "db",
    group: "uni",
    kind: "Database e analisi",
    year: "Università",
    title: "Streaming musicale",
    foot: "Università, da solo",
    hook: "Un piccolo Spotify fatto da zero, dal database alle analisi di cosa si ascolta per età e mese.",
    cover: "schema",
    tint: "#3b4a7d",
    tags: ["SQL", "Data Warehouse", "OLAP", "Clustering"],
    story: [
      "Il database di una piattaforma di streaming, progettato da zero passando per modello concettuale, ristrutturazione e modello logico.",
      "Sopra c'è un data warehouse a fiocco di neve per analizzare gli ascolti con le operazioni OLAP. Due modelli di data mining, una cluster analysis e un albero di decisione, cercano le tendenze per fascia d'età e mese dell'anno.",
    ],
    role: "Progetto individuale.",
    gallery: [
      ["assets/db-logico.jpg", "Modello logico"],
      ["assets/db-er.jpg", "Modello concettuale"],
      ["assets/db-dwh.jpg", "Data warehouse"],
    ],
  },
];

// ---------- A capo ----------
// l'ultima parola di paragrafi, titoli e didascalie resta attaccata alla penultima
function glueLastWord(root = document) {
  root.querySelectorAll("main p, main h1, main h2, main h3, figcaption, .card-hook, .m-story p, .m-hook").forEach((el) => {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let last = null;
    while (walker.nextNode()) if (walker.currentNode.textContent.trim()) last = walker.currentNode;
    if (!last) return;
    last.textContent = last.textContent.replace(/\s+(\S+)\s*$/, "\u00a0$1");
  });
}

// ---------- Comparsa ----------
// ogni blocco compare una volta sola, con un piccolo ritardo tra fratelli
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    io.unobserve(en.target);
  });
}, { threshold: 0.12 });
function observeReveal(root = document) {
  root.querySelectorAll(".reveal:not(.in)").forEach((el) => {
    const sib = [...el.parentElement.children].filter((x) => x.classList.contains("reveal"));
    el.style.transitionDelay = `${sib.indexOf(el) * 90}ms`;
    io.observe(el);
  });
}

// ---------- Dataware: estratto del dataset della tesi (10 piattaforme su 60) ----------
const criteriaNames = ["Raccolta", "Condivisione", "Profilazione", "Conservazione", "Trasparenza", "Diritti", "Sicurezza", "Licenza", "Tutele", "Arbitrato"];
const platforms = [
  { name: "Threema", c: [1, 1, 1, 1, 1, 1, 1, 1, 2, 2], note: "Server propri in Svizzera, cifratura end-to-end, IP pseudonimizzati. È il punteggio più basso del dataset." },
  { name: "Revolut", c: [3, 2, 3, 2, 2, 1, 1, 2, 2, 1], note: "Diritti effettivi, sicurezza e tutele legali ai livelli migliori per un servizio finanziario." },
  { name: "Dropbox", c: [3, 3, 2, 2, 2, 2, 2, 1, 3, 3], note: "Licenza sui contenuti limitata al servizio. Pesano di più tutele contrattuali e arbitrato." },
  { name: "Google", c: [4, 4, 5, 2, 2, 1, 2, 3, 3, 1], note: "Profilazione al massimo, ma trasparenza, diritti esercitabili e sicurezza dichiarata abbassano la media." },
  { name: "Spotify", c: [3, 3, 3, 2, 2, 2, 3, 4, 3, 3], note: "Nessun criterio raggiunge gli estremi, ma il rischio è distribuito un po' ovunque e la licenza sui contenuti è il punto più alto." },
  { name: "Amazon", c: [4, 4, 4, 4, 2, 2, 2, 3, 3, 2], note: "Raccolta, condivisione, profilazione e conservazione sono tutte alte, come ci si aspetta da un ecosistema che vive di dati." },
  { name: "Shein", c: [4, 5, 4, 3, 2, 2, 2, 5, 4, 2], note: "Condivisione dei dati e licenza sui contenuti al massimo." },
  { name: "TikTok", c: [5, 5, 5, 4, 3, 2, 3, 4, 4, 4], note: "Raccolta, condivisione e profilazione al massimo, quindi una quantità molto ampia di dati personali." },
  { name: "AliExpress", c: [5, 5, 4, 4, 2, 3, 2, 5, 4, 5], note: "Licenza sui contenuti e arbitrato al massimo, con tutele legali molto sbilanciate verso la piattaforma." },
  { name: "HolaVPN", c: [5, 5, 5, 5, 5, 4, 4, 3, 5, 5], note: "Cede banda e risorse del dispositivo a terzi e lo chiama «value exchange». È dichiarato, ma l'utente difficilmente se ne rende conto." },
];
const riskClass = (s) => s <= 18 ? "Minimal risk" : s <= 26 ? "Low risk" : s <= 34 ? "Moderate risk" : s <= 42 ? "Significant risk" : "Critical risk";

const platformsEl = document.getElementById("platforms");
const criteriaEl = document.getElementById("criteria");
const marker = document.getElementById("marker");
const scoreN = document.getElementById("score-n");
let currentScore = 0;

platformsEl.innerHTML = platforms.map((p) =>
  `<button class="platform" role="tab" aria-selected="false" data-name="${p.name}">${p.name}</button>`
).join("");

criteriaEl.innerHTML =
  `<p class="crit-title">Il dettaglio di <b id="crit-name">TikTok</b>, criterio per criterio</p>` +
  criteriaNames.map((k) => `<div class="crit"><span>${k}</span><i></i><b></b></div>`).join("");
const critRows = [...criteriaEl.querySelectorAll(".crit")];

function selectPlatform(name) {
  const p = platforms.find((x) => x.name === name);
  const score = p.c.reduce((a, b) => a + b, 0);
  platformsEl.querySelectorAll(".platform").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.name === name);
    b.setAttribute("aria-selected", b.dataset.name === name);
  });
  marker.style.setProperty("--score", score);
  document.getElementById("score-class").textContent = riskClass(score);
  document.getElementById("score-note").textContent = p.note;
  document.getElementById("crit-name").textContent = p.name;
  critRows.forEach((row, i) => {
    row.querySelector("i").style.setProperty("--v", p.c[i]);
    row.querySelector("b").textContent = p.c[i];
  });
  animateNumber(scoreN, currentScore, score, 700);
  currentScore = score;
}
platformsEl.addEventListener("click", (e) => {
  const b = e.target.closest(".platform");
  if (b) selectPlatform(b.dataset.name);
});

function animateNumber(el, from, to, ms) {
  const t0 = performance.now();
  const step = (t) => {
    const k = Math.min(1, (t - t0) / ms);
    el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Le barre partono da zero e si riempiono quando la sezione entra in vista
const firstRun = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) { selectPlatform("TikTok"); firstRun.disconnect(); }
}, { threshold: 0.3 });
firstRun.observe(criteriaEl);

// ---------- Copertine ----------
// Ogni copertina è disegnata su una tela fissa di 400×320 px e scalata sulla figurina (vedi fitCovers)
const covers = {
  chat: () => `<div class="cover cover-chat">
      <div class="bubble me voice"><span class="play">▶</span>
        <span class="wave">${[8, 14, 20, 12, 18, 22, 10, 16, 20, 9, 14, 18].map((h, i) => `<i style="--h:${h};--d:${i}"></i>`).join("")}</span>
        <small>0:14</small></div>
      <div class="bubble bot">Due clienti simili: quale intendi?
        <span class="opt">1 · Rossi Impianti &nbsp; 2 · Rossi Service</span></div>
      <div class="bubble me">1</div>
      <div class="bubble bot doc"><span class="pdf">PDF</span><span><b>Preventivo_DVR.pdf</b><small>✓ pronto e archiviato</small></span></div>
    </div>`,
  flow: () => `<div class="cover cover-flow">
      <div class="flow">
        <span class="node">Ordine</span><span class="node">Azienda</span><span class="node">Codici</span><span class="node">Attestato</span>
      </div>
      <div class="logs">
        <span><i></i>ordine #1042<b class="st"><em>processing</em><em>completed</em></b></span>
        <span><i></i>attestato #318<b class="st"><em>ready</em><em>sent</em></b></span>
      </div>
      <div class="cert"><i></i><i style="width:80%"></i><i style="width:70%"></i><i></i></div>
    </div>`,
  screens: () => `<div class="cover cover-screens">
      <img class="s1" src="assets/campo-fase.jpg" alt="" loading="lazy">
      <img class="s2" src="assets/campo-firme.jpg" alt="" loading="lazy">
      <img class="s3" src="assets/campo-dialog.jpg" alt="" loading="lazy">
    </div>`,
  invoice: () => `<div class="cover cover-invoice">
      <div class="sheet">
        <span class="h">PROFORMA</span>
        ${[0, 1, 2, 3, 4].map((d) => `<span class="ln" style="--d:${d}"><i></i><i></i></span>`).join("")}
        <span class="tot"><span>Totale</span><b>€ ••••</b></span>
      </div>
      <span class="ai-chip">AI · estrazione dati</span>
      <span class="pdf-chip">offerta.pdf →</span>
    </div>`,
  risk: () => {
    const t = platforms.find((p) => p.name === "TikTok");
    return `<div class="cover cover-risk">
      <span class="rk-label">TikTok, 10 criteri</span>
      <span class="rk-score">${t.c.reduce((a, b) => a + b, 0)}<small>/50</small></span>
      <span class="rk-class">${riskClass(t.c.reduce((a, b) => a + b, 0))}</span>
      <span class="rk-bars">${t.c.map((v, i) => `<i style="--v:${v};--d:${i}"></i>`).join("")}</span>
    </div>`;
  },
  phones: () => `<div class="cover cover-phones">
      <img class="logo" src="assets/playence-logo.png" alt="" loading="lazy">
      <img class="ph p1" src="assets/playence-s1.jpg" alt="" loading="lazy">
      <img class="ph p2" src="assets/playence-s2.jpg" alt="" loading="lazy">
    </div>`,
  gufy: () => `<div class="cover cover-gufy">
      <img class="owl" src="assets/gufy-owl.jpg" alt="" loading="lazy">
      <span class="sub">Dormi, ti sveglio io</span>
      <div class="rail-line"></div>
      <span class="stop" style="left:18%"></span>
      <span class="stop" style="left:42%"></span>
      <span class="stop me" style="left:66%"></span>
      <span class="stop" style="left:88%"></span>
    </div>`,
  schema: () => {
    const dims = [["Utente", 70, 50], ["Brano", 330, 50], ["Tempo", 40, 190], ["Artista", 360, 190], ["Genere", 200, 250]];
    const subs = [["Età", 70, -10, 0], ["Album", 330, -10, 1], ["Etichetta", 350, 250, 3]];
    return `<div class="cover cover-schema"><svg viewBox="0 -30 400 300" aria-hidden="true">
      ${dims.map(([, x, y]) => `<line x1="200" y1="130" x2="${x}" y2="${y}"/>`).join("")}
      ${subs.map(([, x, y, p]) => `<line x1="${dims[p][1]}" y1="${dims[p][2]}" x2="${x}" y2="${y}"/>`).join("")}
      ${[...dims, ...subs].map(([t, x, y]) => `<g class="dim"><rect x="${x - 38}" y="${y - 13}" width="76" height="26" rx="6"/><text x="${x}" y="${y}">${t}</text></g>`).join("")}
      <rect class="fact" x="148" y="110" width="104" height="40" rx="8"/><text class="fact" x="200" y="130">ASCOLTI</text>
    </svg></div>`;
  },
};

// ---------- Figurine ----------
const pad2 = (n) => String(n).padStart(2, "0");
const numberOf = (p) => pad2(projects.indexOf(p) + 1);

function cardHTML(p, i) {
  return `
  <button type="button" class="card${p.rare ? " is-rare" : ""}" data-id="${p.id}" data-index="${i}"
    style="--tint:${p.tint};--i:${i}" aria-label="${p.title}: apri il progetto">
    <span class="card-inner">
      <span class="card-top"><span class="card-no">${numberOf(p)}</span><span class="card-kind">${p.kind}</span></span>
      <span class="card-media">${covers[p.cover]()}${p.badge ? `<span class="seal">${p.badge}</span>` : ""}</span>
      <span class="card-body">
        <span class="card-title">${p.title}</span>
        <span class="card-hook">${p.hook}</span>
        <span class="card-stack">${p.tags.slice(0, 3).join(", ")}</span>
        <span class="card-foot"><span>${p.foot || p.year}</span><span class="card-open">Apri</span></span>
      </span>
    </span>
  </button>`;
}

// Le copertine hanno misure fisse: le scalo sulla larghezza reale della figurina
const coverFit = new ResizeObserver((entries) => {
  entries.forEach((en) => en.target.style.setProperty("--s", en.contentRect.width / 400));
});
const fitCovers = (root) => root.querySelectorAll(".card-media").forEach((m) => coverFit.observe(m));

// Inclinazione e luce che seguono il puntatore
const canTilt = matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches;
document.addEventListener("pointermove", (e) => {
  const inner = e.target.closest?.(".card-inner");
  if (!inner || !canTilt) return;
  const r = inner.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
  inner.style.setProperty("--mx", `${px * 100}%`);
  inner.style.setProperty("--my", `${py * 100}%`);
  inner.style.setProperty("--ry", `${(px - 0.5) * 12}deg`);
  inner.style.setProperty("--rx", `${(0.5 - py) * 9}deg`);
});
document.addEventListener("pointerout", (e) => {
  const inner = e.target.closest?.(".card-inner");
  if (inner && !inner.contains(e.relatedTarget)) { inner.style.removeProperty("--rx"); inner.style.removeProperty("--ry"); }
});

// ---------- Apertura: il mazzo ----------
// la carta davanti, due dietro un poco ruotate; quella appena passata vola via a sinistra
const stack = document.getElementById("stack");
const stackCount = document.getElementById("stack-count");
let front = 0;
stack.innerHTML = projects.map((p, i) => cardHTML(p, i)).join("");
fitCovers(stack);
function layoutStack() {
  const cards = [...stack.children], n = cards.length;
  cards.forEach((c, i) => {
    const o = (i - front + n) % n;
    let t, op = 1;
    if (o === 0) t = "translate(0, 0) rotate(-2deg)";
    else if (o === 1) t = "translate(26px, -14px) rotate(4deg) scale(.96)";
    else if (o === 2) t = "translate(48px, -26px) rotate(9deg) scale(.92)";
    else if (o === n - 1) { t = "translate(-130%, 40px) rotate(-22deg)"; op = 0; }
    else { t = "translate(48px, -26px) rotate(9deg) scale(.9)"; op = 0; }
    c.style.transform = t;
    c.style.opacity = op;
    c.style.zIndex = n - o;
    c.style.pointerEvents = o === 0 ? "" : "none";
    c.classList.toggle("is-top", o === 0);
    c.tabIndex = o === 0 ? 0 : -1;
  });
  stackCount.textContent = `${pad2(front + 1)} / ${pad2(n)}`;
}
function goTo(i) { const n = stack.children.length; front = (i + n) % n; layoutStack(); }
document.getElementById("stack-prev").addEventListener("click", () => goTo(front - 1));
document.getElementById("stack-next").addEventListener("click", () => goTo(front + 1));
stack.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") { e.preventDefault(); goTo(front - 1); }
  if (e.key === "ArrowRight") { e.preventDefault(); goTo(front + 1); }
  if (e.key === "Enter") { e.preventDefault(); openProject(projects[front].id); }
});
// trascina la carta: oltre una certa distanza passa alla successiva o alla precedente
let drag = null, dragged = false;
stack.addEventListener("pointerdown", (e) => { drag = { x: e.clientX, card: stack.children[front] }; dragged = false; });
window.addEventListener("pointermove", (e) => {
  if (!drag) return;
  const dx = e.clientX - drag.x;
  if (Math.abs(dx) > 6) dragged = true;
  if (dragged) drag.card.style.transform = `translate(${dx}px, 0) rotate(${-2 + dx / 18}deg)`;
});
window.addEventListener("pointerup", (e) => {
  if (!drag) return;
  const dx = e.clientX - drag.x;
  drag = null;
  if (dx < -70) goTo(front + 1); else if (dx > 70) goTo(front - 1); else layoutStack();
});
window.addEventListener("pointercancel", () => { drag = null; layoutStack(); });
layoutStack();

// ---------- La collezione: tutte le figurine, con i filtri ----------
const album = document.getElementById("album");
const filtersEl = document.getElementById("filters");
let filter = "all";
filtersEl.querySelectorAll("button").forEach((b) => {
  const f = b.dataset.filter;
  b.querySelector("sup").textContent = f === "all" ? projects.length : projects.filter((p) => p.group === f).length;
});
function renderAlbum() {
  const list = filter === "all" ? projects : projects.filter((p) => p.group === filter);
  album.innerHTML = list.map((p, i) => cardHTML(p, i)).join("");
  fitCovers(album);
  glueLastWord(album);
}
filtersEl.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b || b.dataset.filter === filter) return;
  filter = b.dataset.filter;
  filtersEl.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
  renderAlbum();
});
renderAlbum();

// ---------- La mia storia: la linea si riempie mentre scorri ----------
const timeline = document.getElementById("timeline");
const tlItems = [...timeline.children];
function fillTimeline() {
  const r = timeline.getBoundingClientRect(), mid = innerHeight * 0.6;
  const k = Math.max(0, Math.min(1, (mid - r.top) / r.height));
  timeline.style.setProperty("--fill", k.toFixed(3));
  tlItems.forEach((li) => li.classList.toggle("is-lit", li.getBoundingClientRect().top < mid));
}
addEventListener("scroll", fillTimeline, { passive: true });
addEventListener("resize", fillTimeline);
fillTimeline();

// ---------- Metodo: la linea attraversa i passi quando entri ----------
const steps = document.getElementById("steps");
[...steps.children].forEach((li, i) => li.style.setProperty("--i", i));
new IntersectionObserver((entries, obs) => {
  if (entries[0].isIntersecting) { steps.classList.add("is-run"); obs.disconnect(); }
}, { threshold: 0.4 }).observe(steps);

// ---------- Contatti: copia l'indirizzo ----------
const copyBtn = document.getElementById("copy-mail");
copyBtn.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(copyBtn.dataset.mail); copyBtn.textContent = "Copiato"; }
  catch { copyBtn.textContent = "Seleziona e copia"; }
  copyBtn.classList.add("is-done");
  setTimeout(() => { copyBtn.textContent = "Copia"; copyBtn.classList.remove("is-done"); }, 2200);
});

// ---------- Modale di dettaglio ----------
const modal = document.getElementById("modal");
const body = document.getElementById("modal-body");

function openProject(id) {
  const p = projects.find((x) => x.id === id);
  body.style.setProperty("--tint", p.tint);
  body.innerHTML = `
    <p class="m-meta"><span class="m-no">${numberOf(p)}</span> ${p.kind}, ${p.foot || p.year}</p>
    <h2 class="m-title" id="modal-title">${p.title}</h2>
    <p class="m-hook">${p.hook}</p>
    ${p.gallery.length ? `<div class="m-gallery-wrap">
      <button class="g-btn g-prev" aria-label="Scorri indietro">←</button>
      <div class="m-gallery">${p.gallery.map(([src, cap, dark], i) => `
        <figure><button class="frame${dark ? " dark" : ""}" data-index="${i}" aria-label="Ingrandisci: ${cap}"><img src="${src}" alt="${cap}"></button><figcaption>${cap}</figcaption></figure>`).join("")}</div>
      <button class="g-btn g-next" aria-label="Scorri avanti">→</button>
    </div>` : ""}
    <div class="m-cols">
      <div>
        <div class="m-story">${p.story.map((t) => `<p>${t}</p>`).join("")}</div>
      </div>
      <div class="m-side">
        <h3>Strumenti</h3>
        <p class="m-stack">${p.tags.join(", ")}</p>
        <h3>Il mio ruolo</h3>
        <p class="m-text">${p.role}</p>
      </div>
    </div>`;
  glueLastWord(body);
  currentGallery = p.gallery;
  modal.showModal();
  body.scrollTop = 0;
  setupGallery();
}

// Frecce della galleria: compaiono solo se c'è altro da vedere in quella direzione
function setupGallery() {
  const g = body.querySelector(".m-gallery");
  if (!g) return;
  const prev = body.querySelector(".g-prev"), next = body.querySelector(".g-next");
  const update = () => {
    prev.disabled = g.scrollLeft <= 4;
    next.disabled = g.scrollLeft >= g.scrollWidth - g.clientWidth - 4;
  };
  const step = () => g.clientWidth * 0.8;
  prev.addEventListener("click", () => g.scrollBy({ left: -step() }));
  next.addEventListener("click", () => g.scrollBy({ left: step() }));
  g.addEventListener("scroll", update, { passive: true });
  g.querySelectorAll("img").forEach((img) => img.addEventListener("load", update));
  update();
}

document.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) {
    if (card.parentElement === stack) {
      if (dragged) { dragged = false; return; }
      const i = +card.dataset.index;
      if (i !== front) { goTo(i); return; }
    }
    openProject(card.dataset.id);
    return;
  }
  const opener = e.target.closest("[data-open]");
  if (opener) openProject(opener.dataset.open);
});
modal.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

// ---------- Visualizzatore immagini ----------
const lightbox = document.getElementById("lightbox");
const lbImg = lightbox.querySelector("img");
let currentGallery = [];
let lbIndex = 0;

function showImage(i) {
  lbIndex = (i + currentGallery.length) % currentGallery.length;
  const [src, cap] = currentGallery[lbIndex];
  lbImg.src = src;
  lbImg.alt = cap;
  lbImg.style.animation = "none"; void lbImg.offsetWidth; lbImg.style.animation = "";
  lightbox.querySelector(".lb-cap").textContent = cap;
  lightbox.querySelector(".lb-count").textContent = `${lbIndex + 1} / ${currentGallery.length}`;
  lightbox.classList.toggle("single", currentGallery.length < 2);
}

body.addEventListener("click", (e) => {
  const frame = e.target.closest(".frame");
  if (!frame) return;
  showImage(+frame.dataset.index);
  lightbox.showModal();
});
lightbox.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-lb]");
  if (btn) {
    if (btn.dataset.lb === "close") lightbox.close();
    else showImage(lbIndex + +btn.dataset.lb);
    return;
  }
  if (e.target === lightbox || e.target.classList.contains("lb-figure")) lightbox.close();
});
lightbox.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") showImage(lbIndex + 1);
  if (e.key === "ArrowLeft") showImage(lbIndex - 1);
});

// ---------- Menu: segna la sezione che stai leggendo ----------
const navLinks = [...document.querySelectorAll(".nav nav a")];
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    navLinks.forEach((a) => a.classList.toggle("is-current", a.getAttribute("href") === "#" + en.target.id));
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

glueLastWord();
observeReveal();
