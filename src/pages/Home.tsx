import HeroSection from "../components/HeroSection";
import ResultLookup from "../components/ResultLookup";
import SaraswatiSection from "../components/SaraswatiSection";
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

    </div>
  );
};

export default HomePage;