import { useEffect, useState } from "react";
import { ItemInterface } from "../pages/Home";
import useLocalStorage from "./useLocalStorage";

const useUpdateLocalStorage = (key: string) => {
    // Retrieve and parse data from localStorage at initialization
    const prevData = useLocalStorage(key);
    const initialData = prevData || [];
    
    const [list, setList] = useState<ItemInterface[]>(initialData);

    useEffect(() => {
        // Update localStorage whenever list changes
        localStorage.setItem(key, JSON.stringify(list));
    }, [list, key]);

    const addItem = (item: ItemInterface) => {
        setList((prevList) => {
            // Avoid duplicates by checking if the item already exists
            if (prevList.some(existingItem => existingItem.id === item.id)) {
                return prevList;
            }
            return [...prevList, item];
        });
    };

    return { list, addItem };
};

export default useUpdateLocalStorage;
