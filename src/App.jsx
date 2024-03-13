import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./Components/Button";
import Header from "./Components/Header";
import Benefits from "./Components/Benefits";
import Hero from "./Components/Hero";
import Collaboration from "./Components/Collaboration";
import Services from "./Components/Services";
import Pricing from "./Components/Pricing";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
