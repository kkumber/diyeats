import { ItemInterface } from "../pages/Home";
import useNavigateToRecipe from "../hooks/useNavigateToRecipe";
import useFavorites from "../hooks/useFavorites";
import FavoritesButton from "./FavoritesButton";
import ShareButton from "./ShareButton";
import { useEffect, useState } from "react";


interface Foods {
    item: ItemInterface[];
}

const RenderFoods = ({item: props}: Foods) => {
    const [item, setItem] = useState<ItemInterface[]>(props);
    const {favorites, isFavorite, addToFavorites, removeToFavorites} = useFavorites();

    const handleFavorites = (newItem : ItemInterface) => {
        if (!isFavorite(newItem)) {
            addToFavorites(newItem);
            alert('Added to Favorites!');
        } else {
            removeToFavorites(newItem);
            alert("Removed from Favorites!");
        }
    }

    useEffect(() => {
        setItem(props);
    }, [props])
    const navigateToRecipe = useNavigateToRecipe();

  return (
    // Foods Container
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto my-4">
        {
        item.map(food => 
        // Card Container
                <div className="bg-light-brown p-4 rounded-xl cursor-pointer" 
                key={food.id}>
                    {/* Top Content */}
                    <div className="w-full mb-5" onClick={() => navigateToRecipe(food.id)}>
                        <img src={food.image} alt="Food Image" className="rounded-xl w-full h-full" />
                    </div>

                    {/* Bottom Content */}
                    <div className="flex justify-between items-start gap-x-4 sm:gap-x-8">
                        <div className="">
                            <h1 className="font-semibold text-lg sm:text-xl">{ food.title }</h1>
                        </div>
                        <div className="flex gap-x-2">
                            <ShareButton foodId={food.id} />
                            <FavoritesButton food={food} handleFavorites={handleFavorites} isFavorite={isFavorite} />
                        </div>
                    </div>
                </div>
            )}
    </div>
  );
};

export default RenderFoods;