import { useState } from 'react';
import { clubs as clubData } from '../data/clubs';
import ClubCard from '../components/ClubCard';

function Clubs() {
  const [sortOrder, setSortOrder] = useState('az'); // default A-Z
  const [viewMode, setViewMode] = useState('grid'); // 'grid' atau 'list'

  const sortedClubs = [...clubData].sort((a, b) => {
    if (sortOrder === 'az') return a.name.localeCompare(b.name);
    else return b.name.localeCompare(a.name);
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">All Clubs</h1>

      {/* Sort & View Controls */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <select
          className="border p-2 rounded"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="az">Name A-Z</option>
          <option value="za">Name Z-A</option>
        </select>

        <div className="space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1 border rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : ''}`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 py-1 border rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : ''}`}
          >
            List
          </button>
        </div>
      </div>

      {/* Club List */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
        {sortedClubs.map((club) => (
          <div key={club.id} className={viewMode === 'list' ? 'flex gap-4 border p-4 rounded' : ''}>
            <ClubCard club={club} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clubs;
