import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useEffect, useRef } from "react";

const Layout = () => {
  const footerRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (footerRef.current) {
      const scrollToTopButton = footerRef.current.querySelector('.scrollToTopButton');
      scrollToTopButton.addEventListener('click', scrollToTop);
    }

    return () => {
      if (footerRef.current) {
        const scrollToTopButton = footerRef.current.querySelector('.scrollToTopButton');
        scrollToTopButton.removeEventListener('click', scrollToTop);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer footerRef={footerRef} />
    </>
  );
};

export default Layout;
