import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const header = document.getElementById('header');
    if (!header) return;

    const headerPosition = header.offsetTop;

    const scrollHandler = () => {
      const scroll = window.scrollY; // ✅ moved here!
      setIsScroll(scroll > headerPosition);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <header
      id="header"
      className={`xxs:w-screen xl:w-6xl mx-auto transition-all duration-300 z-50 ${
        isScroll ? 'fixed top-0 bg-white shadow-md' : ''
      }`}
    >
      <Nav />
    </header>
  );
};

export default Header;
