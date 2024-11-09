import useFetch from "../hooks/useFetch";

interface FoodID {
    id: number
}


// {id}: FoodID
const Meal = () => {
    const {data, loading, error} = useFetch(`https://api.spoonacular.com/recipes/{id}/information`);

    return ( 
        <div className="foodRecipeContainer">

        </div>
     );
}
 
export default Meal;