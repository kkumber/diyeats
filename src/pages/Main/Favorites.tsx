import { useState, useEffect } from "react";
import useFavorites from "../../hooks/useFavorites";
import RenderFoods from "../../components/Renders/RenderFoods";
import { ItemInterface } from "./Home";
import Loading from "../../components/Loading";
import ErrorPage from "../../components/ErrorPage";


const Favorites = () => {
    const {data, isLoading, err, getFavorites} = useFavorites();
    const [item, setItem] = useState<ItemInterface[]>([]);

    useEffect(() => {
        if (data) {
            setItem(data);
        }
    }, [data]);

    useEffect(() => {
        getFavorites();
    }, [])


    return ( 
    <div className="">
            {isLoading && <Loading />}
            {err && <ErrorPage error={err} />}
            <div className="mt-4 mb-2 sm:mt-12 sm:mb-4">
               <span className="font-montserrat font-bold text-xl sm:text-3xl">Favorites</span>
            </div>
            {item.length === 0 ? (
            <p>No favorites yet</p>
                ) : (
            <RenderFoods item={item} />
            )}
    </div> );
}
 
export default Favorites;