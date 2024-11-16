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
        const updatedList = [...favorites, newItem];
        setFavorites(updatedList);
        localStorage.setItem('favorites', JSON.stringify(updatedList));
    }

    const removeToFavorites = (newItem: ItemInterface) => {
        const updatedList = favorites.filter(item => item.id !== newItem.id);
        setFavorites(updatedList);
        localStorage.setItem('favorites', JSON.stringify(updatedList));
    }

    return {favorites, isFavorite, addToFavorites, removeToFavorites}
}

export default useFavorites;