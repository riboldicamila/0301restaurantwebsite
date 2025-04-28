const BenefitCard = ({ title, description, icon }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="inline-flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[#2D3142] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };

  export default BenefitCard;
  