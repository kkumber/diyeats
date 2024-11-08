import useFetch from "../hooks/useFetch";

const FoodRecipe = ({id}: number) => {
    const {data, loading, error} = useFetch(`https://api.spoonacular.com/recipes/${id}/information`);

    return ( 
        <div className="foodRecipeContainer">

        </div>
     );
}
 
export default FoodRecipe;