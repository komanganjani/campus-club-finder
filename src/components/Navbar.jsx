import { NavLink } from 'react-router-dom';

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-bold'
      : 'text-gray-700 hover:text-blue-500';

  return (
    <nav className="bg-white shadow p-4 border-b flex gap-6">
      <NavLink to="/" className={linkClass}>Home</NavLink>
      <NavLink to="/clubs" className={linkClass}>Clubs</NavLink>
      <NavLink to="/about" className={linkClass}>About</NavLink>
    </nav>
  );
}

export default Navbar;
