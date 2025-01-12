'use client';
import React, { useState, useEffect } from 'react';


const header = () => {
  // State variables to manage scroll behavior
  const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);

  const [top, setTop] = useState(0);
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        setTop(0); // Show navbar
      } else {
        setTop(-50); // Hide navbar
      }
      setPrevScrollpos(currentScrollPos);
    };
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollpos]);
  
  // Styles for the navbar and links
  const navbarStyle = {
    backgroundColor: '#333',
    position: 'fixed',
    top: `${top}px`,
    width: '100%',
    display: 'block',
    transition: 'top 0.3s',
  };
  const linkStyle = {
    float: 'right',
    display: 'block',
    color: '#f2f2f2',
    textAlign: 'center',
    padding: '15px',
    textDecoration: 'none',
    fontSize: '17px',
  };
  const titleStyle = {
    float: 'left',
    display: 'block',
    color: '#f2f2f2',
    textAlign: 'center',
    padding: '15px',
    textDecoration: 'none',
    fontSize: '17px',
  };
  return (
    <div className='-z-20'>
      <div id="navbar" style={{backgroundColor: '#333',
                  position: 'fixed',
                  top: `${top}px`,
                  width: '100%',
                  display: 'block',
                  transition: 'top 0.3s',
                  zIndex: 100}}>
        <div className="align-end">
        <a href="#Connect" style={{    float: 'right',
    display: 'block',
    color: '#f2f2f2',
    textAlign: 'center',
    padding: '15px',
    textDecoration: 'none',
    fontSize: '17px',}}>
          Contact Me 😃
        </a>
        <a href="#About" style={{    float: 'right',
    display: 'block',
    color: '#f2f2f2',
    textAlign: 'center',
    padding: '15px',
    textDecoration: 'none',
    fontSize: '17px',}}>
          About Me
        </a>
        <a href="#Projects" style={{    float: 'right',
    display: 'block',
    color: '#f2f2f2',
    textAlign: 'center',
    padding: '15px',
    textDecoration: 'none',
    fontSize: '17px',}}>
          Projects
        </a>
        <a href="#Home" style={{    float: 'left',
    display: 'block',
    color: '#f2f2f2',
    textAlign: 'center',
    padding: '15px',
    textDecoration: 'none',
    fontSize: '17px',}}>
          Mateo Yajure
        </a>
        
        </div>
      </div>
      <div
        style={{
          padding: '15px 15px 15px',
          fontSize: '30px',
          marginTop: '30px',
        }}
      >
        {/* ... Rest of your content ... */}
      </div>
    </div>
  );
};
export default header;
