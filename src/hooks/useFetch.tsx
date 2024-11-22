import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import ErrorPage from "../components/ErrorPage";


const useFetch = (url: string) => {
    const [data, setData] = useState<any | null>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, {signal});
                if (!response.ok) {
                    if (response.status === 401) {
                        setError("You have reached the search limit for the day.");
                    } else {
                        throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
                    }
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (err: any) {
                if (err.name !== 'AbortError') {
                setError((err as Error).message || "An unknown error occurred");
                }
            } finally {
                if (!signal.aborted){
                setLoading(false);
                }
            }
        }

        fetchData();

        return () => {
            controller.abort();
        }
    }, [url])

    return {data, loading, error}; 
}

export default useFetch;