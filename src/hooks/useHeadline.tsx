import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const useHeadline = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [headline, setHeadline] = useState('Welcome');

    // Change headline base on location pathname
    useEffect(() => {
      switch (currentPath) {
        case '/':
          setHeadline("Welcome");
          break;
        case '/pages/Favorites':
          setHeadline('All in one place');
          break;
        case '/pages/Search':
          setHeadline('Find the recipe you like');
          break;
        case '/pages/Meal':
          setHeadline('Meal Information');
          break;
        case '/pages/Explore':
          setHeadline('Expand your taste buds');
          break;
      }
    }, [location])

    return headline;
};

export default useHeadline;