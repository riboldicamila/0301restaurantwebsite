export default function FounderCard({ name, role, img, description }) {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow hover:bg-slate-700 p-6 flex-1">
      <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-6">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-bold text-red-500 mb-2 text-center">{name}</h3>
      <p className="text-white text-center mb-4">{role}</p>
      <p className="text-white">{description}</p>
    </div>
  );
}
