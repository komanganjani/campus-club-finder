import { useParams } from 'react-router-dom';
import { clubs } from '../data/clubs';
import { useState, useEffect } from 'react';

function ClubDetail() {
  const { clubId } = useParams();
  const club = clubs.find((c) => c.id === clubId);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]');
    setJoined(joinedClubs.includes(clubId));
  }, [clubId]);

  const handleJoin = () => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]');
    if (!joinedClubs.includes(clubId)) {
      joinedClubs.push(clubId);
      localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
      setJoined(true);
    }
  };

  if (!club) return <p className="p-8">Club not found.</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <img src={club.image} alt={club.name} className="w-full h-64 object-cover rounded mb-4" />
      <h1 className="text-3xl font-bold mb-2">{club.name}</h1>
      <p className="text-gray-700 mb-4">{club.description}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Upcoming Events</h2>
      <ul className="list-disc list-inside mb-4">
        {club.events.map((event, index) => (
          <li key={index}>{event.name} - {event.date}</li>
        ))}
      </ul>

      {joined ? (
        <button className="bg-gray-400 text-white py-2 px-4 rounded cursor-not-allowed" disabled>
          You have joined this club!
        </button>
      ) : (
        <button onClick={handleJoin} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Join Club
        </button>
      )}
    </div>
  );
}

export default ClubDetail;
