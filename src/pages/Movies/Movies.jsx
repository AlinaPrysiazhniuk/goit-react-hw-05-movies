import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { searchByName } from 'components/SearchMovies';

const Movies = () => {
  const [name, setName] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchparams] = useSearchParams('');
  const location = useLocation();

  const searchName = searchParams.get('name');

  useEffect(() => {
    searchByName && searchByName(searchName).then(setMovies);
  }, [searchName]);

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await searchByName(name);
    setMovies(response);
    setSearchparams({ name });
    setName('');
  };

  const onChange = e => {
    setName(e.target.value);
  };

  return (
    <>
      <div class="form-div">
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={onChange} />
          <button type="submit" search></button>
        </form>
      </div>
      {movies.length > 0 && (
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
      )}
    </>
  );
};

export default Movies;
