import { STORY_CONTENT, VIDEO_URL } from "../constants/text";

export const StorySection = ({ isVisible }) => (
  <div className={`mb-16 bg-slate-800 rounded-lg overflow-hidden shadow-xl transform transition-all duration-700 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`}>
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <video
          src={VIDEO_URL}
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
          {STORY_CONTENT.title}
        </h2>
        {STORY_CONTENT.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-white mb-4">{paragraph}</p>
        ))}
      </div>
    </div>
  </div>
);
