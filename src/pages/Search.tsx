import { ItemInterface } from "./Home";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading"
import ErrorPage from "../components/ErrorPage"
import RenderFoods from "../components/RenderFoods";


const Search = () => {

    const APIKEY = 'ae98638f897c4eb79d6f212f141affb8';
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query') || '';
    const number = queryParams.get('number') || 1;

    const {data: itemData, loading, error} = useFetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&query=${query}&number=${number}`);
    const [item, setItem] = useState<ItemInterface[]>([]);


    useEffect(() => {
        if (itemData && itemData.results) {
            setItem(itemData.results);
        }
    }, [itemData]);




    return (
        // Results Container
        <div className="mx-4">
            {loading && <Loading />}
            {error && <ErrorPage error={error} />}
            <div className="mt-4 mb-2 sm:mt-12 sm:mb-4">
               <span className="font-montserrat font-bold text-xl sm:text-3xl">Results</span>
            </div>
            {item && <RenderFoods item={item} />}
        </div>
    );
}

export default Search;