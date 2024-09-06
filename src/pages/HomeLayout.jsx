import React from 'react';
import { Link } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      li<h2>Home layout</h2>
      <Link to="/about">About page</Link>
    </div>
  );
};

export default HomeLayout;
