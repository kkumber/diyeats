import useFetch from "../hooks/useFetch";
import RenderFoods from "../components/RenderFoods";
import { useEffect, useState } from "react";
import { ItemInterface } from "./Home";

const Explore = () => {
    const APIKEY = process.env.REACT_APP_API_KEY;
    const {data, error, loading} = useFetch(`https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}&number=20`);
    const [item, setItem] = useState<ItemInterface[]>([]);

    useEffect(() => {
        setItem(data);
    }, [data])
    return ( 
        <div className="exploreContainer">
            <RenderFoods item={item} />
        </div>
     );
}
 
export default Explore;