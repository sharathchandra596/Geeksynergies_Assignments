
import { MdLocalMovies } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Navbar() {
   
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a  href="/" className="text-white text-2xl font-bold flex justify-center items-center">
        <MdLocalMovies size={40} /> <h1>Movies</h1>
        </a>

        
        <Link to={"/company"}>
        <button className="bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300">
          Conpany Info
        </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
