import { useState, useEffect, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "./style/contratos.css";
import Scroll from "../utils/scroll";
import whatsappIcon from "../assets/icons/whatsapp.png";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "REPLACE_ME_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "REPLACE_ME_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "REPLACE_ME_PUBLIC_KEY";

const Contratos = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const today = new Date().toISOString().split("T")[0];

  // Scroll al tope cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") as string) || "";
    const surname = (data.get("surname") as string) || "";
    const phone = (data.get("phone") as string) || "";
    const email = (data.get("email") as string) || "";
    const eventType = (data.get("eventType") as string) || "";
    const date = (data.get("date") as string) || "";
    const time = (data.get("time") as string) || "";
    const duration = (data.get("duration") as string) || "";
    const musicians = (data.get("musicians") as string) || "";
    const city = (data.get("city") as string) || "";
    const district = (data.get("district") as string) || "";
    const address = (data.get("address") as string) || "";
    const message = (data.get("message") as string) || "";
    const honeypot = (data.get("website") as string) || "";

    if (honeypot.trim().length > 0) {
      // Honeypot filled, likely bot
      return;
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 8) {
      setStatus("error");
      alert("Ingresa un teléfono válido (solo dígitos).");
      return;
    }

    const musiciansNum = parseInt(musicians, 10);
    if (isNaN(musiciansNum) || musiciansNum < 8) {
      setStatus("error");
      alert("La cantidad de músicos debe ser mínimo 8.");
      return;
    }

    if (/https?:\/\//i.test(message) || /www\./i.test(message)) {
      setStatus("error");
      alert("Por seguridad no permitimos enlaces en el mensaje.");
      return;
    }

    if (message.length > 700) {
      setStatus("error");
      alert("Mensaje muy largo. Limita a 700 caracteres.");
      return;
    }

    if (!date || date < today) {
      setStatus("error");
      alert("Elige una fecha de hoy o futura, no una pasada.");
      return;
    }

    if (!city.trim() || !district.trim() || !address.trim()) {
      setStatus("error");
      alert("Indica ciudad, distrito y dirección exacta.");
      return;
    }

    const location = [address, district, city].filter(Boolean).join(", ");

    if (
      EMAILJS_SERVICE_ID.startsWith("REPLACE_ME") ||
      EMAILJS_TEMPLATE_ID.startsWith("REPLACE_ME") ||
      EMAILJS_PUBLIC_KEY.startsWith("REPLACE_ME")
    ) {
      setStatus("error");
      alert("Configura tus claves de EmailJS en .env antes de enviar.");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name,
          surname,
          phone,
          email,
          eventType,
          date,
          time,
          duration,
          musicians,
          location,
          city,
          district,
          address,
          message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS error", err);
      setStatus("error");
      alert("No se pudo enviar. Intenta más tarde o usa WhatsApp.");
    }
  };

  return (
    <section className="contracts">
      <div className="contracts__header">
        <h1 className="contracts__main-title">Contratos</h1>
        <p className="contracts__main-subtitle">
          Elige tu forma preferida de contacto: respuesta inmediata por WhatsApp o cotización detallada por Gmail.
        </p>
      </div>

      <div className="contracts__container">
        {/* Sección WhatsApp */}
        <div className="contracts__section whatsapp">
          <div className="contracts__section-header">
            <h2 className="contracts__section-title">
              <img src={whatsappIcon} alt="WhatsApp" className="contracts__icon" />
              Contacto por WhatsApp
            </h2>
            <p className="contracts__section-subtitle">Respuesta directa e inmediata para reservar tu fecha</p>
          </div>

          <div className="contracts__content">
            <div className="contracts__cta">
              <a
                className="contracts__btn primary"
                href="https://wa.me/51997236893?text=Hola,%20quiero%20contratar%20a%20La%20Provincial%20Coracora%20para%20un%20evento"
                target="_blank"
                rel="noreferrer"
              >
                Chatear ahora
              </a>
            </div>

            <div className="contracts__info-grid">
              <div className="contracts__info-card">
                <p className="contracts__label">Llamadas y WhatsApp</p>
                <a className="contracts__link" href="tel:+51997236893">+51 997 236 893</a>
              </div>
              <div className="contracts__info-card">
                <p className="contracts__label">Correo de contrataciones</p>
                <a className="contracts__link" href="mailto:bandashowprovincialcoracora@gmail.com">bandashowprovincialcoracora@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Sección Gmail */}
        <div className="contracts__section gmail">
          <div className="contracts__section-header">
            <h2 className="contracts__section-title">📧 Contacto por Gmail</h2>
            <p className="contracts__section-subtitle">Envíanos los detalles y recibe una cotización completa en 24 horas</p>
          </div>
          <form className="contracts__form" onSubmit={handleEmail}>
            <div className="contracts__field-grid">
              <div className="contracts__field-group">
                <label htmlFor="name">Nombre</label>
                <input id="name" name="name" type="text" placeholder="Tu nombre" required maxLength={80} />
              </div>
              <div className="contracts__field-group">
                <label htmlFor="surname">Apellidos</label>
                <input id="surname" name="surname" type="text" placeholder="Tus apellidos" required maxLength={80} />
              </div>
            </div>
            <div className="contracts__field-grid">
              <div className="contracts__field-group">
                <label htmlFor="phone">Teléfono</label>
                <input id="phone" name="phone" type="tel" placeholder="999 999 999" required maxLength={15} pattern="[0-9+\s-]+" />
              </div>
              <div className="contracts__field-group">
                <label htmlFor="email">Correo</label>
                <input id="email" name="email" type="email" placeholder="tucorreo@gmail.com" required maxLength={120} />
              </div>
            </div>
            <div className="contracts__field-group">
              <label htmlFor="eventType">Tipo de evento</label>
              <input id="eventType" name="eventType" type="text" placeholder="Boda, cumpleaños, fiesta patronal..." maxLength={80} />
            </div>
            <div className="contracts__field-grid">
              <div className="contracts__field-group">
                <label htmlFor="date">Fecha del evento</label>
                <input id="date" name="date" type="date" required min={today} />
              </div>
              <div className="contracts__field-group">
                <label htmlFor="time">Hora de inicio</label>
                <input id="time" name="time" type="time" placeholder="18:00" required />
              </div>
            </div>
            <div className="contracts__field-grid">
              <div className="contracts__field-group">
                <label htmlFor="duration">Duración (horas)</label>
                <input id="duration" name="duration" type="number" min="1" max="24" placeholder="4" required />
              </div>
              <div className="contracts__field-group">
                <label htmlFor="musicians">Cantidad de músicos</label>
                <input id="musicians" name="musicians" type="number" min="8" max="40" placeholder="8" required />
              </div>
            </div>
            <div className="contracts__field-group">
              <label htmlFor="city">Ciudad</label>
              <input id="city" name="city" type="text" placeholder="Lima" required maxLength={60} />
            </div>
            <div className="contracts__field-group">
              <label htmlFor="district">Distrito</label>
              <input id="district" name="district" type="text" placeholder="Ingrese Distrito" required maxLength={80} />
            </div>
            <div className="contracts__field-group">
              <label htmlFor="address">Dirección</label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Calle, número, local, referencia"
                required
                maxLength={150}
              />
              <p className="contracts__helper">Por ejemplo, especifica tu dirección exacta: Jr. Los Olivos 123, Salón X, referencia frente al parque.</p>
            </div>
            <div className="contracts__field-group">
              <label htmlFor="message">Mensaje adicional</label>
              <textarea id="message" name="message" rows={3} placeholder="Cuéntanos más sobre tu evento" maxLength={700} />
            </div>
            <div className="contracts__honeypot" aria-hidden="true">
              <label htmlFor="website">Deja este campo vacío</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <button type="submit" className="contracts__btn secondary" disabled={status === "sending"}>
              {status === "sending" ? "Enviando..." : "Enviar solicitud"}
            </button>
            {status === "success" && <p className="contracts__status success">¡Enviado! Te responderemos pronto.</p>}
            {status === "error" && <p className="contracts__status error">Hubo un problema. Intenta de nuevo o usa WhatsApp.</p>}
          </form>
        </div>
      </div>
      <Scroll></Scroll>
    </section>
  );
};

export default Contratos;
