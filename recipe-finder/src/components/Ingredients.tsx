import { ReactEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export interface PopularIngredients {
    name: string;
    image: string;
}

const Ingredients = () => {
    const navigate = useNavigate();

    const [ingredients, setIngredients] = useState<PopularIngredients[]>();

    
    useEffect(() => {
        setIngredients([{
            name: 'Chicken',
            image: '/images/chicken.jpg'
        },
        {
            name: 'Pork',
            image: '/images/pork.jpg'
        },
        {
            name: 'Beef',
            image: '/images/beef.jpg'
        },
        {
            name: 'Egg',
            image: '/images/eggs.jpg'
        },
        {
            name: 'Salmon',
            image: '/images/salmon.jpg'
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
                    <div className="ingredientContainer" onClick={() => handleSearch(ingredient.name)}>
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