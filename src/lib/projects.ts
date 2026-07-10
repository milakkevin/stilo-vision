import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import before1 from "@/assets/before-1.jpg";

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
};

export const PROJECTS: Project[] = [
  {
    slug: "renovare-casa-completa",
    title: "Renovare casă completă",
    category: "Renovare completă",
    location: "Satu Mare",
    cover: p1,
    gallery: [p1, p3, p2],
    before: before1,
    after: p1,
    description:
      "Renovare integrală a unei case de familie: reconfigurare spații, instalații noi, finisaje premium, tavane decorative cu iluminat ambiental și mobilier realizat la comandă.",
    services: ["Renovări complete", "Finisaje premium", "Plafoane decorative", "Iluminat ambiental"],
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
    title: "Dormitor premium",
    category: "Amenajare interioară",
    location: "Carei",
    cover: p2,
    gallery: [p2, p1, p3],
    before: before1,
    after: p2,
    description:
      "Dormitor matrimonial cu tavan decorativ și iluminat perimetral cald, textile bogate, dressing la comandă și o paletă cromatică echilibrată — sofisticată și liniștită.",
    services: ["Rigips", "Plafoane decorative", "Parchet", "Zugrăveli"],
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
