import FavoritesSection from "../components/sections/FavoriteSection";
import ReserveBanner from "../components/sections/ReserveBanner";
import HeroSection from "../components/sections/HeroSection";
import BenefictsSections from "../components/sections/BenefictsSection";

const Home = () => {
  return (
    <div className="bg-[#F1FAEE] min-h-screen">
      <HeroSection />
      <FavoritesSection />
      <BenefictsSections />
      <ReserveBanner />
    </div>
  );
};

export default Home;
