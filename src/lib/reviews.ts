export type Review = {
  name: string;
  when: string;
  rating: number;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Eduard Sever",
    when: "acum 5 luni",
    rating: 5,
    text: "Tocmai am terminat casa de zugrăvit. Numai cuvinte de laudă. Seriozitate, organizare desăvârșită ce a făcut să termine în timp record. Calitate. Totul la superlativ.",
  },
  {
    name: "Simona Sever",
    when: "acum 5 luni",
    rating: 5,
    text: "Mulțumim STILO RENOVATION, echipa ce ne-a surprins prin seriozitate și profesionalism, timpul de execuție record, iar calitatea excepțională. Recomand această firmă, nota 10.",
  },
  {
    name: "Client Satu Mare",
    when: "recent",
    rating: 5,
    text: "Am colaborat pentru renovarea unui apartament complet. Termenele au fost respectate, iar rezultatul final a depășit așteptările. Recomand cu încredere.",
  },
  {
    name: "Familie mulțumită",
    when: "recent",
    rating: 5,
    text: "Echipă serioasă, curățenie pe șantier, comunicare excelentă. Ne-au ghidat în alegerea materialelor și au propus soluții pe care nu le-am fi găsit singuri.",
  },
];
