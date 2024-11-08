import { ItemInterface } from "./Home";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface ItemList {
    item: ItemInterface[],
}

const SearchResult = () => {
    const APIKEY = 'ae98638f897c4eb79d6f212f141affb8';
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query') || '';
    const number = queryParams.get('number') || 2;

    const {data: itemData, loading, error: dataError} = useFetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&query=${query}&number=${number}`);
    const [item, setItem] = useState<ItemInterface[]>([]);

    useEffect(() => {
        if (itemData && itemData.results) {
            setItem(itemData.results);
        }
    }, [itemData]);

    return (
        <div className="searchResults">
            {item.map(food => 
                <div className="foodContainer" key={food.id}>
                    <div className="titleContainer">
                        <title><h1>{ food.title }</h1></title>
                    </div>
                    <div className="imageContainer">
                        <img src={food.image} alt="Food Image" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchResult;