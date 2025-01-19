import { ItemInterface } from "../pages/Main/Home";
import { useEffect, useState } from "react";
import useApi from "../api";
import { useFavoritesContext } from "../pages/AuthPages/AuthProvider";

type Err = string | null

const useFavorites = () => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [err, setErr] = useState<Err>(null);
    const api = useApi();
    const {setFavorites} = useFavoritesContext();

    const getFavorites = async () => {
        setLoading(true);
        setErr(null);
        try {
            const res = await api.get('favorites/list/', {
                withCredentials: true
            })
            setData(res.data);
            setFavorites(res.data);
        } catch (err) {
            if (err instanceof Error) {
                setErr(err.message);
            }
        } finally {
            setLoading(false);
        }  
    }

    const addToFavorites = async (newItem: ItemInterface) => {
        setLoading(true);
        setErr(null);
        console.log(newItem);
        try {
            const res = await api.post('favorites/list/', newItem, {
                withCredentials: true
        })
            setFavorites(res.data);
        } catch (err) {
            if (err instanceof Error) {
                setErr(err.message);
            }
        } finally {
            setLoading(false);
        }  
    }

    const removeToFavorites = async (newItem: ItemInterface) => {
        setLoading(true);
        setErr(null);
        try {
            const res = await api.delete(`favorites/list/delete/${newItem.id}/`, {
                withCredentials: true
        })
            setData(res.data);
            setFavorites(res.data);
        } catch (err) {
            if (err instanceof Error) {
                setErr(err.message);
            }
        } finally {
            setLoading(false);
        }  
    }

    return {data, isLoading, err, getFavorites, addToFavorites, removeToFavorites}
}

export default useFavorites;