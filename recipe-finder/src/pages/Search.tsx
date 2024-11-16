import { ItemInterface } from "./Home";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading"
import ErrorPage from "../components/ErrorPage"
import { useNavigate } from "react-router-dom";
import Favorites from "./Favorites";
import useLocalStorage from "../hooks/useLocalStorage";
import RenderFoods from "../components/RenderFoods";
import handleRecipe from "../hooks/useNavigateToRecipe";


const Search = () => {

    // MIGHT NEED TO CUSTOM HOOK THIS BICH
    const APIKEY = 'ae98638f897c4eb79d6f212f141affb8';
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query') || '';
    const number = queryParams.get('number') || 1;
    // 
    const {data: itemData, loading, error} = useFetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&query=${query}&number=${number}`);
    const [item, setItem] = useState<ItemInterface[]>([]);
    const prevData = useLocalStorage('favorites');
    const [favoriteList, setFavoriteList] = useState<ItemInterface[]>(prevData);



    useEffect(() => {
        if (itemData && itemData.results) {
            setItem(itemData.results);
        }
    }, [itemData]);




    return (
        <div className="searchResults">
            {loading && <Loading />}
            {error && <ErrorPage error={error} />}
            {item && <RenderFoods item={item} />}
        </div>
    );
}

export default Search;