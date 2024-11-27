import { useState, useEffect } from "react";
import useUpdateLocalStorage from "../hooks/useUpdateLocalStorage";
import useLocalStorage from "../hooks/useLocalStorage";
import RenderFoods from "../components/RenderFoods";




const Favorites = () => {
    const item = useLocalStorage('favorites');

    return ( 
    <div className="">
            <div className="mt-4 mb-2 sm:mt-12 sm:mb-4">
               <span className="font-montserrat font-bold text-xl sm:text-3xl">Favorites</span>
            </div>
        {<RenderFoods item={item} /> }
    </div> );
}
 
export default Favorites;