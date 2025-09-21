export const PageHeader = ({ isVisible }) => (
  <div className={`px-8 py-16 flex flex-col items-center transform transition-all duration-700 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`}>
    <h1 className="text-4xl md:text-5xl font-bold text-red-500 text-center mb-2">
      OUR STORY
    </h1>
    <div className="w-24 h-1 bg-red-500 mb-4"></div>
    <p className="text-white text-xl text-center max-w-2xl">
      The journey behind Bangkok's authentic flavors in the heart of the city
    </p>
  </div>
);
