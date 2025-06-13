import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-red-600">404 - Page Not Found</h1>
      <Link to="/" className="text-blue-500 underline mt-4 block">Back to Home</Link>
    </div>
  );
}

export default NotFound;

