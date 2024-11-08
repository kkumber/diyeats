import { ItemInterface } from "./Home";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";

interface ItemList {
    item: ItemInterface[] | undefined,
}

const SearchResult = () => {
    const {data, loading, error} = useFetch('https://api.spoonacular.com/recipes/{id}/information');
    const location = useLocation();
    const item = location.state as ItemList;

    
    return (
        <div className="searchResults">
            {item?.map(food => 
                <div className="foodContainer" key={food.id}>
                    <div className="titleContainer">
                        <title>{ food.title }</title>
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