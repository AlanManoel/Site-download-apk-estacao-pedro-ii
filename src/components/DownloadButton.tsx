import { APP } from "../config/app.config.ts";

export default function DownloadButton({ large = false }) {
  return (
    <a
      className={`btn ${large ? "btn--lg" : ""}`}
      href={APP.apkUrl}
      download={APP.fileName}
      type="application/vnd.android.package-archive"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3v12m0 0 5-5m-5 5-5-5M4 20h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Baixar aplicativo · v{APP.version}
    </a>
  );
}
