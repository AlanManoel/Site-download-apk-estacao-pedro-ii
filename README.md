# Estação Pedro II — Site de Download

Site desenvolvido para disponibilizar o download do aplicativo **Estação Pedro II** para dispositivos Android, oferecendo aos usuários informações sobre o aplicativo e orientações para instalação.

## 📱 Sobre o projeto

O site permite que os usuários baixem o aplicativo Estação Pedro II diretamente pelo navegador, consultem informações sobre a versão disponibilizada e acessem instruções para instalar o arquivo APK com segurança.

## ✨ Funcionalidades

- 📥 **Download do APK:** acesso direto ao arquivo de instalação.
- 📋 **Informações do aplicativo:** versão, tamanho do arquivo e requisitos mínimos.
- 🛡️ **Orientações de segurança:** explicações sobre os avisos do Android durante a instalação.
- 📲 **Guia de instalação:** passo a passo para instalar o aplicativo.
- 🔧 **Solução de problemas:** orientações para dificuldades comuns durante a instalação.
- ⭐ **Avaliação do aplicativo:** acesso a um formulário para enviar opiniões e sugestões.
- 📱 **Layout responsivo:** interface adaptada para celulares, tablets e computadores.

## 🛠️ Tecnologias utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- HTML5
- CSS3

## 🚀 Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- npm disponível no terminal.

### Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd site-download-apk-estacao-pedro-ii
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O terminal exibirá o endereço local para acessar o site pelo navegador.

## 📦 Gerar versão de produção

Execute:

```bash
npm run build
```

Os arquivos gerados estarão na pasta `dist/`.

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

## 📂 Estrutura do projeto

```text
public/
├── downloads/
│   └── meuapp.apk
├── logo.png
└── mockup.png

src/
├── components/
│   ├── DownloadButton.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── InstallSteps.tsx
│   ├── Rating.tsx
│   ├── Troubleshooting.tsx
│   └── Warning.tsx
├── config/
│   └── app.config.ts
├── styles/
│   └── global.css
├── App.tsx
└── main.tsx
```

*Nota: a estrutura acima é ilustrativa. Ajuste os nomes dos arquivos e diretórios para corresponder à estrutura atual do repositório.*

## ⚙️ Personalização

As principais informações do aplicativo podem ser alteradas no arquivo `src/config/app.config.ts`, incluindo:

- Nome do aplicativo.
- Versão.
- Tamanho do APK.
- Data da última atualização.
- Versão mínima do Android.
- Nome do arquivo APK.
- Link e contato para suporte.

O arquivo APK deve ser colocado na pasta `public/downloads/`, respeitando o nome configurado em `app.config.ts`.

## 📋 Requisitos

- O arquivo APK é destinado a dispositivos Android compatíveis.
- A instalação pode exigir autorização para instalar aplicativos de fontes externas.
- O iPhone (iOS) não oferece suporte à instalação direta de arquivos APK.

## 📄 Licença

Consulte as informações de licença definidas pelo responsável pelo projeto antes de reutilizar ou distribuir o código.

---

Desenvolvido para facilitar o acesso ao aplicativo **Estação Pedro II**.