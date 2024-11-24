import { ItemInterface } from "./Home";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import RenderFoods from "../components/RenderFoods";
import Loading from "../components/Loading";
import ErrorPage from "../components/ErrorPage";


const Search = () => {

    const APIKEY = process.env.REACT_APP_API_KEY;
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query') || '';
    const number = queryParams.get('number') || 3;

    const {data, loading, error} = useFetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&query=${query}&number=${number}`);
    const [item, setItem] = useState<ItemInterface[]>([]);


    useEffect(() => {
        if (data && data.results) {
            setItem(data.results);
        }
    }, [data]);




    return (
        // Results Container
        <div className="mx-4">
            <div className="mt-4 mb-2 sm:mt-12 sm:mb-4">
               <span className="font-montserrat font-bold text-xl sm:text-3xl">Results</span>
            </div>
            {loading && <Loading />}
            {error && <ErrorPage error={error} />}
            {item && <RenderFoods item={item} />}
        </div>
    );
}

export default Search;