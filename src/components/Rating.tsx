import { APP } from "../config/app.config.ts";

export default function Rating() {
  return (
    <section className="rating" id="avaliar">
      <div className="container">
        <h2>Avalie nosso aplicativo</h2>

        <p>
          Sua opinião é importante para continuarmos melhorando!
        </p>

        <a
          href={APP.linkForms}
          target="_blank"
          rel="noopener noreferrer"
          className="rating__button"
        >
          Avaliar aplicativo
        </a>
      </div>
    </section>
  );
}
