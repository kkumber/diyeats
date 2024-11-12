import { useState, useEffect } from "react";


// Favorites should be its own page and be put inside a navbar



const Favorites = () => {
    const [favorites, setFavorites] = useState();
    useEffect(() => {
        const favoriteList = localStorage.getItem('favorites');
        if (favoriteList) {
            setFavorites(JSON.parse(favoriteList));
        }
        console.log(favoriteList);
    }, [])

    return ( 
    <div className="favoritesContainer">
        <h1>Hi</h1>
    </div> );
}
 
export default Favorites;