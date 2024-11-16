import { useNavigate } from "react-router-dom";

const handleRecipe = (id: number) => {
    const navigate = useNavigate();
    navigate(`/pages/Meal?id=${id}`);
}

export default handleRecipe;