const steps = [
  {
    t: "Baixe o arquivo",
    d: "Toque em “Baixar APK”. Se o navegador avisar que o arquivo pode ser perigoso, escolha “Baixar mesmo assim”.",
  },
  {
    t: "Libere a instalação",
    d: "Ao abrir o arquivo, o Android mostra “Por segurança, seu smartphone não está autorizado a instalar apps desconhecidos desta fonte”. Toque em Configurações e ative “Permitir desta fonte”.",
  },
  {
    t: "Toque em Instalar",
    d: "Volte e abra o arquivo baixado (pasta Downloads ou notificação do navegador). Toque em Instalar.",
  },
  {
    t: "Confirme no Play Protect",
    d: "Se aparecer “App bloqueado pelo Play Protect”, toque em Mais detalhes e depois em Instalar mesmo assim.",
  },
];

export default function InstallSteps() {
  return (
    <section className="section" id="instalar">
      <div className="container">
        <h2>Como instalar, passo a passo</h2>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.t} className="step">
              <span className="step__n">{i + 1}</span>
              <div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="note">
          Depois de instalar, você pode desativar “Permitir desta fonte” nas configurações para manter o aparelho protegido.
        </p>
      </div>
    </section>
  );
}
