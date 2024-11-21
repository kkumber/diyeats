import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import useHeadline from "../hooks/useHeadline";


const Header = () => {
    const APIKEY = process.env.REACT_APP_API_KEY;
    const [query, setQuery] = useState<string>('');
    const [number, setNumber] = useState<number>(1);
    const navigate = useNavigate();
    const {data: itemData, loading, error: dataError} = useFetch(``);
    const [error, setError] = useState<string | null>(dataError);

    const headline = useHeadline();

    const handleQuery = (e: React.FormEvent<HTMLFormElement>): void => {
        e?.preventDefault();
        navigate(`/pages/Search?query=${encodeURIComponent(query)}&number=${number}`);
    }
  return (
    <header className="h-60 relative
    sm:h-80
    md:h-96 ">
      <img src="/images/headerbg.png" alt="header background" className="absolute inset-0 object-cover w-full h-full -z-10" />
      
      <div className="grid grid-rows-2">
      <div className="flex justify-between items-start sm:h-1/2 p-4">
        <div className="w-28 sm:w-32 content-center">
          <img src="/images/DIYeatsLogo.png" alt="Logo" className="w-full"/>
          </div>
        <div className="flex items-start">
          <button className="rounded-2xl bg-milky-white px-4 py-1 mt-3 text-milky-brown items-center
           sm:px-6
          ">Contact us</button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 sm:mt-8">
          <div>
          <h1 className="text-white text-2xl font-montserrat my-4
          sm:mb-6 sm:text-3xl md:text-5xl">{headline}</h1>
          </div>

    <form onSubmit={handleQuery} className="relative w-full max-w-md flex items-center justify-center
    md:max-w-2xl">
      {/* Left icon */}
      <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#8a5700" }} />
      </span>

      {/* Input field */}
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder="Search for a recipe..."
        className="bg-milky-white py-1 pl-12 pr-12 w-full rounded-2xl text-base text-black 
        sm:text-2xl"
      />
    </form>
            </div>
      </div>
    
    </header>
  );
};

export default Header;