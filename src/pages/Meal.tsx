import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import NutritionWidget from "../components/NutritionWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faStopwatch, faUtensils } from "@fortawesome/free-solid-svg-icons";
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
    const APIKEY = process.env.REACT_APP_API_KEY;
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
        <div className="parentContainer">
        {loading && <Loading />}
        {error && <ErrorPage error={error} />}

        <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side */}
            <div className="leftSide">
                <div className="mealContainer">
                    {/* Title */}
                        <div className="my-4">
                            <span className="text-2xl sm:text-4xl font-montserrat font-bold">{ mealRecipe?.title }</span>
                        </div>

                        {/* Meal Summary */}
                        <div className="my-4">
                            {mealRecipe && <span className="mealSummary" dangerouslySetInnerHTML={{__html: mealRecipe.summary}}></span>}
                        </div>

                        {/* Meal Image */}
                        <div className="bg-light-brown p-4 rounded-xl">
                            <img src={mealRecipe?.image} alt="Meal Image" className="w-full rounded-lg" />
                        </div>
                    </div>

                {/* Meal Infos */}
                <div className="mealInfoContainer my-8">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex items-center justify-start gap-x-2">
                        <div className="w-4 h-4 rounded-full bg-light-brown p-4 flex items-center justify-center">
                                <FontAwesomeIcon icon={faStopwatch} />
                            </div>
                            <span className="info">Ready in {mealRecipe?.readyInMinutes} minutes</span>
                        </div>
                        <div className="flex items-center justify-start gap-x-2">
                        <div className="w-4 h-4 rounded-full bg-light-brown p-4 flex items-center justify-center">
                                <FontAwesomeIcon icon={faUtensils} />
                            </div>
                            <span className="info">{mealRecipe?.servings} Servings</span>
                        </div>
                        <div className="flex items-center justify-start gap-x-2">
                            <div className="w-4 h-4 rounded-full bg-light-brown p-4 flex items-center justify-center">
                                <FontAwesomeIcon icon={faBowlFood} />
                            </div>
                            {mealRecipe?.dishTypes.map((type, index) => 
                                <p className="types" key={index}>
                                    <span className="info">{ type }</span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                
                {/* Nutrition Fact */}
                <div className="my-8 grid gap-y-4">
                    <h1 className="font-montserrat text-center text-2xl sm:text-4xl font-bold">Nutrition Facts</h1>
                    <NutritionWidget foodId={foodId} APIKEY={APIKEY} />
                </div> 
                
            </div>
                
            {/* Right Side */}
            <div className="">
                <div className="my-4 bg-dark-brown px-4 py-2 text-center rounded-xl">
                    <h1 className="font-montserrat text-2xl sm:text-4xl font-bold">Ingredients</h1>
                </div>
                {/* Ingredients List */}
                <div className="ingredientListContainer gap-4 grid md:grid-cols-2">
                        {mealRecipe?.extendedIngredients.map(ingredient => 
                            <div className="bg-light-brown p-4 rounded-xl justify-center items-center" key={ingredient.id}>
                                <div className="w-full mb-5 md:h-32 lg:h-52">
                                    <img src={`https://spoonacular.com/cdn/ingredients_250x250/${ingredient.image}`} alt="ingredient" 
                                    className="rounded-xl w-full h-full" />
                                </div>
                                <div className="flex justify-center text-center">
                                    <p className="bg-dark-brown rounded-full px-4 py-2 text-white text-sm">{ingredient.original}</p>
                                </div>
                            </div>
                        )}
                    </div>
            </div>
         </div>
                {/* Instructions */}
                <div className="my-8">
                    <div className="my-4">
                        <h1 className="font-montserrat text-2xl sm:text-4xl font-bold">Instructions</h1>
                    </div>
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

