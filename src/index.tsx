import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '@/components/App';
import { About } from '@/pages/about';
import { Suspense } from 'react';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about',
        element: <Suspense fallback={<div>Loading...</div>}><About /></Suspense>,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
