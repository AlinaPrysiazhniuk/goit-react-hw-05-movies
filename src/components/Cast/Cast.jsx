import { searchMovieCredits } from 'components/SearchMovies/SearchMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams('movieId');
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    searchMovieCredits(movieId).then(setCredits);
  }, [movieId]);

  return (
    <ul>
      {credits.map(({ id, name, character, photo }) => {
        return (
          <li key={id}>
            <img src={photo} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
