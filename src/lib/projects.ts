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
    title: "Amenajare restaurant",
    category: "Spațiu comercial",
    location: "Satu Mare",
    cover: p4,
    gallery: [p4, p6, p1],
    before: before1,
    after: p4,
    description:
      "Amenajarea unui restaurant boutique, cu lambriuri din lemn masiv, marmură, iluminat cald și detalii aurii — o atmosferă intimă, potrivită pentru experiențe culinare de nivel înalt.",
    services: ["Amenajări interioare", "Finisaje premium", "Rigips", "Iluminat"],
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
    title: "Spațiu comercial",
    category: "Spațiu comercial",
    location: "Satu Mare",
    cover: p6,
    gallery: [p6, p4, p1],
    before: before1,
    after: p6,
    description:
      "Amenajarea unui spațiu de retail cu accent pe materiale calde, iluminat integrat în rafturi și un flux clar al vizitatorilor — un mediu curat, ordonat, care pune produsele în valoare.",
    services: ["Amenajări interioare", "Rigips", "Iluminat", "Parchet"],
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
