import RestaurantGallery from "../components/sections/RestaurantGallery";
import FounderCard from "../components/cards/FounderCard";
import { PageHeader } from "../components/sections/PageHeader";
import { StorySection } from "../components/sections/StorySection";
import { ValuesSection } from "../components/sections/ValuesSection";
import { MissionSection } from "../components/sections/MissionSection";

import { useGradualVisibility } from "../hooks/useGradualVisibility";

import { FOUNDERS } from "../constants/our-story";

const OurStory = () => {
  const isVisible = useGradualVisibility();

  return (
    <div className="bg-slate-900 min-h-screen font-trirong">
      <PageHeader isVisible={isVisible.header} />

      <div className="max-w-6xl mx-auto px-8 pb-16">
        <StorySection isVisible={isVisible.story} />

        <div
          className={`mb-16 transform transition-all duration-700 ${
            isVisible.founders
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
            Meet Our Founders
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            {FOUNDERS.map((founder) => (
              <FounderCard
                key={founder.id}
                name={founder.name}
                role={founder.role}
                img={founder.img}
                description={founder.description}
              />
            ))}
          </div>
        </div>

        <ValuesSection isVisible={isVisible.values} />

        <MissionSection />
      </div>

      <RestaurantGallery />
    </div>
  );
};

export default OurStory;
