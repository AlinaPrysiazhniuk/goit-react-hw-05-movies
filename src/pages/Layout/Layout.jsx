import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import css from './layout.module.css';

const Layout = () => {
  return (
    <>
      <div className={css.layout_nav}>
        <NavLink to="/" className={css.layout_link}>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </div>

      <div className={css.layout_container}>
        <Suspense fallback={<Loader />} className>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
