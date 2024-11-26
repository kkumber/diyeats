import useFetch from "../hooks/useFetch";
import RenderFoods from "../components/RenderFoods";
import { useEffect, useState } from "react";
import { ItemInterface } from "./Home";
import Loading from "../components/Loading";
import ErrorPage from "../components/ErrorPage";

const Explore = () => {
    const APIKEY = process.env.REACT_APP_API_KEY;
    const {data, loading, error} = useFetch(`https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}&number=10`);
    const [item, setItem] = useState<ItemInterface[]>([]);

    useEffect(() => {
        if (data && data.recipes) {
            setItem(data.recipes);
        }
    }, [data])
    return ( 
        <div className="exploreContainer mx-4">
            <div className="mt-4 mb-2 sm:mt-12 sm:mb-4">
               <span className="font-montserrat font-bold text-xl sm:text-3xl">Explore</span>
            </div>
            {loading && <Loading />}
            {error && <ErrorPage error={error} />}
            <RenderFoods item={item} />
        </div>
     );
}
 
export default Explore;