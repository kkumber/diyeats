import { useState, useEffect } from "react";
import useUpdateLocalStorage from "../hooks/useUpdateLocalStorage";
import useLocalStorage from "../hooks/useLocalStorage";




const Favorites = () => {
    const list = useLocalStorage('favorites');

    useEffect (() => {
        console.log(list);
    }, [list])
    return ( 
    <div className="favoritesContainer">
        <h1>Hi</h1>
    </div> );
}
 
export default Favorites;