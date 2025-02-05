import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
const App = () => {

  useEffect(() => {
    async function accessWebcam() {      
      console.log(await navigator.storage);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const videoElement = document.getElementById('webcam') as HTMLVideoElement;;
      if (videoElement) {
        videoElement.srcObject = stream;
    }
    }

    accessWebcam();
  })
  const handleClick = () => {
    throw new Error('test');
  }

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

  setString('123');

  return (
    <div data-test-id="datatest-app" style={{display: 'flex', flexDirection: 'column'}}>
      Platform: {WEBPACK_PLATFORM}
      <button 
        style={{width: '100px'}}
        onClick={handleClick}>
        Click
      </button>
      <video style={{width: '700px'}} id="webcam" autoPlay={true}></video>
      <Outlet />
    </div>
  )
}

export default App
