import axios from 'axios';

export const SearchMovies = async (movie, page) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/account/{19d2d0f24e837c8f3ad6ea805c1086b1}/rated/movies`
  );
  return data;
};
