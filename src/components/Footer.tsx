import { APP } from "../config/app.config.ts";
import DownloadButton from "./DownloadButton.tsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__in">
        <div>
          <strong>Pronto para instalar?</strong>
          <p>Dúvidas? <a href={`mailto:${APP.supportEmail}`}>{APP.supportEmail}</a></p>
        </div>
        <DownloadButton />
      </div> 
    </footer>
  );
}
