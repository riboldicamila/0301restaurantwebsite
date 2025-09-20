import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = ({ text = "Loading...", size = "3xl", className = "" }) => {
  return (
    <div className={`flex flex-col justify-center items-center h-64 gap-2 ${className}`}>
      <AiOutlineLoading3Quarters className={`text-${size} text-gray-600 animate-spin`} />
      {text && <div className="text-xl text-gray-600">{text}</div>}
    </div>
  );
};

export default Loader;
