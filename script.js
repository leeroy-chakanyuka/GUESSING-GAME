const quoteForm = document.getElementById("quote-form");
const formNote = document.getElementById("form-note");

// Leave empty to let the visitor choose the Builder Co chat in WhatsApp.
// When you have the contractor's WhatsApp number, use digits only, e.g. "27821234567".
const BUILDER_CO_WHATSAPP = "";

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(quoteForm);
  const name = data.get("name").trim();
  const phone = data.get("phone").trim();
  const area = data.get("area").trim();
  const projectType = data.get("projectType").trim();
  const details = data.get("details").trim();

  const message = [
    "Hi Builder Co, I'd like a quote.",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Area: ${area}`,
    `Job: ${projectType}`,
    "",
    "What needs to be done:",
    details
  ].join("\n");

  const base = BUILDER_CO_WHATSAPP
    ? `https://wa.me/${BUILDER_CO_WHATSAPP}`
    : "https://wa.me/";

  const url = `${base}?text=${encodeURIComponent(message)}`;

  formNote.textContent = "Opening WhatsApp with your quote request…";
  formNote.classList.add("success");

  const popup = window.open(url, "_blank", "noopener,noreferrer");

  if (!popup) {
    window.location.href = url;
  }
});
