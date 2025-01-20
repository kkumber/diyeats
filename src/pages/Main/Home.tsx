import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import Search from "../SubPages/Search"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Loading from "../../components/Loading"
import ErrorPage from "../../components/ErrorPage"
import Ingredients from "../../components/Ingredients"

export interface ItemInterface {
    id: number;
    title: string;
    image: string;
}


const Home = () => {

    return (
        <div className="my-4">
            <Ingredients />
        </div>
    )
}

export default Home;