import { ItemInterface } from "./Home";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading"
import ErrorPage from "../components/ErrorPage"
import { useNavigate } from "react-router-dom";
import Favorites from "./Favorites";
import useLocalStorage from "../hooks/useLocalStorage";
import useUpdateLocalStorage from "../hooks/useUpdateLocalStorage";



const Search = () => {

    // MIGHT NEED TO CUSTOM HOOK THIS BICH
    const APIKEY = 'ae98638f897c4eb79d6f212f141affb8';
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query') || '';
    const number = queryParams.get('number') || 1;
    const navigate = useNavigate();
    // 
    const {data: itemData, loading, error} = useFetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&query=${query}&number=${number}`);
    const [item, setItem] = useState<ItemInterface[]>([]);
    const [favoriteList, setFavoriteList] = useState<ItemInterface>({id: 94353452345, title: 'placeholder', image: '/images/placeholder'});
    const {list} = useUpdateLocalStorage('favorites', favoriteList);


    useEffect(() => {
        if (itemData && itemData.results) {
            setItem(itemData.results);
        }
    }, [itemData]);

    const handleRecipe = (id: number) => {
        navigate(`/pages/Meal?id=${id}`)
    }

    const handleFavorites = (newItem: ItemInterface) => {
        setFavoriteList(newItem);
        localStorage.setItem('favorites', JSON.stringify(favoriteList));
        console.log(favoriteList);
    }

    return (
        <div className="searchResults">
            {loading && <Loading />}
            {error && <ErrorPage error={error} />}

            {item.map(food => 
                <div className="foodContainer" key={food.id}>
                    <div className="titleContainer">
                        <h1>{ food.title }</h1>
                    </div>
                    <div className="imageContainer" onClick={() => handleRecipe(food.id)}>
                        <img src={food.image} alt="Food Image" />
                    </div>
                    <button className="addBtn" onClick={() => handleFavorites(food)}>Add to favorites</button>
                </div>
            )}
        </div>
    );
}

export default Search;