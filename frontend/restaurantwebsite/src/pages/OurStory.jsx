import { useState, useEffect } from "react";
import { ChevronRight, Star } from "lucide-react";

export default function OurStory() {
  const [isVisible, setIsVisible] = useState({
    header: false,
    story: false,
    founders: false,
    values: false,
  });

  useEffect(() => {
    setIsVisible((prev) => ({ ...prev, header: true }));

    const timers = [
      setTimeout(() => setIsVisible((prev) => ({ ...prev, story: true })), 300),
      setTimeout(
        () => setIsVisible((prev) => ({ ...prev, founders: true })),
        600
      ),
      setTimeout(
        () => setIsVisible((prev) => ({ ...prev, values: true })),
        900
      ),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen">
      <div
        className={`px-8 py-16 flex flex-col items-center transform transition-all duration-700 ${
          isVisible.header
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-red-500 text-center mb-2">
          OUR STORY
        </h1>
        <div className="w-24 h-1 bg-red-500 mb-4"></div>
        <p className="text-white text-xl text-center max-w-2xl">
          The journey behind Bangkok's authentic flavors in the heart of the
          city
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-8 pb-16">
        <div
          className={`mb-16 bg-slate-800 rounded-lg overflow-hidden shadow-xl transform transition-all duration-700 ${
            isVisible.story
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <video
                src="https://res.cloudinary.com/dav7tzdzv/video/upload/v1745861598/12798267_2560_1440_25fps_jvq0wm.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-red-500 mb-4">
                Our Beginnings
              </h2>
              <p className="text-white mb-4">
                Sabai Thai started in 2015 when Chef Sombat and his wife Malai
                decided to bring the authentic tastes of their hometown in
                Bangkok to this city. After years of cooking traditional recipes
                passed down through generations, they took a leap of faith to
                share their culinary heritage.
              </p>
              <p className="text-white">
                What began as a small food cart quickly gained popularity for
                its bold flavors and genuine Thai hospitality. Within two years,
                we expanded to our current location, where we continue to serve
                dishes made with the same passion and authentic ingredients.
              </p>
            </div>
          </div>
        </div>

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
            <div className="bg-slate-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow p-6 flex-1">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-6">
                <img 
                  src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1745861845/free-photo-of-a-chef-holding-a-plate_ywwszt.jpg" 
                  alt="Chef Sombat" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-red-500 mb-2 text-center">
                Chef Sombat
              </h3>
              <p className="text-white text-center mb-4">
                Master Chef & Co-Founder
              </p>
              <p className="text-white">
                Born and raised in Bangkok, Sombat learned to cook at his
                grandmother's side. After training at Thailand's top culinary
                school and working in renowned restaurants across Southeast
                Asia, he returned to his roots with a mission to share authentic
                Thai street food with the world.
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow p-6 flex-1">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-6">
              <img 
                  src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1745861943/middle-age-adult-having-fun-night_23-2149237449_nt7pue.jpg" 
                  alt="Chef Sombat" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-red-500 mb-2 text-center">
                Malai
              </h3>
              <p className="text-white text-center mb-4">
                Hospitality Director & Co-Founder
              </p>
              <p className="text-white">
                With a background in hospitality management and a passion for
                Thai culture, Malai ensures every guest feels the warmth of Thai
                hospitality. She personally selects ingredients from local Asian
                markets and maintains relationships with specialty importers to
                ensure authenticity.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`mb-16 transform transition-all duration-700 ${
            isVisible.values
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="mb-4 text-red-500">
                <Star size={48} />
              </div>
              <h3 className="text-xl font-bold text-red-500 mb-2">
                Authentic Flavors
              </h3>
              <p className="text-white">
                We never compromise on authenticity. Our ingredients are sourced
                directly from Thailand when possible, and our recipes stay true
                to their street food origins.
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="mb-4 text-red-500">
                <Star size={48} />
              </div>
              <h3 className="text-xl font-bold text-red-500 mb-2">
                Community Connection
              </h3>
              <p className="text-white">
                We believe food brings people together. Our restaurant is
                designed to foster community and share the joy of Thai cuisine
                with everyone who visits.
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="mb-4 text-red-500">
                <Star size={48} />
              </div>
              <h3 className="text-xl font-bold text-red-500 mb-2">
                Sustainability
              </h3>
              <p className="text-white">
                We're committed to sustainable practices, from locally sourcing
                ingredients when possible to minimizing food waste and using
                eco-friendly packaging for takeout orders.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-500 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-white text-xl italic mb-6">
            "To transport our guests to the vibrant streets of Bangkok through
            authentic flavors and genuine Thai hospitality."
          </p>
          <button className="bg-white text-red-500 font-bold px-6 py-3 rounded flex items-center mx-auto hover:bg-slate-100 transition-colors">
            RESERVE A TABLE <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
      </div>

      <div className="py-16 bg-slate-800">
        <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
          Our Restaurant
        </h2>
        <div className="flex overflow-x-auto gap-4 px-8 pb-4 scrollbar-hide">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex-none w-64 h-48 rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
            >
              <img
                src={`/api/placeholder/300/200`}
                alt={`Restaurant image ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
