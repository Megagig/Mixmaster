import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      li<h2>Home layout</h2>
      <Link to="/about">About page</Link>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
