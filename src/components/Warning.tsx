const items = [
  {
    t: "O navegador pode bloquear o download",
    d: "O Chrome costuma perguntar se você quer manter um arquivo .apk. Toque em “Baixar mesmo assim”.",
  },
  {
    t: "O Android exige permissão para instalar",
    d: "Apps fora da loja só instalam se você liberar “Instalar apps desconhecidos” para o navegador ou gerenciador de arquivos usado.",
  },
  {
    t: "O Play Protect pode alertar",
    d: "Ele analisa apps que não vêm da Play Store. O aviso aparece porque o app não passou pela revisão do Google, não porque foi detectado um vírus.",
  },
];

export default function Warning() {
  return (
    <section className="section section--alert" id="seguranca">
      <div className="container">
        <div className="alert">
          <div className="alert__icon" aria-hidden="true">!</div>
          <div>
            <h2>Este app não é da Google Play</h2>
            <p>
              Por isso o Android vai pedir confirmações extras. Instale apenas se você confia na origem deste site.
              Nunca instale aplicativos recebidos por links desconhecidos.
            </p>
          </div>
        </div>

        <ul className="cards">
          {items.map((i) => (
            <li key={i.t} className="card">
              <h3>{i.t}</h3>
              <p>{i.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
