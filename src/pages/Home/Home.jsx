import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchTranding } from 'components/SearchMovies';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    searchTranding().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trandindg today</h1>
      <ul>
        {movies.map(({ id, title, poster }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img src={poster} alt={title} />
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
