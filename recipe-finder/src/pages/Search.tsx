import { ItemInterface } from "./Home";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading"
import ErrorPage from "../components/ErrorPage"
import { useNavigate } from "react-router-dom";
import Favorites from "./Favorites";


interface ItemList {
    item: ItemInterface[],
}

const Search = () => {
    const APIKEY = 'ae98638f897c4eb79d6f212f141affb8';
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query') || '';
    const number = queryParams.get('number') || 1;
    const navigate = useNavigate();
    const {data: itemData, loading, error} = useFetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&query=${query}&number=${number}`);
    const [item, setItem] = useState<ItemInterface[]>([]);
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [favoriteList, setFavoriteList] = useState<[]>();

    useEffect(() => {
        if (itemData && itemData.results) {
            setItem(itemData.results);
        }
        console.log(itemData);
    }, [itemData]);

    const handleRecipe = (id: number) => {
        navigate(`/pages/Meal?id=${id}`)
    }

    const handleFavorites = () => {
        setIsFavorite(true);
    }

    useEffect(() => {
        if (isFavorite) {
            // possibly get by ID
            const updatedList = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&query=${query}&number=1`
        }
    }, [isFavorite])

    return (
        <div className="searchResults">
            {loading && <Loading />}
            {error && <ErrorPage error={error} />}

            {item.map(food => 
                <div className="foodContainer" key={food.id} onClick={() => handleRecipe(food.id)}>
                    <div className="titleContainer">
                        <h1>{ food.title }</h1>
                    </div>
                    <div className="imageContainer">
                        <img src={food.image} alt="Food Image" />
                    </div>
                    <button className="addBtn" onClick={() => handleFavorites}>Add to favorites</button>
                </div>
            )}
        </div>
    );
}

export default Search;