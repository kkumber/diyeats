import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"

const Home = () => {
    const APIKEY = 'ae98638f897c4eb79d6f212f141affb8';
    const {data: recipe, loading, error} = useFetch("https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2");
    console.log(recipe);



    return (
        <div className="home">

        </div>
    )
}

export default Home;