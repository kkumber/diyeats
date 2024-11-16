import { useState, useEffect } from "react";
import Loading from "./Loading";

interface Widget {
    foodId: string | null;
    APIKEY: string
}

const NutritionWidget = ({foodId, APIKEY}: Widget) => {

    const [imageSrc, setImageSrc] = useState<string>();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchWidget = async () => {
            try {
                const response = await fetch(`https://api.spoonacular.com/food/products/${foodId}/nutritionWidget.png?apiKey=${APIKEY}`)
                if (!response.ok) {
                    throw new Error(`Error: Failed to fetch!`);
                }
                const data = await response.blob();
                const objectUrl = URL.createObjectURL(data);
                setImageSrc(objectUrl);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        }
        fetchWidget();
    }, [foodId])
    
    if (!imageSrc) {
        <Loading />
    }

    return <img src={imageSrc} alt="Nutrition Widget" />
}
 
export default NutritionWidget;