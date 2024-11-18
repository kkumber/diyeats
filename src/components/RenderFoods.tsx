import { ItemInterface } from "../pages/Home";
import useNavigateToRecipe from "../hooks/useNavigateToRecipe";
import useFavorites from "../hooks/useFavorites";
import FavoritesButton from "./FavoritesButton";


interface Foods {
    item: ItemInterface[];
}

const RenderFoods = ({item}: Foods) => {
 
    const navigateToRecipe = useNavigateToRecipe();

  return (
    <div className="foodsList">
        {item.map(food => 
                <div className="foodContainer" key={food.id}>
                    <div className="titleContainer">
                        <h1>{ food.title }</h1>
                    </div>
                    <div className="imageContainer" onClick={() => navigateToRecipe(food.id)}>
                        <img src={food.image} alt="Food Image" />
                    </div>
                    <FavoritesButton food={food} />
                </div>
            )}
    </div>
  );
};

export default RenderFoods;