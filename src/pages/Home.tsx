import HeroSection from "../components/HeroSection";
import ResultLookup from "../components/ResultLookup";
import SaraswatiSection from "../components/SaraswatiSection";
import Facilities from "../components/Facilities";
import NewsTicker from "../components/NewsTicker";

const HomePage = () => {
  return (
    <div>

      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 py-4">
        <NewsTicker />
      </div>

      <ResultLookup />

      <SaraswatiSection />

      <Facilities />

    </div>
  );
};

export default HomePage;