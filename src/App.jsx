import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Warning from "./components/Warning.tsx";
import InstallSteps from "./components/InstallSteps.tsx";
import Troubleshooting from "./components/Troubleshooting.tsx";
import Footer from "./components/Footer.tsx";
import Rating from "./components/Rating.tsx"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Warning />
        <InstallSteps />
        <Troubleshooting />
        <Rating />
      </main>
      <Footer />
    </>
  );
}
