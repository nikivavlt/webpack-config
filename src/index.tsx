import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about',
        element: <div>About</div>,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
