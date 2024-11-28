import { useState } from "react";
import handleFavorites from "../hooks/useFavorites";
import { ItemInterface } from "../pages/Home";
import useFavorites from "../hooks/useFavorites";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as RegularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Food {
    food: ItemInterface,
    handleFavorites: (newItem: ItemInterface) => void,
    isFavorite: (newItem: ItemInterface) => boolean

}

const FavoritesButton = ({food, handleFavorites, isFavorite}: Food) => {
    return ( 
        <>
        <button className="cursor-pointer" onClick={() => handleFavorites(food)}>
            {isFavorite(food) ? <FontAwesomeIcon icon={SolidHeart} style={{color: "#ff0000",}} size="xl" className="hover:scale-125 transition-all"/>
            : 
            <FontAwesomeIcon icon={RegularHeart} size="xl" className="hover:text-red-700 hover:scale-125 transition-all"/>}
        </button>
        </>
     );
}
 
export default FavoritesButton;