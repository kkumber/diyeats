import { useState, useEffect } from "react"



const useFetch = (url: string) => {
    const [data, setData] = useState<any | null>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url);
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
    }, [url])

    return { data, loading, error }
}

export default useFetch;