import useFetch from "../hooks/useFetch";

const Explore = () => {
    const {data, error, loading} = useFetch(`https://api.spoonacular.com/recipes/random?`)

    return ( 
        <div className="exploreContainer">
            
        </div>
     );
}
 
export default Explore;