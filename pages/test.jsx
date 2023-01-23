import React,{useState,useEffect} from 'react'

const test = () => {
    useEffect(() => {
        const handleScreenSize = () => {
          if (window.innerWidth >= 768) {
            console.log(window.innerWidth)
          }
        };
        handleScreenSize();
        window.addEventListener('resize', handleScreenSize);
        return () => window.removeEventListener('resize', handleScreenSize);
      }, []);
    return <div>My Component</div>;
  }

export default test
