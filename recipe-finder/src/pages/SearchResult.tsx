import { ItemInterface } from "./Home";
import { Link } from "react-router-dom";

interface ItemList {
    item: ItemInterface[],
}

const SearchResult = ({ item }: ItemList) => {
    return (
        <div className="searchResults">
            {item.map(food => 
                <div className="foodContainer" key={food.id}>
                    <title>{ food.title }</title>
                    <img src={food.image} alt="Food Image" />
                </div>

            )}
        </div>
    );
}

export default SearchResult;