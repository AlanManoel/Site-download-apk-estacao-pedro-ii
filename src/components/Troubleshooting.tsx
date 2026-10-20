import { APP } from "../config/app.config.ts";

const faq = [
  {
    q: "O download não começa ou aparece “Arquivo perigoso”",
    a: "É o bloqueio padrão do navegador para arquivos .apk. Toque em “Manter” ou “Baixar mesmo assim”. Se continuar, tente outro navegador ou desative temporariamente a Navegação Segura do Chrome.",
  },
  {
    q: "Aparece “Instalação bloqueada”",
    a: "Vá em Configurações > Apps > Acesso especial > Instalar apps desconhecidos, escolha o navegador (ou gerenciador de arquivos) que você usou e ative “Permitir desta fonte”. O caminho muda um pouco entre Samsung, Xiaomi e Motorola.",
  },
  {
    q: "O Play Protect bloqueou o app",
    a: "Toque em Mais detalhes > Instalar mesmo assim. Se não houver essa opção, abra a Play Store > seu perfil > Play Protect > ícone de engrenagem e desative “Analisar apps com o Play Protect” só durante a instalação. Reative depois.",
  },
  {
    q: "“App não instalado” ou “Pacote inválido”",
    a: `Confirme que o download terminou (tamanho ~${APP.size}), que seu Android é ${APP.minAndroid} e que há espaço livre. Se já tem outra versão instalada com assinatura diferente, desinstale antes.`,
  },
  {
    q: "Como saber se o arquivo é íntegro?",
    a: APP.sha256
      ? "Compare o SHA-256 mostrado na ficha do arquivo com o hash do arquivo baixado usando um app de verificação de hash."
      : "Baixe sempre deste site. Em caso de dúvida, fale com o suporte.",
  },
];

export default function Troubleshooting() {
  return (
    <section className="section" id="problemas">
      <div className="container container--narrow">
        <h2>Deu erro? Veja o que fazer</h2>
        <div className="faq">
          {faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
