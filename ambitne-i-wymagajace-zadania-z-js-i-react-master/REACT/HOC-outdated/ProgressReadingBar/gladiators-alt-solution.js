// Rozwiązanie opracował Gladiator JS - gh: EmilMalanczak
// rozwiązanie nie testowane pod większe ilości danych

import React, { useCallback, useState, useRef } from 'react'

const withProgressReadingBar = (WrappedComponent) => {

  const HocComponent = (props) => {
    const [progress, setProgress] = useState(0);
    const ref = useRef(null);

    const handleProgressBar = useCallback(() => {
      if(ref.current){
        const {current} = ref
        const scrollTotal = window.pageYOffset;
        const elementTop =  current.offsetTop;
        const elementBottom = elementTop + current.offsetHeight;
  
        if (scrollTotal > elementTop && scrollTotal < elementBottom) {
          const updatedProgress =
            ((scrollTotal - boxStart) / ref.current.offsetHeight) * 100;
          setProgress(Math.round(updatedProgress));
        } else {
          if(progress !== 0){
            setProgress(0);
          }
        }
      }
     
    },[]);

    useEffect(() => {
      window.addEventListener("scroll", handleProgressBar);
      return () => window.removeEventListener("scroll", handleProgressBar);
    }, []);

    return (
      <BoxWithBar ref={ref}>
        <ProgressBar progress={progress} />
        <WrappedComponent />
      </BoxWithBar>
    );
  };

  return HocComponent;
};

export default withProgressReadingBar;