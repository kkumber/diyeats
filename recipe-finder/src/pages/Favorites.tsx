import { useState, useEffect } from "react";
import useUpdateLocalStorage from "../hooks/useUpdateLocalStorage";
import useLocalStorage from "../hooks/useLocalStorage";
import RenderFoods from "../components/RenderFoods";



const Favorites = () => {
    const list = useLocalStorage('favorites');

    useEffect (() => {
        console.log(list);
    }, [list])
    return ( 
    <div className="favoritesContainer">
        <h1>Your Favorite Recipes</h1>
        
    </div> );
}
 
export default Favorites;