import { NavLink } from 'react-router-dom';

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-bold'
      : 'text-gray-700 hover:text-blue-500';

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow">
    <ul className="flex gap-6">
      <NavLink to="/" className={({ isActive }) => isActive ? "font-bold underline" : "hover:underline"}>
        Home
      </NavLink>
      <NavLink to="/clubs" className={({ isActive }) => isActive ? "font-bold underline" : "hover:underline"}>
        Clubs
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "font-bold underline" : "hover:underline"}>
        About
      </NavLink>
    </ul>
  </nav>
  );
}

export default Navbar;

