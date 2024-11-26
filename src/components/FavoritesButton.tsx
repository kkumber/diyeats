import { useState } from "react";
import handleFavorites from "../hooks/useFavorites";
import { ItemInterface } from "../pages/Home";
import useFavorites from "../hooks/useFavorites";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as RegularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Food {
    food: ItemInterface
}

const FavoritesButton = ({food}: Food) => {
    const {favorites, isFavorite, addToFavorites, removeToFavorites} = useFavorites();

    const handleFavorites = (newItem : ItemInterface) => {
        if (!isFavorite(newItem)) {
            addToFavorites(newItem);
            alert('Added to Favorites!');
        } else {
            removeToFavorites(newItem);
            alert("Removed from Favorites!");
        }
    }

    return ( 
        <>
        <button className="cursor-pointer" onClick={() => handleFavorites(food)}>
            {isFavorite(food) ? <FontAwesomeIcon icon={SolidHeart} style={{color: "#ff0000",}} size="2xl" className="hover:scale-125 transition-all"/>
            : 
            <FontAwesomeIcon icon={RegularHeart} size="2xl" className="hover:text-red-700 hover:scale-125 transition-all"/>}
        </button>
        </>
     );
}
 
export default FavoritesButton;