import { Link } from 'react-router-dom';

function ClubCard({ club }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-md p-4 flex flex-col">
      <img src={club.image} alt={club.name} className="w-full h-48 object-cover rounded mb-4" />
      <h2 className="text-xl font-bold">{club.name}</h2>
      <p className="text-gray-600 mb-4">{club.shortDescription}</p>
      <Link to={`/clubs/${club.id}`} className="mt-auto text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
}

export default ClubCard;
