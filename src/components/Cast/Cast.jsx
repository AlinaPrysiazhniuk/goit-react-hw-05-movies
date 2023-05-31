import { searchMovieCredits } from 'components/SearchMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams('movieId');
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    searchMovieCredits(movieId).then(setCredits);
  }, [movieId]);

  return (
    <div>
      {credits.length > 0 && (
        <ul>
          {credits.map(({ id, name, character, photo }) => {
            return (
              <li key={id}>
                <img src={photo} alt={name} />
                <div>
                  <p>{name}</p>
                  <p>Character: {character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cast;
