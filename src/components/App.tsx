import { Outlet } from 'react-router-dom';
import './App.scss';
const App = () => {

  const setString = (str: string) => {
    console.log(str);
  }

  // Tree shaking
  if (WEBPACK_PLATFORM === 'mobile') {
    return (
      <div>
        Mobile component
      </div>
    )
  }

  setString(123);

  return (
    <div>
      Hello! Platform: {WEBPACK_PLATFORM}
      <Outlet />
    </div>
  )
}

export default App
