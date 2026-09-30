const P = PORTFOLIO;
const L = P.links;
const $ = (id) => document.getElementById(id);

// Petit outil : fabrique une icône Google (Material Symbols)
const icon = (name, size = 18) =>
  `<span class="material-symbols-outlined" style="font-size:${size}px">${name}</span>`;
// Petite étiquette (utilisée pour les technologies)
const tag = (texte) =>
  `<li class="px-2.5 py-1 rounded-md bg-mist2 text-ink text-xs font-mono">${texte}</li>`;
document.title = P.profile.name + " · Portfolio";
$("year").textContent = new Date().getFullYear();

/* ===================== ACCUEIL ===================== */

$("name").textContent = P.profile.name;
$("title").textContent = P.profile.title;
$("intro").textContent = P.profile.intro;

// Badge de disponibilité (caché si le champ est vide)
$("availability").innerHTML = P.profile.availability
  ? `<span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mist text-electric text-sm font-mono shadow-sm">
       <span class="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
       ${P.profile.availability}
     </span>`
  : "";

// Les trois boutons
const btn = "inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold shadow-md transition active:scale-95";
$("cta").innerHTML = `
  <a href="#projets" class="${btn} bg-electric text-white hover:bg-electric2">Voir mes projets ${icon("arrow_downward")}</a>
  ${L.cv ? `<a href="${L.cv}" download class="${btn} bg-white text-night hover:bg-mist2">${icon("download")} Télécharger mon CV</a>` : ""}
  <a href="#contact" class="${btn} bg-night text-white hover:bg-electric">${icon("mail")} Me contacter</a>
`;

// Bouton CV du menu : affiché seulement si un CV existe
if (L.cv) {
  $("nav-cv").href = L.cv;
} else {
  $("nav-cv").remove();
}

// Liens GitHub et LinkedIn
const social = (url, label) => url
  ? `<a href="${url}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-ink text-sm font-medium shadow-sm hover:text-electric transition">${label} ${icon("open_in_new", 16)}</a>`
  : "";
$("socials").innerHTML = social(L.github, "GitHub") + social(L.linkedin, "LinkedIn");

// Photo (ou initiales si le champ photo est vide)
const initiales = P.profile.name.split(" ").map((mot) => mot[0]).join("");
$("photo").innerHTML = `
  <div class="relative w-64 h-64 sm:w-80 sm:h-80">
    <div class="absolute inset-0 rounded-full border-2 border-dashed border-electric/30"></div>
    <div class="absolute inset-3 rounded-full bg-white p-1.5 shadow-xl">
      ${P.profile.photo
        ? `<img src="${P.profile.photo}" alt="${P.profile.name}" class="w-full h-full rounded-full object-cover">`
        : `<div class="w-full h-full rounded-full bg-night text-white flex items-center justify-center font-display text-6xl font-extrabold">${initiales}</div>`}
    </div>
  </div>
`;

// Compteurs calculés automatiquement à partir de data.js
const nbTechnologies = new Set(P.skills.flatMap((s) => s.items)).size;
const compteurs = [
  [P.projects.length, "Projets"],
  [P.certifications.length, "Certifications"],
  [nbTechnologies, "Technologies"]
];
$("stats").innerHTML = compteurs
  .map(([nombre, libelle]) => `
    <div>
      <div class="font-display text-3xl font-bold text-electric">${nombre}</div>
      <div class="text-sm font-semibold text-night">${libelle}</div>
    </div>`)
  .join("");

/* ===================== À PROPOS ===================== */

$("about").innerHTML = P.profile.about
  .map((bloc) => `
    <div class="bg-white p-6 rounded-xl shadow-sm">
      ${bloc.title
        ? `<h3 class="flex items-center gap-2 font-display text-xl font-bold text-night mb-2">
             ${bloc.icon ? `<span class="text-electric">${icon(bloc.icon, 24)}</span>` : ""}
             ${bloc.title}
           </h3>`
        : ""}
      <p class="leading-relaxed">${bloc.text}</p>
    </div>`)
  .join("");

/* ===================== COMPÉTENCES ===================== */

$("skills").innerHTML = P.skills
  .map((s) => `
    <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div class="w-11 h-11 rounded-lg bg-mist2 text-electric flex items-center justify-center mb-4">
        ${icon(s.icon || "code", 24)}
      </div>
      <h3 class="font-display text-lg font-bold text-night">${s.category}</h3>
      ${s.description ? `<p class="text-sm text-soft mt-1">${s.description}</p>` : ""}
      <ul class="flex flex-wrap gap-1.5 mt-4">
        ${s.items.map(tag).join("")}
      </ul>
    </div>`)
  .join("");
  /* ===================== PROJETS ===================== */

// Une ligne "Titre : texte" (n'apparaît que si le texte existe)
const ligne = (label, texte) => texte
  ? `<p class="text-sm leading-relaxed"><strong class="text-night">${label}</strong> ${texte}</p>`
  : "";

const boutonClair = "inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-mist2 text-night text-sm font-semibold hover:bg-mist3 transition";
const boutonFonce = "inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-night text-white text-sm font-semibold hover:bg-electric transition";

$("projects").innerHTML = P.projects
  .map((p) => {
    const fonctionnalites = p.features && p.features.length
      ? `<ul class="list-disc pl-5 space-y-1 text-sm">${p.features.map((f) => `<li>${f}</li>`).join("")}</ul>`
      : "";

    const images = p.images && p.images.length
      ? `<div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
          ${p.images.map((src) => `
            <a href="${src}" target="_blank" rel="noopener">
              <img src="${src}" alt="Capture de ${p.name}" loading="lazy"
                   class="w-full aspect-video object-cover object-top rounded-lg border border-mist3 hover:opacity-90 transition">
            </a>`).join("")}
        </div>`
      : "";

    const technologies = p.tech && p.tech.length
      ? `<ul class="flex flex-wrap gap-1.5">${p.tech.map(tag).join("")}</ul>`
      : "";

    // Boutons : chacun n'apparaît que si son champ est rempli
    const github = p.github
      ? `<a href="${p.github}" target="_blank" rel="noopener" class="${boutonClair}">${icon("code")} Code GitHub</a>`
      : "";

    const demo = p.demo
      ? `<a href="${p.demo}" target="_blank" rel="noopener" class="${boutonFonce}">${icon("visibility")} Voir la démo</a>`
      : p.demoSoon
        ? `<span class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-dashed border-electric/40 text-electric text-sm font-medium">${icon("schedule")} Démo bientôt disponible</span>`
        : " ";

    const documents = (p.docs || [])
      .map((d) => `<a href="${d.url}" target="_blank" rel="noopener" class="${boutonClair}">${icon(d.icon || "description")} ${d.label}</a>`)
      .join("");

    const boutons = github + demo + documents;
    

    return `
      <article class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col">
        <div class="p-6 flex flex-col gap-4 flex-1">
          <div class="flex items-center justify-between">
            ${p.badge
              ? `<span class="px-2.5 py-1 rounded bg-mist2 text-electric text-xs font-mono font-medium">${p.badge}</span>`
              : "<span></span>"}
            <span class="text-electric">${icon(p.icon || "folder", 24)}</span>
          </div>
          <h3 class="font-display text-2xl font-bold text-night">${p.name}</h3>
          <p class="text-soft leading-relaxed">${p.summary}</p>
          ${ligne("Besoin :", p.problem)}
          ${ligne("Mon rôle :", p.role)}
          ${fonctionnalites}
          ${ligne("Sécurité :", p.security)}
          ${ligne("Difficultés et solutions :", p.challenges)}
          ${images}
          ${technologies}
        </div>
        ${boutons ? `<div class="px-6 py-4 border-t border-mist2 flex flex-wrap gap-3">${boutons}</div>` : ""}
      </article>`;
  })
  .join("");
  /* ===================== CERTIFICATIONS ===================== */

$("certs").innerHTML = P.certifications
  .map((c) => `
    <li class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 rounded-xl bg-mist2 text-electric flex items-center justify-center shrink-0">
          ${icon(c.icon || "verified", 26)}
        </div>
        <div>
          <div class="flex flex-wrap items-center gap-2 text-xs">
            ${c.category ? `<span class="px-2 py-0.5 rounded bg-mist2 text-electric font-mono font-medium">${c.category}</span>` : ""}
            <span class="font-mono text-soft">${c.date}</span>
          </div>
          <h3 class="font-display text-lg font-bold text-night mt-1">${c.title}</h3>
          ${c.org ? `<p class="text-sm text-soft">${c.org}</p>` : ""}
          ${c.description ? `<p class="text-sm mt-1">${c.description}</p>` : ""}
        </div>
      </div>
      ${c.link ? `<a href="${c.link}" target="_blank" rel="noopener" class="${boutonClair} shrink-0">${icon("verified")} Vérifier</a>` : ""}
    </li>`)
  .join("");

/* ===================== FORMATION ===================== */

$("education").innerHTML = P.education
  .map((e) => `
    <li class="relative">
      <span class="absolute -left-10 top-6 w-6 h-6 rounded-full bg-electric flex items-center justify-center shadow">
        <span class="w-2 h-2 rounded-full bg-white"></span>
      </span>
      <div class="bg-white p-6 rounded-xl shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h3 class="font-display text-xl font-bold text-night">${e.title}</h3>
          <span class="px-3 py-1 rounded-full bg-mist2 text-electric font-mono text-xs font-medium">${e.period}</span>
        </div>
        <p class="text-soft font-medium mt-1">${e.org}</p>
        ${e.description ? `<p class="mt-3 leading-relaxed">${e.description}</p>` : ""}
        ${e.tags && e.tags.length ? `<ul class="flex flex-wrap gap-1.5 mt-4">${e.tags.map(tag).join("")}</ul>` : ""}
      </div>
    </li>`)
  .join("");
/* ===================== CONTACT ===================== */

$("contact-text").textContent = P.profile.contactText || "";

// Enlève "https://www." et le "/" final pour un affichage propre
const nettoyer = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

// Chaque contact n'existe que si son champ est rempli
const contacts = [
  L.email && { icon: "mail", label: "Courriel", texte: L.email, url: "mailto:" + L.email },
  L.linkedin && { icon: "work", label: "LinkedIn", texte: nettoyer(L.linkedin), url: L.linkedin },
  L.github && { icon: "code", label: "GitHub", texte: nettoyer(L.github), url: L.github }
].filter(Boolean);

$("contact-list").innerHTML = contacts
  .map((c) => `
    <li>
      <a href="${c.url}" ${c.url.startsWith("mailto:") ? "" : 'target="_blank" rel="noopener"'}
         class="group flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition">
        <span class="w-11 h-11 rounded-lg bg-mist2 text-electric flex items-center justify-center shrink-0">${icon(c.icon, 22)}</span>
        <span class="min-w-0">
          <span class="block text-xs font-mono text-soft">${c.label}</span>
          <span class="block font-semibold text-night truncate group-hover:text-electric transition">${c.texte}</span>
        </span>
      </a>
    </li>`)
  .join("");

$("contact-cv").innerHTML = L.cv
  ? `<a href="${L.cv}" download class="${boutonFonce}">${icon("download")} Télécharger mon CV (PDF)</a>`
  : "";

/* ===================== MENU ET PIED DE PAGE ===================== */

$("brand").innerHTML = P.profile.logo
  ? `<img src="${P.profile.logo}" alt="S.O.A., retour à l'accueil" class="h-10 w-auto">`
  : initiales.split("").join(".") + ".";
$("footer-name").textContent = P.profile.name;