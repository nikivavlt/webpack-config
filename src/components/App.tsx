import { Outlet } from 'react-router-dom';
import './App.scss';
const App = () => {
  return (
    <div>
      Hello!
      <Outlet />
    </div>
  )
}

export default App
