import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>Homepage</h2>,
  },
  {
    path: '/about',
    element: <h2>About</h2>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
