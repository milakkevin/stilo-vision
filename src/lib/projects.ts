import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import before1 from "@/assets/before-1.jpg";

import goia01 from "@/assets/goia/goia-01.jpg.asset.json";
import goia02 from "@/assets/goia/goia-02.jpg.asset.json";
import goia03 from "@/assets/goia/goia-03.jpg.asset.json";
import goia04 from "@/assets/goia/goia-04.jpg.asset.json";
import goia05 from "@/assets/goia/goia-05.jpg.asset.json";
import goia06 from "@/assets/goia/goia-06.jpg.asset.json";
import goia07 from "@/assets/goia/goia-07.jpg.asset.json";
import goia08 from "@/assets/goia/goia-08.jpg.asset.json";
import goia09 from "@/assets/goia/goia-09.jpg.asset.json";
import goia10 from "@/assets/goia/goia-10.jpg.asset.json";

import ap01 from "@/assets/apartament/apartament-01.png.asset.json";
import ap02 from "@/assets/apartament/apartament-02.png.asset.json";
import ap03 from "@/assets/apartament/apartament-03.png.asset.json";
import ap04 from "@/assets/apartament/apartament-04.png.asset.json";
import ap05 from "@/assets/apartament/apartament-05.png.asset.json";
import ap06 from "@/assets/apartament/apartament-06.png.asset.json";
import ap07 from "@/assets/apartament/apartament-07.png.asset.json";

import am01 from "@/assets/apartament-modern/apartament-modern-01.png.asset.json";
import am02 from "@/assets/apartament-modern/apartament-modern-02.png.asset.json";
import am03 from "@/assets/apartament-modern/apartament-modern-03.png.asset.json";
import am04 from "@/assets/apartament-modern/apartament-modern-04.png.asset.json";
import am05 from "@/assets/apartament-modern/apartament-modern-05.png.asset.json";
import am06 from "@/assets/apartament-modern/apartament-modern-06.png.asset.json";
import am07 from "@/assets/apartament-modern/apartament-modern-07.png.asset.json";

import sc01 from "@/assets/spatiu-comercial/spatiu-comercial-01.png.asset.json";
import sc02 from "@/assets/spatiu-comercial/spatiu-comercial-02.png.asset.json";
import sc03 from "@/assets/spatiu-comercial/spatiu-comercial-03.png.asset.json";
import sc04 from "@/assets/spatiu-comercial/spatiu-comercial-04.png.asset.json";
import sc05 from "@/assets/spatiu-comercial/spatiu-comercial-05.png.asset.json";
import sc06 from "@/assets/spatiu-comercial/spatiu-comercial-06.png.asset.json";
import sc07 from "@/assets/spatiu-comercial/spatiu-comercial-07.jpg.asset.json";

import br01 from "@/assets/baie-renovata/baie-01.png.asset.json";
import br02 from "@/assets/baie-renovata/baie-02.png.asset.json";
import br03 from "@/assets/baie-renovata/baie-03.png.asset.json";
import br04 from "@/assets/baie-renovata/baie-04.png.asset.json";
import br05 from "@/assets/baie-renovata/baie-05.png.asset.json";
import br06 from "@/assets/baie-renovata/baie-06.png.asset.json";
import brBefore from "@/assets/baie-renovata/baie-before.png.asset.json";
import brAfter from "@/assets/baie-renovata/baie-after.png.asset.json";

import cd01 from "@/assets/clinica-dentara/clinica-01.png.asset.json";
import cd02 from "@/assets/clinica-dentara/clinica-02.png.asset.json";
import cd03 from "@/assets/clinica-dentara/clinica-03.png.asset.json";
import cd04 from "@/assets/clinica-dentara/clinica-04.png.asset.json";
import cd05 from "@/assets/clinica-dentara/clinica-05.png.asset.json";
import cd06 from "@/assets/clinica-dentara/clinica-06.png.asset.json";
import cd07 from "@/assets/clinica-dentara/clinica-07.png.asset.json";
import cd08 from "@/assets/clinica-dentara/clinica-08.png.asset.json";
import cd09 from "@/assets/clinica-dentara/clinica-09.png.asset.json";

import er01 from "@/assets/exterior-renovat/exterior-01.png.asset.json";
import er02 from "@/assets/exterior-renovat/exterior-02.png.asset.json";
import er03 from "@/assets/exterior-renovat/exterior-03.png.asset.json";
import er04 from "@/assets/exterior-renovat/exterior-04.png.asset.json";
import er05 from "@/assets/exterior-renovat/exterior-05.png.asset.json";
import er06 from "@/assets/exterior-renovat/exterior-06.png.asset.json";

const CLINICA: { url: string }[] = [cd01, cd02, cd03, cd04, cd05, cd06, cd07, cd08, cd09] as unknown as { url: string }[];
const CLINICA_ALTS = [
  "Structură tavan circular din rigips — etapa de construcție",
  "Cameră pregătită cu tavan curbat și ferestre protejate",
  "Perete cu nișe decorative rotunjite din rigips",
  "Zonă interioară cu tavan circular și pereți curbați finisați",
  "Tavan circular pregătit pentru iluminat LED ambiental",
  "Test iluminat LED ambiental cald în tavanul circular",
  "Cabinet stomatologic finalizat cu iluminat decorativ și placări din lemn",
  "Cabinet dentar modern cu mobilier la comandă și lustră decorativă",
  "Cabinet stomatologic finalizat — vedere de ansamblu cu iluminat ambiental",
];

const EXTERIOR_RENOVAT: { url: string }[] = [er02, er01, er03, er43, er05, er06] as unknown as { url: string }[];
const EXTERIOR_RENOVAT_ALTS = [
  "Fațadă veche înainte de renovare, cu structură provizorie din lemn",
  "Casa în etapa inițială de extindere și consolidare exterioară",
  "Montaj structură nouă pe fațada casei",
  "Ridicarea frontonului și a structurii superioare din lemn",
  "Placare și termoizolație exterioară în curs de execuție",
  "Fațadă aproape finalizată, pregătită pentru finisajele finale",
];

const GOIA: { url: string }[] = [goia01, goia02, goia03, goia04, goia05, goia06, goia07, goia08, goia09, goia10] as unknown as { url: string }[];
const APARTAMENT: { url: string }[] = [ap01, ap02, ap03, ap04, ap05, ap06, ap07] as unknown as { url: string }[];
const APARTAMENT_ALTS = [
  "Living modern premium renovat de Stilo Renovation",
  "Living cu perete TV și finisaje premium",
  "Bucătărie modernă cu insulă",
  "Dormitor matrimonial modern",
  "Baie premium cu marmură albă",
  "Baie premium cu marmură neagră",
  "Birou modern amenajat de Stilo Renovation",
];
const APARTAMENT_MODERN: { url: string }[] = [am01, am02, am03, am04, am05, am06, am07] as unknown as { url: string }[];
const APARTAMENT_MODERN_ALTS = [
  "Bucătărie modernă realizată de Stilo Renovation",
  "Hol modern cu finisaje premium",
  "Living open-space cu bucătărie modernă",
  "Zonă de dining și living contemporan",
  "Living luminos cu ferestre panoramice",
  "Baie modernă cu cadă freestanding",
  "Baie contemporană cu oglindă iluminată LED",
];
const SPATIU_COMERCIAL: { url: string }[] = [sc01, sc02, sc03, sc04, sc05, sc06, sc07] as unknown as { url: string }[];
const SPATIU_COMERCIAL_ALTS = [
  "Spațiu comercial renovat de Stilo Renovation",
  "Amenajare interioară spațiu comercial modern",
  "Finisaje premium pentru spații comerciale",
  "Design interior comercial modern",
  "Zonă de recepție și prezentare produse",
  "Iluminat modern pentru spațiu comercial",
  "Zonă de servire cu banchetă din piele și iluminat ambiental",
];

const BAIE_RENOVATA: { url: string }[] = [br01, br02, br03, br04, br05, br06] as unknown as { url: string }[];
const BAIE_RENOVATA_ALTS = [
  "Baie înainte de renovare — cadă veche și faianță deteriorată",
  "Baie veche cu cadă din tablă emailată și faianță albă",
  "Baie renovată premium cu marmură și mobilier la comandă",
  "Cabină de duș walk-in cu marmură și sticlă securizată",
  "Baie modernă cu finisaje albe și accente aurii",
  "Baie contemporană cu duș walk-in și pardoseală imitație piatră",
];
const BAIE_BEFORE = (brBefore as unknown as { url: string }).url;
const BAIE_AFTER = (brAfter as unknown as { url: string }).url;

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  cover: string;
  gallery: string[];
  before: string;
  after: string;
  description: string;
  services: string[];
  badge?: string;
  client?: string;
  chips?: string[];
  galleryAlts?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "renovare-casa-completa",
    title: "Casă complet renovată",
    category: "Renovare completă",
    location: "Satu Mare",
    cover: GOIA[0].url,
    gallery: GOIA.map((g) => g.url),
    before: before1,
    after: GOIA[0].url,
    badge: "Proiect finalizat",
    client: "Familia Goia",
    description:
      "Renovare completă realizată pentru familia Goia, incluzând finisaje premium, instalații noi, băi, bucătărie și amenajări interioare moderne. Proiectul a fost executat cu atenție la fiecare detaliu, punând accent pe calitatea materialelor, funcționalitate și un design contemporan, adaptat nevoilor familiei.",
    services: ["Renovări complete", "Finisaje premium", "Instalații noi", "Băi și bucătărie"],
    chips: ["Renovare completă", "Finisaje premium", "Instalații noi", "Design modern", "Proiect rezidențial"],
  },
  {
    slug: "amenajare-restaurant",
    title: "Clinică dentară",
    category: "Amenajare spațiu medical",
    location: "Satu Mare",
    cover: CLINICA[8].url,
    gallery: CLINICA.map((c) => c.url),
    galleryAlts: CLINICA_ALTS,
    before: CLINICA[0].url,
    after: CLINICA[8].url,
    badge: "Proiect finalizat",
    description:
      "Amenajare completă a unei clinici dentare, urmărind evoluția pas cu pas — de la structura din rigips cu tavan circular și pereți curbați, la finisajele fine, testarea iluminatului LED ambiental și rezultatul final: un cabinet modern cu placări din lemn, mobilier la comandă și o atmosferă caldă, profesională.",
    services: ["Rigips și forme curbate", "Finisaje premium", "Iluminat LED ambiental", "Mobilier la comandă"],
    chips: ["Amenajare medicală", "Tavan circular", "Iluminat LED", "Finisaje premium", "Proiect la cheie"],
  },
  {
    slug: "living-modern",
    title: "Living modern",
    category: "Amenajare interioară",
    location: "Satu Mare",
    cover: p1,
    gallery: [p1, p2, p3],
    before: before1,
    after: p1,
    description:
      "Living reconfigurat pentru maxim de lumină naturală, cu placări din marmură, panouri decorative și un plafon cu iluminat integrat, care conturează întreaga zonă de zi.",
    services: ["Glet și zugrăveli", "Plafoane decorative", "Parchet", "Iluminat"],
  },
  {
    slug: "dormitor-premium",
    title: "Apartament",
    category: "Renovare completă apartament",
    location: "Satu Mare",
    cover: APARTAMENT[0].url,
    gallery: APARTAMENT.map((a) => a.url),
    galleryAlts: APARTAMENT_ALTS,
    before: before1,
    after: APARTAMENT[0].url,
    badge: "Proiect finalizat",
    description:
      "Amenajare premium realizată de Stilo Renovation, cu finisaje moderne, mobilier la comandă, iluminat LED ambiental, bucătărie minimalistă, băi elegante și spații optimizate pentru confort și funcționalitate.",
    services: ["Finisaje moderne", "Mobilier la comandă", "Iluminat LED ambiental", "Băi și bucătărie"],
    chips: ["Renovare completă", "Finisaje premium", "Mobilier la comandă", "Iluminat LED", "Design modern"],
  },
  {
    slug: "apartament-modern",
    title: "Apartament Modern",
    category: "Renovare completă apartament",
    location: "Satu Mare",
    cover: APARTAMENT_MODERN[0].url,
    gallery: APARTAMENT_MODERN.map((a) => a.url),
    galleryAlts: APARTAMENT_MODERN_ALTS,
    before: before1,
    after: APARTAMENT_MODERN[0].url,
    badge: "Proiect finalizat",
    description:
      "Proiect complet de renovare și amenajare interioară realizat de Stilo Renovation. Apartamentul beneficiază de un design modern, spații open-space, finisaje premium, bucătărie la comandă, băi elegante și un ambient luminos, creat pentru confort și funcționalitate.",
    services: ["Finisaje premium", "Bucătărie la comandă", "Băi moderne", "Amenajări open-space"],
    chips: ["Renovare completă", "Open-space", "Finisaje premium", "Bucătărie la comandă", "Design modern"],
  },
  {
    slug: "scara-si-semineu",
    title: "Scară și șemineu",
    category: "Amenajare interioară",
    location: "Satu Mare",
    cover: p3,
    gallery: [p3, p1, p2],
    before: before1,
    after: p3,
    description:
      "Element central al casei: scară curbată cu balustradă din alamă, șemineu integrat într-un panou masiv de culoare grafit și pardoseală din marmură neagră cu vinișoare albe.",
    services: ["Finisaje premium", "Montaj gresie și faianță", "Iluminat", "Instalații"],
  },
  {
    slug: "spatiu-comercial",
    title: "Restaurantul \"BULL\"",
    category: "Renovare și amenajare spațiu comercial",
    location: "Satu Mare",
    cover: SPATIU_COMERCIAL[0].url,
    gallery: SPATIU_COMERCIAL.map((s) => s.url),
    galleryAlts: SPATIU_COMERCIAL_ALTS,
    before: before1,
    after: SPATIU_COMERCIAL[0].url,
    badge: "Proiect finalizat",
    description:
      "Renovare completă și amenajare modernă pentru un spațiu comercial realizată de Stilo Renovation. Proiectul include finisaje premium, instalații electrice și sanitare noi, pardoseli profesionale, iluminat modern, mobilier personalizat și un design optimizat pentru funcționalitate și experiența clienților.",
    services: ["Finisaje premium", "Instalații noi", "Pardoseli profesionale", "Iluminat modern", "Mobilier personalizat"],
    chips: ["Renovare la cheie", "Finisaje premium", "Iluminat modern", "Mobilier personalizat", "Design comercial"],
  },
  {
    slug: "baie-renovata",
    title: "Baie Renovată",
    category: "Renovare completă baie",
    location: "Satu Mare",
    cover: BAIE_RENOVATA[2].url,
    gallery: BAIE_RENOVATA.map((b) => b.url),
    galleryAlts: BAIE_RENOVATA_ALTS,
    before: BAIE_BEFORE,
    after: BAIE_AFTER,
    badge: "Proiect finalizat",
    description:
      "Transformare completă a unei băi vechi într-un spațiu modern și elegant. Am înlocuit integral instalațiile sanitare, faianța și gresia, am montat mobilier la comandă, marmură pe pereți, duș walk-in cu sticlă securizată, iluminat LED ambiental și accesorii premium — pentru un rezultat curat, funcțional și de durată.",
    services: ["Demolare și reconstrucție", "Instalații sanitare noi", "Faianță și gresie premium", "Mobilier la comandă", "Duș walk-in"],
    chips: ["Renovare completă", "Marmură", "Duș walk-in", "Iluminat LED", "Mobilier la comandă"],
  },
  {
    slug: "exterior-renovat",
    title: "Exterior renovat",
    category: "Renovare casă",
    location: "Satu Mare",
    cover: p5,
    gallery: [p5, p1, p3],
    before: before1,
    after: p5,
    description:
      "Renovare completă a unei fațade: termoizolație, finisaje decorative, tâmplărie nouă și iluminat arhitectural care evidențiază volumele casei la lăsarea serii.",
    services: ["Renovări case", "Finisaje premium", "Iluminat", "Instalații"],
  },
];

export const projectBySlug = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);
