import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const useHeadline = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [headline, setHeadline] = useState('Welcome');

    useEffect(() => {
      switch (currentPath) {
        case '/':
          setHeadline("Welcome");
          break;
        case '/pages/Favorites':
          setHeadline('Your favorite foods all in one place');
          break;
        case '/pages/Search':
          setHeadline('Find the recipe you like');
          break;
        case '/pages/Meal':
          setHeadline('Meal Information');
      }
    }, [location])

    return headline;
};

export default useHeadline;