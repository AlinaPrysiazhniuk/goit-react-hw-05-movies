import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </div>

      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
