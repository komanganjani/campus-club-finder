function About() {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">About</h1>
        <p>This app helps students find and join campus clubs. Built with Vite, React, Tailwind, and React Router.</p>
        <button
  onClick={() => {
    localStorage.removeItem('joinedClubs');
    alert('Semua klub telah direset!');
  }}
  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
>
  Reset Joined Clubs
</button>

      </div>
      
    );
  }
  
  export default About;
  