import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import SearchResult from "./SearchResult"
import { Link } from "react-router-dom"


export interface ItemInterface {
    id: number,
    title: string,
    image: string
}

const Home = () => {
    const APIKEY = 'ae98638f897c4eb79d6f212f141affb8';
    const [query, setQuery] = useState<string>('');
    const [number, setNumber] = useState<number>(2);


    const {data: itemData, loading, error: dataError} = useFetch(`shttps://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&query=${query}&number=${number}`);
    const [item, setItem] = useState<ItemInterface[]>();
    const [isLoading, setIsLoading] = useState<boolean>(loading);
    const [error, setError] = useState<string | null>(dataError);
    

    const handleQuery = (e: React.FormEvent<HTMLFormElement>): void => {
        e?.preventDefault();

        setQuery('');
    }

    return (
        <div className="home">'
            <div className="form-container">
            <form onSubmit={(event) => handleQuery(event)}>
                <input type="text" onChange={(e) => setQuery(e.target.value)} 
                value={query}
                placeholder="Search for a recipe..." />
                <button className="searchBtn">Search</button>
            </form>
            </div>

            <Link to={{pathname: "/SearchResult", state: item} as any} />
        </div>
    )
}

export default Home;