import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const APIKEY = 'ae98638f897c4eb79d6f212f141affb8';
    const [query, setQuery] = useState<string>('');
    const [number, setNumber] = useState<number>(1);
    const navigate = useNavigate();

    const {data: itemData, loading, error: dataError} = useFetch(``);
    const [error, setError] = useState<string | null>(dataError);


    const handleQuery = (e: React.FormEvent<HTMLFormElement>): void => {
        e?.preventDefault();
        navigate(`/pages/Search?query=${encodeURIComponent(query)}&number=${number}`);
    }
  return (
    <header className="">
        <div className="form-container">
            <form onSubmit={handleQuery}>
                <input type="text" onChange={(e) => setQuery(e.target.value)} 
                value={query}
                placeholder="Search for a recipe..." />
                <button className="searchBtn">Search</button>
            </form>
            </div>
    </header>
  );
};

export default Header;