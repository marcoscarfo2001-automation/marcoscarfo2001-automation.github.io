// ---------- Dati dei progetti ----------
// I progetti di lavoro sono anonimizzati: niente nomi di aziende, clienti o sistemi interni.
// stats: i numeri della figurina · numbers: i numeri del dettaglio
// gallery: [immagine, didascalia, sfondo scuro?]
const projects = [
  {
    id: "agente",
    group: "lavoro",
    kind: "Agente AI",
    year: "2026",
    title: "Agente Preventivi",
    hook: "Un vocale su WhatsApp diventa un preventivo in PDF, senza aprire il gestionale.",
    cover: "chat",
    tint: "#e4572e",
    tags: ["n8n", "GPT-4.1", "Whisper", "WhatsApp API", "ERP API"],
    stats: [["112", "nodi"], ["2", "agenti AI"], ["5", "fasi"]],
    numbers: [["112", "nodi"], ["2", "agenti AI"], ["5", "fasi"]],
    text: "I tecnici descrivono il lavoro a voce o per iscritto. L'agente capisce la richiesta, riconosce il cliente, prepara opportunità e offerta nel gestionale e restituisce il documento in chat. Quando manca un'informazione la chiede al tecnico, così il documento contiene solo dati verificati.",
    highlights: [
      "Due agenti in cascata: il primo struttura la richiesta in JSON, il secondo compila i campi del template",
      "Conversazione multi-turno con sessioni persistenti, scadenza e comando di annullamento",
      "Riconoscimento del cliente su due livelli: ricerca fuzzy sull'API e cache locale con distanza di Levenshtein, sempre con conferma dell'utente",
      "Trascrizione con Whisper e normalizzazione dell'input",
      "Webhook firmati (HMAC) e whitelist dei numeri autorizzati",
      "Archiviazione automatica del PDF sul cloud aziendale",
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
    kind: "Workflow · n8n",
    year: "2026",
    title: "Automazione E-learning",
    hook: "Ogni corso acquistato online arriva fino all'attestato senza che nessuno debba intervenire a mano.",
    cover: "flow",
    tint: "#ff6b3d",
    tags: ["n8n", "Shopify", "API e-learning", "Outlook", "Data Tables"],
    stats: [["44", "nodi"], ["2", "trigger"], ["2", "registri"]],
    numbers: [["44", "nodi"], ["2", "trigger autonomi"], ["2", "registri persistenti"]],
    text: "Quando un ordine viene pagato sull'e-commerce, l'azienda cliente viene creata sulla piattaforma e-learning con i suoi codici di attivazione. Un secondo processo, a intervalli regolari, cerca i corsi conclusi, emette gli attestati e li invia. L'amministrazione interviene solo quando serve una decisione umana.",
    highlights: [
      "Ogni ordine e ogni attestato ha la sua riga nel registro, così nessuno viene lavorato due volte",
      "Se manca la partita IVA ne viene generata una temporanea e l'amministrazione riceve un avviso per sostituirla",
      "Prima dell'invio il sistema aspetta che il PDF dell'attestato sia davvero pronto",
      "Gli errori sono gestiti per singolo elemento, con una notifica che contiene i dati utili per intervenire",
      "Nessun nuovo tentativo automatico, per scelta: in caso di errore arriva un avviso, così non si rischiano codici duplicati",
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
    kind: "Web app · PWA",
    year: "2026",
    title: "Gestionale da campo",
    hook: "I tecnici timbrano con il GPS e fanno firmare il foglio di lavoro, mentre le ore arrivano in contabilità.",
    cover: "screens",
    tint: "#b08d57",
    tags: ["React", "Express", "PostgreSQL", "PWA", "Replit Agent"],
    stats: [["80 m", "geofence"], ["11", "sezioni"], ["2", "firme"]],
    numbers: [["80 m", "geofence"], ["11", "sezioni"], ["2", "firme digitali"]],
    text: "Un'app da installare sul telefono per un'azienda di impianti. Il manager pianifica i turni, i tecnici timbrano con verifica della posizione e compilano il foglio di lavoro dal cantiere, con foto e dettatura vocale; il cliente firma e il PDF è pronto. L'amministrazione controlla ore e costi e li invia al gestionale.",
    highlights: [
      "Geofence dal magazzino e stima del viaggio di ritorno con OSRM",
      "Foglio di lavoro a fasi, con materiali, foto e doppia firma su canvas",
      "Foto in coda offline (IndexedDB), inviate da sole al ritorno della rete",
      "Notifiche push all'assegnazione di un turno",
      "Sincronizzazione delle ore senza duplicati, con un semaforo di controllo per l'amministrazione",
      "Accesso con PIN e blocco anti brute-force, backup e ripristino del database",
      "Informativa privacy per i dipendenti e condizioni d'uso curate insieme al progetto",
    ],
    role: "Progettazione funzionale su lavagna dell'intera applicazione, architettura e integrazioni, sviluppo guidando l'agente AI di Replit, relazione tecnica.",
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
    kind: "Automazione · AI",
    year: "2026",
    title: "Proforme automatiche",
    hook: "Prepara le proforme partendo dagli avanzamenti di commessa, con l'AI che legge i dati delle offerte in PDF.",
    cover: "invoice",
    tint: "#c2562f",
    tags: ["n8n", "OpenAI", "Fatture in Cloud", "ERP API"],
    stats: [["33", "nodi"], ["0", "doppie fatture"]],
    numbers: [["33", "nodi"], ["0", "doppie fatture"]],
    text: "Il workflow legge nel gestionale gli avanzamenti da fatturare, recupera il cliente, estrae con un modello linguistico i dati dall'offerta economica in PDF e crea la proforma nel software di fatturazione, con i centri di ricavo corretti.",
    highlights: [
      "Registro delle lavorazioni come barriera contro la doppia fatturazione",
      "L'output del modello linguistico viene validato e, se non è affidabile, interviene un percorso alternativo senza AI",
      "Mappatura automatica dei centri di ricavo",
      "Errori normalizzati e smistati per tipo",
      "Modello dei dati definito su carta e lavagna prima di scrivere un nodo",
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
    hook: "La mia tesi: un sistema che valuta il rischio delle privacy policy e motiva ogni punteggio.",
    cover: "risk",
    tint: "#ff6b3d",
    rare: true,
    tags: ["Machine Learning", "RAG", "NLP", "GDPR", "Python"],
    stats: [["60", "piattaforme"], ["10", "criteri"], ["0.64", "F1 macro"]],
    numbers: [["60", "piattaforme"], ["10", "criteri"], ["0.64", "F1 macro"], ["0.95", "upper bound"]],
    text: "Privacy policy e Termini di Servizio sono i documenti più firmati e meno compresi del digitale. Ho costruito un sistema di annotazione su 60 piattaforme reali e 10 criteri che uniscono i principi del GDPR alla logica contrattuale. Su questa base ho confrontato modelli supervisionati e non supervisionati e ho costruito un prototipo RAG che valuta nuove policy partendo dal giudizio umano, spiegando ogni punteggio.",
    highlights: [
      "Un dataset costruito da zero: 60 piattaforme annotate a mano su 10 criteri, con punteggi da 1 a 5 e cinque classi di rischio",
      "Un modello supervisionato che passa da un F1 macro di 0.48 con il solo TF-IDF a 0.64 con segnali costruiti sui dieci criteri",
      "Due modelli non supervisionati, LDA e K-Means, raggruppano le piattaforme per settore commerciale e non distinguono il livello di rischio",
      "Legal-BERT, pre-addestrato su testi giuridici, si ferma a 0.475, allo stesso livello del modello più semplice",
      "Un prototipo RAG in n8n che consulta criteri, scale e casi già annotati e motiva il punteggio su ognuno dei dieci criteri",
      "Validazione su dieci piattaforme mai viste: classe di rischio corretta in nove casi, con uno scarto medio di 1.7 punti",
      "Ogni valutazione si può aprire e verificare criterio per criterio, perché le regole del sistema sono pubbliche",
      "I limiti sono dichiarati: il dataset è piccolo, l'annotazione è in parte soggettiva e il sistema può valutare soltanto ciò che le piattaforme scrivono nei documenti",
    ],
    role: "Progetto individuale: ricerca, costruzione del dataset, modelli di ML, prototipo RAG, design dell'app e tesi.",
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
    foot: "Team di 4",
    title: "Playence",
    hook: "Una piattaforma per allenarsi con i campioni, dove l'AI analizza poi com'è andata la sessione.",
    cover: "phones",
    tint: "#3b7bd0",
    rare: true,
    badge: "1° posto",
    tags: ["Angular", "ASP.NET Core", "SQL Server", "n8n", "Wearable"],
    stats: [["1°", "posto"], ["3", "profili utente"]],
    numbers: [["1°", "posto all'hackathon"], ["4", "persone nel team"]],
    text: "Progetto vincitore di un hackathon aziendale. Una piattaforma che mette in contatto sportivi amatori e campioni per sessioni esclusive; dopo l'evento, i dati del coach e dei dispositivi indossabili passano da un flusso n8n con AI che restituisce un'analisi della performance.",
    highlights: [
      "Personas e scenari d'uso per tre profili di utente",
      "Frontend Angular con Tailwind e Angular Material, grafici delle metriche biometriche",
      "Backend ASP.NET Core con API REST e SQL Server",
      "Flusso n8n per l'analisi AI dei dati da wearable",
      "Mercato, SWOT e business model presentati alla giuria",
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
    kind: "Interaction design",
    year: "Università",
    title: "Gufy",
    hook: "Un'app per dormire in treno senza la paura di perdere la propria fermata.",
    cover: "gufy",
    tint: "#c9962c",
    tags: ["UX research", "Personas", "Storyboard", "Figma"],
    stats: [["2", "persone"], ["1", "prototipo Figma"]],
    numbers: [["2", "persone"], ["1", "prototipo Figma"]],
    text: "Un gufo che veglia sul viaggiatore e lo sveglia al momento giusto, anche tramite un auricolare dedicato. Un percorso completo di progettazione centrata sull'utente, dal questionario al prototipo interattivo, realizzato in coppia.",
    highlights: [
      "Questionario e sintesi dei risultati",
      "Personas, scenari, requisiti funzionali e non funzionali",
      "Modello concettuale, metafore d'interfaccia, user story e user flow",
      "Storyboard e prototipo interattivo su Figma",
      "Un'interfaccia pensata per chiedere poca attenzione, perché chi la usa è spesso stanco",
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
    kind: "Basi di dati & data mining",
    year: "Università",
    title: "Streaming musicale",
    hook: "Un piccolo Spotify costruito da zero, con database, data warehouse e analisi degli ascolti.",
    cover: "schema",
    tint: "#7d766a",
    tags: ["SQL", "Data Warehouse", "OLAP", "Clustering"],
    stats: [["DB", "relazionale"], ["DWH", "a fiocco di neve"], ["2", "modelli di mining"]],
    numbers: [["3", "livelli: DB, DWH, mining"]],
    text: "La struttura dati di una piattaforma di streaming, un data warehouse per analizzare gli ascolti e due modelli di data mining per trovare tendenze per età e periodo dell'anno.",
    highlights: [
      "Modello concettuale, ristrutturazione e modello logico",
      "Data warehouse a fiocco di neve e operazioni OLAP",
      "Cluster analysis sugli ascolti",
      "Alberi di decisione per prevedere il genere per fascia d'età e mese",
    ],
    role: "Progetto individuale.",
    gallery: [
      ["assets/db-logico.jpg", "Modello logico"],
      ["assets/db-er.jpg", "Modello concettuale"],
      ["assets/db-dwh.jpg", "Data warehouse"],
    ],
  },
];

// ---------- Animazioni in entrata ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    io.unobserve(en.target);
  });
}, { threshold: 0.12 });
function observeReveal(root = document) {
  root.querySelectorAll(".reveal:not(.in)").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 70}ms`;
    io.observe(el);
  });
}


// ---------- Dataware: estratto del dataset della tesi (10 piattaforme su 60) ----------
const criteriaNames = ["Raccolta", "Condivisione", "Profilazione", "Conservazione", "Trasparenza", "Diritti", "Sicurezza", "Licenza", "Tutele", "Arbitrato"];
const platforms = [
  { name: "Threema", c: [1, 1, 1, 1, 1, 1, 1, 1, 2, 2], note: "Server propri in Svizzera, cifratura end-to-end, IP pseudonimizzati: il punteggio più basso del dataset." },
  { name: "Revolut", c: [3, 2, 3, 2, 2, 1, 1, 2, 2, 1], note: "Diritti effettivi, sicurezza e tutele legali ai livelli migliori per un servizio finanziario." },
  { name: "Dropbox", c: [3, 3, 2, 2, 2, 2, 2, 1, 3, 3], note: "Licenza sui contenuti limitata al servizio; pesano di più tutele contrattuali e arbitrato." },
  { name: "Google", c: [4, 4, 5, 2, 2, 1, 2, 3, 3, 1], note: "Profilazione al massimo, ma trasparenza, diritti esercitabili e sicurezza dichiarata abbassano la media." },
  { name: "Spotify", c: [3, 3, 3, 2, 2, 2, 3, 4, 3, 3], note: "Nessun criterio raggiunge gli estremi, ma il rischio è distribuito un po' ovunque e la licenza sui contenuti è il punto più alto." },
  { name: "Amazon", c: [4, 4, 4, 4, 2, 2, 2, 3, 3, 2], note: "Raccolta, condivisione, profilazione e conservazione sono tutte alte, come ci si aspetta da un ecosistema che vive di dati." },
  { name: "Shein", c: [4, 5, 4, 3, 2, 2, 2, 5, 4, 2], note: "Condivisione dei dati e licenza sui contenuti al massimo." },
  { name: "TikTok", c: [5, 5, 5, 4, 3, 2, 3, 4, 4, 4], note: "Raccolta, condivisione e profilazione al massimo: una quantità molto ampia di dati personali." },
  { name: "AliExpress", c: [5, 5, 4, 4, 2, 3, 2, 5, 4, 5], note: "Licenza sui contenuti e arbitrato al massimo: tutele legali molto sbilanciate verso la piattaforma." },
  { name: "HolaVPN", c: [5, 5, 5, 5, 5, 4, 4, 3, 5, 5], note: "Cede banda e risorse del dispositivo a terzi e lo chiama «value exchange»: è dichiarato, ma l'utente difficilmente se ne rende conto." },
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
  `<p class="mono-label">Il dettaglio di <b id="crit-name"></b>, criterio per criterio</p>` +
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
      <span class="rk-label">TikTok · 10 criteri</span>
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

function cardHTML(p, i, inDeck) {
  return `
  <button type="button" class="card${p.rare ? " is-rare" : ""}${inDeck ? "" : " reveal"}" data-id="${p.id}" data-index="${i}"
    style="--tint:${p.tint}" aria-label="${p.title}: apri il progetto">
    <span class="card-inner">
      <span class="card-top"><span class="card-no">N° ${numberOf(p)}</span><span class="card-kind">${p.kind}</span></span>
      <span class="card-media">${covers[p.cover]()}${p.badge ? `<span class="seal">★ ${p.badge}</span>` : ""}</span>
      <span class="card-body">
        <span class="card-title">${p.title}</span>
        <span class="card-hook">${p.hook}</span>
        <span class="card-stats">${p.stats.map(([v, l]) => `<span><small>${l}</small><i></i><b>${v}</b></span>`).join("")}</span>
        <span class="card-foot"><span>${p.foot || p.year}</span><span class="card-open">Apri <span aria-hidden="true">→</span></span></span>
      </span>
      <span class="card-shine" aria-hidden="true"></span>
    </span>
  </button>`;
}

// Le copertine hanno misure fisse: le scalo sulla larghezza reale della figurina
const coverFit = new ResizeObserver((entries) => {
  entries.forEach((en) => en.target.style.setProperty("--s", en.contentRect.width / 400));
});
const fitCovers = (root) => root.querySelectorAll(".card-media").forEach((m) => coverFit.observe(m));

// Inclinazione e riflesso che seguono il puntatore
const canTilt = matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches;
document.addEventListener("pointermove", (e) => {
  const inner = e.target.closest?.(".card-inner");
  if (!inner || !canTilt) return;
  const r = inner.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
  inner.style.setProperty("--mx", `${px * 100}%`);
  inner.style.setProperty("--my", `${py * 100}%`);
  inner.style.setProperty("--ry", `${(px - 0.5) * 10}deg`);
  inner.style.setProperty("--rx", `${(0.5 - py) * 8}deg`);
});
document.addEventListener("pointerout", (e) => {
  const inner = e.target.closest?.(".card-inner");
  if (inner && !inner.contains(e.relatedTarget)) {
    inner.style.removeProperty("--rx");
    inner.style.removeProperty("--ry");
  }
});

// ---------- Collezione: filtri, album e mazzo ----------
const album = document.getElementById("album");
const deck = document.getElementById("deck");
const stage = document.getElementById("deck-stage");
const deckCount = document.getElementById("deck-count");
const filtersEl = document.getElementById("filters");
const viewsEl = document.getElementById("views");
let filter = "all";
let view = "album";
let active = 0;
let list = projects;

filtersEl.querySelectorAll("button").forEach((b) => {
  const f = b.dataset.filter;
  b.querySelector("sup").textContent = f === "all" ? projects.length : projects.filter((p) => p.group === f).length;
});

function render(first) {
  list = filter === "all" ? projects : projects.filter((p) => p.group === filter);
  album.innerHTML = list.map((p, i) => cardHTML(p, i, false)).join("");
  stage.innerHTML = list.map((p, i) => cardHTML(p, i, true)).join("");
  fitCovers(album);
  fitCovers(stage);
  if (first) observeReveal(album);
  else album.querySelectorAll(".reveal").forEach((c, i) => {
    c.style.transitionDelay = `${i * 50}ms`;
    requestAnimationFrame(() => c.classList.add("in"));
  });
  active = Math.min(active, list.length - 1);
  layoutDeck();
}

function setPressed(group, attr, value) {
  group.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b.dataset[attr] === value));
}
filtersEl.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b || b.dataset.filter === filter) return;
  filter = b.dataset.filter;
  setPressed(filtersEl, "filter", filter);
  active = 0;
  render(false);
});
function setView(v) {
  view = v;
  setPressed(viewsEl, "view", v);
  album.hidden = v !== "album";
  deck.hidden = v !== "mazzo";
  if (v === "mazzo") requestAnimationFrame(layoutDeck);
  try { localStorage.setItem("portfolio-view", v); } catch {}
}
viewsEl.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) setView(b.dataset.view);
});

// Il mazzo: la carta attiva sta davanti, le altre si aprono a ventaglio ai lati
function layoutDeck() {
  const cards = [...stage.children];
  if (!cards.length || deck.hidden) return;
  const w = cards[0].offsetWidth;
  cards.forEach((c, i) => {
    const o = i - active, a = Math.abs(o), dir = Math.sign(o);
    const x = dir * (Math.min(a, 1) * w * 0.62 + Math.max(a - 1, 0) * w * 0.3);
    const y = a * 14 + a * a * 4;
    const rot = o * 5;
    const s = 1 - Math.min(a, 4) * 0.06;
    c.style.transform = `translateX(-50%) translateX(${x}px) translateY(${y}px) rotate(${rot}deg) scale(${s})`;
    c.style.zIndex = 100 - a;
    c.style.opacity = a > 3 ? 0 : 1;
    c.style.pointerEvents = a > 3 ? "none" : "";
    c.classList.toggle("is-active", o === 0);
    c.tabIndex = o === 0 ? 0 : -1;
  });
  deckCount.textContent = `${pad2(active + 1)} / ${pad2(cards.length)}`;
}
function go(to) {
  const n = stage.children.length;
  active = Math.max(0, Math.min(n - 1, to));
  layoutDeck();
}
document.getElementById("deck-prev").addEventListener("click", () => go(active - 1));
document.getElementById("deck-next").addEventListener("click", () => go(active + 1));
stage.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") { e.preventDefault(); go(active - 1); }
  if (e.key === "ArrowRight") { e.preventDefault(); go(active + 1); }
});
window.addEventListener("resize", layoutDeck);

// Trascinamento (mouse e touch) e rotellina orizzontale
let drag = null, dragged = false;
stage.addEventListener("pointerdown", (e) => {
  drag = { x: e.clientX, start: active, w: stage.children[0]?.offsetWidth || 280 };
  dragged = false;
});
window.addEventListener("pointermove", (e) => {
  if (!drag) return;
  const dx = e.clientX - drag.x;
  if (Math.abs(dx) > 6) dragged = true;
  const to = drag.start - Math.round(dx / (drag.w * 0.45));
  if (to !== active) go(to);
});
window.addEventListener("pointerup", () => { drag = null; });
let wheelAcc = 0;
stage.addEventListener("wheel", (e) => {
  const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
  if (!d) return;
  e.preventDefault();
  wheelAcc += d;
  if (Math.abs(wheelAcc) > 60) { go(active + Math.sign(wheelAcc)); wheelAcc = 0; }
}, { passive: false });

let savedView = "album";
try { savedView = localStorage.getItem("portfolio-view") || "album"; } catch {}
render(true);
setView(savedView === "mazzo" ? "mazzo" : "album");

// ---------- Modale di dettaglio ----------
const modal = document.getElementById("modal");
const body = document.getElementById("modal-body");

function openProject(id) {
  const p = projects.find((x) => x.id === id);
  body.style.setProperty("--tint", p.tint);
  body.innerHTML = `
    <p class="m-meta"><span class="m-no">N° ${numberOf(p)}</span> ${p.kind} · ${p.year}</p>
    <h2 class="m-title" id="modal-title">${p.title}</h2>
    <p class="m-hook">${p.hook}</p>
    <div class="m-numbers">${p.numbers.map(([v, l]) => `<div><b>${v}</b><span>${l}</span></div>`).join("")}</div>
    ${p.gallery.length ? `<div class="m-gallery-wrap">
      <button class="g-btn g-prev" aria-label="Scorri indietro">←</button>
      <div class="m-gallery">${p.gallery.map(([src, cap, dark], i) => `
        <figure><button class="frame${dark ? " dark" : ""}" data-index="${i}" aria-label="Ingrandisci: ${cap}"><img src="${src}" alt="${cap}"></button><figcaption>${cap}</figcaption></figure>`).join("")}</div>
      <button class="g-btn g-next" aria-label="Scorri avanti">→</button>
    </div>` : ""}
    <div class="m-cols">
      <div>
        <p class="m-text">${p.text}</p>
        <h3>Punti chiave</h3>
        <ul class="m-list">${p.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
      </div>
      <div class="m-side">
        <h3>Stack</h3>
        <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <h3>Il mio ruolo</h3>
        <p class="m-text">${p.role}</p>
      </div>
    </div>`;
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
    // nel mazzo, il primo clic porta la carta davanti; il secondo la apre
    if (card.parentElement === stage) {
      if (dragged) { dragged = false; return; }
      const i = +card.dataset.index;
      if (i !== active) { go(i); return; }
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

// ---------- Metodo: linea che collega i passi ----------
const graph = document.getElementById("graph");
const graphPath = document.getElementById("graph-path");

function drawGraph() {
  const g = graph.getBoundingClientRect();
  const pts = [...graph.querySelectorAll(".step-n")].map((n) => {
    const r = n.getBoundingClientRect();
    return [r.left + r.width / 2 - g.left, r.top + r.height / 2 - g.top];
  });
  // curva morbida che passa per il centro di ogni nodo
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], mx = (x0 + x1) / 2;
    d += ` C ${mx} ${y0}, ${mx} ${y1}, ${x1} ${y1}`;
  }
  graphPath.setAttribute("d", d);
  graphPath.style.setProperty("--len", Math.ceil(graphPath.getTotalLength()));
}
drawGraph();
window.addEventListener("resize", drawGraph);
document.fonts?.ready.then(drawGraph);
new IntersectionObserver((entries, obs) => {
  if (entries[0].isIntersecting) { graph.classList.add("drawn"); obs.disconnect(); }
}, { threshold: 0.3 }).observe(graph);

observeReveal();
