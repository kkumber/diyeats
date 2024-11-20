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
        // Main Container
        <div className="mx-4">
            <div className="mt-4 mb-2 sm:mt-12 sm:mb-4">
               <span className="font-montserrat font-bold text-xl sm:text-3xl">Popular Ingredients</span>
            </div>


         {/* Cards Container */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {
                ingredients?.map(ingredient =>
                    // Card Container
                    <div className="bg-light-brown p-4 rounded-xl cursor-pointer" 
                    key={ingredient.id} onClick={() => handleSearch(ingredient.name)}>
                        {/* Top Part */}
                        <div className="w-full h-3/4 mb-5">
                            <img src={ingredient.image} alt="ingredient image" className="rounded-xl w-full h-full"/>
                        </div>
                        
                        {/* Bottom Part */}
                        <div className="flex justify-between items-center">
                            <div className="nameContainer">
                                <span className="font-semibold text-lg sm:text-xl"> {ingredient.name} </span>
                            </div>
                            <div className="typeContainer">
                                <span className="bg-dark-brown rounded-full px-4 py-2 text-white text-sm">Main Ingredient</span>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
     );
}
 
export default Ingredients;