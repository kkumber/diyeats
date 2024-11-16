import { ItemInterface } from "../pages/Home";

interface Foods {
    item: ItemInterface[];
    handleRecipe: (id: number) => void;
    handleFavorites: (newItem: ItemInterface) => void;
}

const RenderFoods = ({item, handleRecipe, handleFavorites}: Foods) => {
  return (
    <div className="foodsList">
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
};

export default RenderFoods;