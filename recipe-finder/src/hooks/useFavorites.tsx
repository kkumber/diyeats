import { ItemInterface } from "../pages/Home";
import useLocalStorage from "./useLocalStorage";
import { useEffect, useState } from "react";

const useFavorites = () => {
    const [favorites, setFavorites] = useState<ItemInterface[]>(useLocalStorage('favorites'));


    const isFavorite = (newItem: ItemInterface) => {
        const found = favorites.some(item => item.id === newItem.id);
        return found;
    }

    const addToFavorites = (newItem: ItemInterface) => {
        localStorage.setItem('favorites', JSON.stringify([...favorites, newItem]));
    }

    return {favorites, isFavorite, addToFavorites}
}

export default useFavorites;