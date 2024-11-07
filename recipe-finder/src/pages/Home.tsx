import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"

const Home = () => {
    const {data: recipe, loading, error} = useFetch('www.themealdb.com/api/json/v1/1/search.php?s=Chicken');
    console.log(recipe);




    return (
        <div className="home">

        </div>
    )
}

export default Home;