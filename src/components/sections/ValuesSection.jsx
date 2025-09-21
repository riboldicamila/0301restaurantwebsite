import { VALUES_DATA } from "../../constants/our-story";
import { ValueCard } from "../cards/ValueCard";

export const ValuesSection = ({ isVisible }) => (
  <div
    className={`mb-16 transform transition-all duration-700 ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }`}
  >
    <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
      Our Values
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {VALUES_DATA.map((value, index) => (
        <ValueCard
          key={index}
          title={value.title}
          description={value.description}
        />
      ))}
    </div>
  </div>
);
