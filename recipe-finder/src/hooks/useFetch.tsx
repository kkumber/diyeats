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
                    throw new Error(`Error: ${response.statusText}`);
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        return () => {
            controller.abort();
        }
    }, [url])


    return { data, loading, error }
}

export default useFetch;