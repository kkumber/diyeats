import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import ErrorPage from "../components/ErrorPage";


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
    dishTypes: string[];
    id: number;
    extendedIngredients: Ingredients[];
    analyzedInstructions: AnalyzedInstructions[];
    summary: string
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
                        {mealRecipe?.dishTypes.map((type, index) => 
                            <p className="types" key={index}>
                                <span className="info">{ type }</span>
                            </p>
                        )}
                    </div>
                    <div className="infoContainer">
                        <span className="info">Ready in {mealRecipe?.readyInMinutes} minutes</span>
                    </div>
                    <div className="infoContainer">
                        <span className="info">{mealRecipe?.servings} Servings</span>
                    </div>
                </div>
                
                <div className="mealSummaryContainer">
                    {mealRecipe && <span className="mealSummary" dangerouslySetInnerHTML={{__html: mealRecipe.summary}}></span>}
                </div>

                {/* <div className="nutritionFactContainer">
                    <img src={`https://api.spoonacular.com/food/products/${foodId}/nutritionWidget.png`} alt="Nutrition Facts" />
                </div> */}

                <div className="ingredientListContainer">
                    {mealRecipe?.extendedIngredients.map(ingredient => 
                        <div className="ingredientContainer" key={ingredient.id}>
                            <img src={`https://spoonacular.com/cdn/ingredients_250x250/${ingredient.image}`} alt="ingredient" className="ingredientImageContainer" />
                            <p className="ingredientName">{ingredient.original}</p>
                        </div>
                    )}
                </div>

                <div className="instructionsContainer">
                    <h2>Instructions</h2>
                    {instructions?.map((step, index) => 
                        <ul className="stepsContainer" key={index}>
                            <li>{index + 1}. {step.step}</li>
                        </ul>
                    )}
                    
                </div>
        </div>
     );
}
 
export default Meal;

