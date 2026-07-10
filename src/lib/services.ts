import {
  Hammer,
  Sofa,
  Sparkles,
  PaintBucket,
  LayoutPanelTop,
  Lightbulb,
  Grid3x3,
  Square,
  Wrench,
  Home,
  Building2,
  Store,
  Palette,
  MessageCircle,
  Layers,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: any;
  short: string;
  benefits: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "renovari-complete",
    title: "Renovări complete",
    icon: Hammer,
    short:
      "Coordonăm întreaga renovare, de la demolări controlate până la predarea la cheie.",
    benefits: [
      "O singură echipă responsabilă",
      "Termene respectate",
      "Materiale verificate",
    ],
  },
  {
    slug: "amenajari-interioare",
    title: "Amenajări interioare",
    icon: Sofa,
    short:
      "Transformăm spațiile în interioare funcționale, elegante și durabile.",
    benefits: ["Configurări optimizate", "Detalii îngrijite", "Coerență vizuală"],
  },
  {
    slug: "finisaje-premium",
    title: "Finisaje premium",
    icon: Sparkles,
    short:
      "Marmură, lemn masiv, alamă, texturi decorative — finisaje potrivite proiectelor de nivel înalt.",
    benefits: ["Materiale selectate", "Manoperă exigentă", "Rezultat de galerie"],
  },
  {
    slug: "glet-si-zugraveli",
    title: "Glet și zugrăveli",
    icon: PaintBucket,
    short:
      "Pereți perfect drepți, uniformi, gata de finisaje decorative sau vopseluri fine.",
    benefits: ["Suprafețe impecabile", "Pregătire meticuloasă", "Acoperire uniformă"],
  },
  {
    slug: "rigips",
    title: "Rigips",
    icon: LayoutPanelTop,
    short:
      "Compartimentări, tavane și elemente decorative din gips-carton, executate curat.",
    benefits: ["Geometrii perfecte", "Nișe și trepte", "Ideale pentru iluminat"],
  },
  {
    slug: "plafoane-decorative",
    title: "Plafoane decorative",
    icon: Layers,
    short:
      "Plafoane cu volume, praguri iluminate și detalii care schimbă percepția spațiului.",
    benefits: ["Design personalizat", "Iluminat integrat", "Efect scenografic"],
  },
  {
    slug: "iluminat",
    title: "Iluminat",
    icon: Lightbulb,
    short:
      "Proiectăm și instalăm scenarii de lumină calde, în straturi, potrivite fiecărei încăperi.",
    benefits: ["Ambient, sarcină, accent", "LED de calitate", "Comandă simplă"],
  },
  {
    slug: "gresie-faianta",
    title: "Montaj gresie și faianță",
    icon: Grid3x3,
    short:
      "Montaj precis pentru pardoseli și placări, cu rosturi perfect aliniate.",
    benefits: ["Trasare exactă", "Tăieturi curate", "Rezultat durabil"],
  },
  {
    slug: "parchet",
    title: "Parchet",
    icon: Square,
    short:
      "Montaj profesionist pentru parchet stratificat și masiv, inclusiv modele decorative.",
    benefits: ["Pardoseală stabilă", "Îmbinări fine", "Chit pe culoare"],
  },
  {
    slug: "instalatii",
    title: "Instalații interioare",
    icon: Wrench,
    short:
      "Instalații electrice și sanitare noi, gândite pentru siguranță și confort pe termen lung.",
    benefits: ["Trasee optimizate", "Materiale certificate", "Documentație clară"],
  },
  {
    slug: "renovari-case",
    title: "Renovări case",
    icon: Home,
    short:
      "De la case vechi la locuințe moderne, complet reconfigurate.",
    benefits: ["Consultanță tehnică", "Etapizare clară", "Predare la cheie"],
  },
  {
    slug: "renovari-apartamente",
    title: "Renovări apartamente",
    icon: Building2,
    short:
      "Apartamente transformate integral, cu respect pentru vecini și pentru buget.",
    benefits: ["Program flexibil", "Șantier curat", "Livrare rapidă"],
  },
  {
    slug: "spatii-comerciale",
    title: "Spații comerciale",
    icon: Store,
    short:
      "Restaurante, birouri, showroom-uri — spații care vând prin atmosferă și detalii.",
    benefits: ["Termene comerciale", "Materiale rezistente", "Coordonare completă"],
  },
  {
    slug: "design-interior",
    title: "Design interior",
    icon: Palette,
    short:
      "Concepte de amenajare, palete de culori, materiale și mobilier — proiect complet.",
    benefits: ["Randări realiste", "Liste de materiale", "Colaborare pas cu pas"],
  },
  {
    slug: "consultanta",
    title: "Consultanță",
    icon: MessageCircle,
    short:
      "Vă ajutăm să înțelegeți costurile, etapele și cele mai bune soluții pentru proiectul dumneavoastră.",
    benefits: ["Deplasare la locație", "Recomandări clare", "Fără obligații"],
  },
];

export const serviceBySlug = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
