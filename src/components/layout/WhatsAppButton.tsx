import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import info from "@utils/siteSettings/info.json";

const WhatsAppButton: React.FC = () => {
  const phn = (info.contact as any).whatsappPhn as string | undefined;
  if (!phn) return null;
  const clean = phn.replace(/\D/g, "");
  const msg = encodeURIComponent("Hello Dr. Shruti, I'd like to book an appointment.");
  return (
    <a
      href={`https://wa.me/${clean}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="lg-whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
      <span className="lg-whatsapp-fab-label">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
