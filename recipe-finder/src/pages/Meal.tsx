import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { Console } from "console";


interface Ingredients {
    id: number;
    image: string;
    original: string;
}

interface MealData {
    title: string;
    servings: number;
    readyInMinutes: number;
    instructions: string;
    image: string;
    dishTypes: [];
    id: number;
    extendedIngredients: Ingredients[];
    analyzedInstructions: AnalyzedInstructions[];
}

interface AnalyzedInstructions {
    name: string;
    steps: Steps[];
};

interface Steps {
    step: string
}


const Meal = () => {
    const APIKEY = 'ae98638f897c4eb79d6f212f141affb8';
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const foodId = queryParams.get('id');
    const {data, loading, error} = useFetch(`https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${APIKEY}&includeNutrition=false`);
    const [mealRecipe, setMealRecipe] = useState<MealData>();
    const [instructions, setInstructions] = useState<Steps[]>();

    useEffect(() => {
        if (data) {
        const { ...allElements }: MealData = data;
            if (allElements) {
                setMealRecipe(allElements);
            }
        console.log(data);
        }
    }, [data])

    useEffect(() => {
        if (mealRecipe?.analyzedInstructions) {
            setInstructions(mealRecipe.analyzedInstructions[0].steps)
        }
    }, [mealRecipe])

    return ( 
        <div className="foodRecipeContainer">

                <div className="mealContainer">
                    <div className="title">
                        <span>{ mealRecipe?.title }</span>
                    </div>
                    <div className="mealImageContainer">
                        <img src={mealRecipe?.image} alt="" />
                    </div>
                </div>
                <div className="mealInfoContainer">
                    <div className="infoContainer">
                        {mealRecipe?.dishTypes.map(type => 
                            <p className="types">
                                <span className="info">{ type }</span>
                            </p>
                        )}
                    </div>
                    <div className="infoContainer">
                        <span className="info">{mealRecipe?.readyInMinutes}</span>
                    </div>
                    <div className="infoContainer">
                        <span className="info">{mealRecipe?.servings}</span>
                    </div>
                </div>

                <div className="ingredientListContainer">
                    {mealRecipe?.extendedIngredients.map(ingredient => 
                        <div className="ingredientContainer" key={ingredient.id}>
                            <img src={ingredient.image} alt="" className="ingredientImageContainer" />
                            <p className="ingredientName">{ingredient.original}</p>
                        </div>
                    )}
                </div>

                <div className="instructionsContainer">
                    <h2>Instructions</h2>
                    {instructions?.map((step, index) => 
                        <ul className="stepsContainer">
                            <li>{index + 1}. {step.step}</li>
                        </ul>
                    )}
                </div>
        </div>
     );
}
 
export default Meal;

