import React, { useState, useEffect, createContext } from 'react';

export const ResizeContext = createContext();

const ResizeContextProvider = (props) => {
    const [viewport, setViewport] = useState(window.innerWidth);

    function useWindowSize() {
      useEffect(() => {
        function updateSize() {
          setViewport(window.innerWidth);
        }      
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
      }, []);
  
      return viewport;
    }
    
    useWindowSize()

    return (
        <ResizeContext.Provider value={{ viewport }}> 
            {props.children}
        </ResizeContext.Provider>
    );
};

export default ResizeContextProvider;