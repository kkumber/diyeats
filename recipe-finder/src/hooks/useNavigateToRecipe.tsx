import { useNavigate } from "react-router-dom";

const useNavigateToRecipe = () => {
    const navigate = useNavigate();

    return (id: number) => {
    navigate(`/pages/Meal?id=${id}`);
    }
}

export default useNavigateToRecipe;