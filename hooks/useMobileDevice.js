import { useState, useEffect } from 'react';

function useMobileDevice() {

  const [isMobileDevice, setIsMobileDevice] = useState(false);

  const minimunWindowSize = 891

  useEffect(() => {

    return (window.innerWidth < minimunWindowSize)? setIsMobileDevice(true) : setIsMobileDevice(false)
  }, []);

  return {
    isMobileDevice
  }
}

export default useMobileDevice
