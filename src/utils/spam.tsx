import "./style/spam.css";

import facebook from "../assets/icons/facebook.png";
import tiktok from "../assets/icons/tiktok.png";
import whatsapp from "../assets/icons/whatsapp.png";
import youtube from "../assets/icons/youtube.png";

const Spam = () => {
  return (
    <div className="spam-bubble">
      <p className="spam-label">Síguenos</p>
      <div className="spam-icons">
        <a href="https://www.tiktok.com/@moris.eder.arce.a" target="_blank" aria-label="TikTok">
          <img src={tiktok} alt="TikTok" />
        </a>
        <a href="https://www.youtube.com/@BandaShowlaProvincialCoracora" target="_blank" aria-label="YouTube">
          <img src={youtube} alt="YouTube" />
        </a>
        <a href="https://www.facebook.com/morriseder.arceamao" target="_blank" aria-label="Facebook">
          <img src={facebook} alt="Facebook" />
        </a>
        <a
          href="https://wa.me/51997236893"
          aria-label="Whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
      </div>
    </div>
  );
};

export default Spam;
