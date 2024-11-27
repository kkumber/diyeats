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
        },
        {
            name: 'Flour',
            image: 'images/flour.jpg',
            id: 6
        },
        {
            name: 'Legumes',
            image: 'images/legumes.jpg',
            id: 7
        },
        {
            name: 'Fish',
            image: 'images/fish.jpg',
            id: 8
        },
        {
            name: 'Rice',
            image: 'images/rice.jpg',
            id: 9
        },
        {
            name: 'Potato',
            image: 'images/potato.jpg',
            id: 10
        },
        {
            name: 'Pasta',
            image: 'images/pasta.jpg',
            id: 11
        },
        {
            name: 'Milk',
            image: 'images/milk.jpg',
            id: 12
        }
    ]
    );
    }, [])

    const handleSearch = (ingredient: string) => {
        navigate(`./pages/Search?query=${encodeURIComponent(ingredient)}`);
    };

    return ( 
        // Main Container
        <div className="">
            <div className="mt-4 mb-2 sm:mt-12 sm:mb-4">
               <span className="font-montserrat font-bold text-xl sm:text-3xl">Popular Main Ingredients</span>
            </div>

         {/* Cards Container */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">

            {
                ingredients?.map(ingredient =>
                    // Card Container
                    <div className="bg-light-brown p-4 rounded-xl cursor-pointer" 
                    key={ingredient.id} onClick={() => handleSearch(ingredient.name)}>
                        {/* Top Part */}
                        <div className="w-full mb-5">
                            <img src={ingredient.image} alt="ingredient image" className="rounded-xl w-full h-44 object-cover"/>
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