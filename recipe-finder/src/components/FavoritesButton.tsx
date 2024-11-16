import { useState } from "react";
import handleFavorites from "../hooks/useFavorites";
import { ItemInterface } from "../pages/Home";
import useFavorites from "../hooks/useFavorites";

interface Food {
    food: ItemInterface
}

const FavoritesButton = ({food}: Food) => {
    const {favorites, isFavorite, addToFavorites} = useFavorites();

    const handleFavorites = (newItem : ItemInterface) => {
        if (isFavorite(newItem)) {
            addToFavorites(newItem);
            alert('Added to Favorites!');
        } else {
            alert("Removed from Favorites!");
        }
    }

    return ( 
        <>
        <button className="addBtn" onClick={() => handleFavorites(food)}>
            {isFavorite(food) ? <span>Remove From Favorites</span> : <span>Add to Favorites</span>
}
        </button>
        </>
     );
}
 
export default FavoritesButton;