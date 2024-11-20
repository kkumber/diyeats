import { useNavigate } from "react-router-dom";

const useNavigateToRecipe = () => {
    const navigate = useNavigate();

    return (id: number) => {
    navigate(`localhost:3000/pages/Meal?id=${id}`);
    }
}

export default useNavigateToRecipe;