// Edite aqui: é o único arquivo que você precisa mexer para personalizar o site.
const fileName = "meuapp.apk"; // deve existir em public/downloads/

export const APP = {
  name: "Estação Pedro II",
  tagline: "Disponível para Android. Não compatível com iPhone (iOS).",
  version: "1.0.0",
  size: "130,3 MB",
  updatedAt: "19/10/2026",
  minAndroid: "8.0 (Oreo) ou superior",
  fileName,
  apkUrl: `https://github.com/AlanManoel/Estacao-Pedro-II/releases/download/v1/application-e2345cf1-94d7-4884-bd9d-fe9d5142b085.apk`,
  // Opcional: gere com `sha256sum meuapp.apk` para o usuário conferir a integridade
  sha256: "",
  supportEmail: "alanmanoel517@gmail.com",
  linkForms: "https://docs.google.com/forms/d/e/1FAIpQLSfztNr05yHienstfKrcb6Tf4STHyQZtHqNephaIPY8syV6SUQ/viewform?usp=dialog"
};
