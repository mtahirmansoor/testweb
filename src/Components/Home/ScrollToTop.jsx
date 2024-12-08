import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component will scroll the page to the top every time the route changes
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when location changes
  }, [location]);

  return null; // This component does not need to render anything
};

export default ScrollToTop;
