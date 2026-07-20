export const SITE = {
  name: "Stilo Renovation",
  legal: "Stilo Renovation SRL",
  city: "Satu Mare",
  phone: "0742 914 164",
  phoneIntl: "40742914164",
  email: "stilorenovation@gmail.com",
  hours: "Luni – Vineri, până la 17:00",
  whatsappMsg:
    "Bună! Aș dori o consultație gratuită pentru un proiect de renovare.",
  facebook: "https://www.facebook.com/StiloRenovation/?locale=ro_RO",
  mapsQuery: "Stilo Renovation SRL, Satu Mare",
  mapsEmbed:
    "https://www.google.com/maps?q=Stilo+Renovation+SRL+Satu+Mare&output=embed",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Stilo+Renovation+SRL+Satu+Mare",
};

export const WHATSAPP_NUMBER = "40742914164";

export const whatsappUrl = (message = SITE.whatsappMsg) => {
  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return whatsappUrl;
};

export const openWhatsApp = (message = SITE.whatsappMsg) => {
  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};
