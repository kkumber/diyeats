import { useEffect, useState } from "react";
import useApi from "../../api";
import { useAccessTokenContext, useCSRFTokenContext } from "../../pages/AuthPages/AuthProvider";


type Err = string | null

const useAuthFetch = () => {
    const api = useApi();

    const [data, setData] = useState();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [err, setErr] = useState<Err>(null);
    const {accessToken, setAccessToken} = useAccessTokenContext();
    const {setcsrfToken} = useCSRFTokenContext();

    const authFetch = async (url:string, userData: object | null) => {
        setLoading(true);
        setErr(null);
        try {
            const res = await api.post(url, userData);
            setData(res.data);
            if (res.data.access_token) {
                setAccessToken(res.data.access_token);
            }
            if (res.data.csrf_token) {
                setcsrfToken(res.data.csrf_token);
            }
        } catch (err) {
            if (err instanceof Error) {
                setErr(err.message);
            }
        } finally {
            setLoading(false);
        }
    }; 

    return {data, isLoading, err, accessToken, authFetch}
}
 
export default useAuthFetch;