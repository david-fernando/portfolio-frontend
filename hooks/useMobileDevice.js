import { useState, useEffect } from 'react';

function useMobileDevice() {

  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {

    return (window.innerWidth < 891)? setIsMobileDevice(true) : setIsMobileDevice(false)
  }, []);

  return {
    isMobileDevice
  }
}

export default useMobileDevice
