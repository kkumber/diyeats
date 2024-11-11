import { ReactEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export interface PopularIngredients {
    name: string;
    image: string;
    id: number
}

const Ingredients = () => {
    const navigate = useNavigate();

    const [ingredients, setIngredients] = useState<PopularIngredients[]>();

    
    useEffect(() => {
        setIngredients([{
            name: 'Chicken',
            image: '/images/chicken.jpg',
            id: 1
        },
        {
            name: 'Pork',
            image: '/images/pork.jpg',
            id: 2
        },
        {
            name: 'Beef',
            image: '/images/beef.jpg',
            id: 3
        },
        {
            name: 'Egg',
            image: '/images/eggs.jpg',
            id: 4
        },
        {
            name: 'Salmon',
            image: '/images/salmon.jpg',
            id: 5
        }]
    );
    }, [])

    const handleSearch = (ingredient: string) => {
        navigate(`./pages/Search?query=${encodeURIComponent(ingredient)}`);
    };

    return ( 
        <div className="ingredientsContainer">
            <div className="titleContainer">
               <span className="title">Popular Ingredients</span>
            </div>
            <div className="card">
            {
                ingredients?.map(ingredient =>
                    <div className="ingredientContainer" key={ingredient.id} onClick={() => handleSearch(ingredient.name)}>
                        <div className="nameContainer">
                            <span className="ingredientName"> {ingredient.name} </span>
                        </div>
                        <div className="imageContainer">
                            <img src={ingredient.image} alt="ingredient image" />
                        </div>
                    </div>
                )
            }
            </div>
        </div>
     );
}
 
export default Ingredients;