import { APP } from "../config/app.config.ts";
import DownloadButton from "./DownloadButton.tsx";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div>
          <h1>Baixe o {APP.name} em APK.</h1>
          <p className="lead">{APP.tagline}</p>
          <div className="hero__cta">
            <DownloadButton large />
            <a className="link" href="#instalar">Ver como instalar</a>
          </div>
          <p className="hint">
            O Android vai mostrar alguns avisos de segurança. É normal para aplicativos fora da Play Store —
            <a href="#seguranca"> entenda o porquê</a>.
          </p>
        </div>
        
        <div className="hero__image">
          <img
            src={`${import.meta.env.BASE_URL}mockup.png`}
            alt={`Aplicativo ${APP.name}`}
          />
        </div>
      </div>
    </section>
  );
}
