import "./style/spam.css";

const Spam = () => {
  return (
    <div className="spam-bubble">
      <p className="spam-label">Síguenos</p>
      <div className="spam-icons">
        <a href="https://www.tiktok.com/@moris.eder.arce.a" target="_blank" aria-label="TikTok">
          <img src="./assets/icons/tiktok.png" alt="TikTok" />
        </a>
        <a href="https://www.youtube.com/@BandaShowlaProvincialCoracora" target="_blank" aria-label="YouTube">
          <img src="./assets/icons/youtube.png" alt="YouTube" />
        </a>
        <a href="https://www.facebook.com/morriseder.arceamao" target="_blank" aria-label="Facebook">
          <img src="./assets/icons/facebook.png" alt="Facebook" />
        </a>
        <a
          href="https://wa.me/51997236893"
          aria-label="Whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./assets/icons/whatsapp.png" alt="Whatsapp" />
        </a>
      </div>
    </div>
  );
};

export default Spam;
