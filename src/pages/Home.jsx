import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";


function Home() {
    
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect( () => {
      axios.post('https://hoblist.com/api/movieList', {
        "category": "movies",
        "language": "kannada",
        "genre": "all",
        "sort": "voting"
      })
      .then(response => {
        // console.log(response.data.result)
        setMovies(response.data.result);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
    }, []);
  
    if (loading) {
      return <Loader/>
    }
  
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Kannada Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {movies.map((movie)=> <Card key={movie._id} movie={movie} />)}
         </div>
      </div>
    );
}

export default Home
