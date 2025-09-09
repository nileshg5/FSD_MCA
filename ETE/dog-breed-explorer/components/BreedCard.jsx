/* eslint-disable react/prop-types */

function BreedCard({ breed }) {
  const { name, description, life, male_weight, female_weight, hypoallergenic } = breed;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out">
      {/* Breed Name */}
      <h2 className="text-2xl font-bold text-gray-800 mb-3">{name}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {description || "No description available."}
      </p>

      {/* Breed Info */}
      <ul className="space-y-1 text-sm">
        <li>
          <span className="font-semibold text-gray-700">Lifespan:</span>{" "}
          <span className="text-gray-800">{life?.min} - {life?.max} years</span>
        </li>
        <li>
          <span className="font-semibold text-gray-700">Male Weight:</span>{" "}
          <span className="text-blue-600">{male_weight?.min} - {male_weight?.max} lbs</span>
        </li>
        <li>
          <span className="font-semibold text-gray-700">Female Weight:</span>{" "}
          <span className="text-pink-600">{female_weight?.min} - {female_weight?.max} lbs</span>
        </li>
        <li>
          <span className="font-semibold text-gray-700">Hypoallergenic:</span>{" "}
          {hypoallergenic ? (
            <span className="text-green-600 font-bold">✅ Yes</span>
          ) : (
            <span className="text-red-600 font-bold">❌ No</span>
          )}
        </li>
      </ul>
    </div>
  );
}

export default BreedCard;
