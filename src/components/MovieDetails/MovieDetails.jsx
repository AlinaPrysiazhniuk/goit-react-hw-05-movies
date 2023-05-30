import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { searchMovieDetails } from 'components/SearchMovies/SearchMovies';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/movie';

  const { poster, title, releaseyear, userScore, overview, genres } =
    movie ?? {};

  useEffect(() => {
    searchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const backToMovies = () => {
    navigate(backLinkHref);
  };

  return (
    <div>
      <button type="button" onClick={backToMovies}>
        Back to movies
      </button>
      {movie && (
        <div>
          <div>
            <img src={poster} alt={title} />
            <div>
              <h3>
                {title} ({releaseyear})
              </h3>
              <p>User Score: {userScore}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(({ name }) => name).join(' ')}</p>
            </div>
          </div>

          <p>Additional information</p>
        </div>
      )}
    </div>
  );
};
