// import { SearchMovies } from './SearchMovies/SearchMovies';
// import { useState } from 'react';
import { Home } from '../pages/Home';
import { Movies } from 'pages/Movies';

export const App = () => {
  //const [loading, setLoading] = useState(false);

  fetch(`https://api.themoviedb.org/3/account/{}/rated/movies`)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  return (
    <>
      <div>dfdfdfdf</div>
      <Home />
      <Movies />
    </>
  );
};
