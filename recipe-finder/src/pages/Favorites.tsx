import { useState, useEffect } from "react";
import useUpdateLocalStorage from "../hooks/useUpdateLocalStorage";
import useLocalStorage from "../hooks/useLocalStorage";
import RenderFoods from "../components/RenderFoods";




const Favorites = () => {
    const item = useLocalStorage('favorites');

    return ( 
    <div className="favoritesContainer">
        <h1>Your Favorite Recipes</h1>
        {<RenderFoods item={item} /> }
    </div> );
}
 
export default Favorites;