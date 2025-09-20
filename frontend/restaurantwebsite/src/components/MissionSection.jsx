import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export const MissionSection = () => (
  <div className="bg-red-500 rounded-lg p-8 text-center">
    <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
    <p className="text-white text-xl italic mb-6">
      "To transport our guests to the vibrant streets of Bangkok through authentic flavors and genuine Thai hospitality."
    </p>

    <Link
      to="/reservations"
      className="bg-white text-red-500 font-bold px-6 py-3 rounded inline-flex items-center hover:bg-slate-200 transition-colors"
    >
      RESERVE A TABLE
      <FaChevronRight
        size={20}
        className="ml-2 group-hover:animate-bounce"
      />
    </Link>
  </div>
);
