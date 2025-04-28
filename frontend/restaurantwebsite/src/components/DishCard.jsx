import Button from "./Button";

const DishCard = ({ title, description, rating, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-2 left-2 bg-[#E63946] text-[#F1FAEE] font-bold px-2 py-1 rounded-full text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {rating}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#2D3142] mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="primary" fullWidth>ORDER NOW</Button>
      </div>
    </div>
  );
};

export default DishCard;
