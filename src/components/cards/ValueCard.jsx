import { FaStar } from "react-icons/fa";

export const ValueCard = ({ title, description }) => (
  <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
    <div className="mb-4 text-red-500">
      <FaStar size={48} />
    </div>
    <h3 className="text-xl font-bold text-red-500 mb-2">{title}</h3>
    <p className="text-white">{description}</p>
  </div>
);
