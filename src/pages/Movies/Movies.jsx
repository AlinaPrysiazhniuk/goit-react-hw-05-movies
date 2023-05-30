import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { searchByName } from 'components/SearchMovies/SearchMovies';

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
    setSearchparams({ query });
    setName('');
  };

  const onChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div class="form-div">
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={onChange} />
          <button type="submit" search></button>
        </form>
      </div>
    </>
  );
};
