import { searchMovieReviews } from 'components/SearchMovies/SearchMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams(movieId);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    searchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
