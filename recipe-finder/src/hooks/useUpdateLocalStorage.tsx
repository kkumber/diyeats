import { useEffect, useState } from "react";
import { ItemInterface } from "../pages/Home";

const useUpdateLocalStorage = (key: string, item: ItemInterface | null) => {
    // Safely retrieve and parse data from localStorage
    const getData = localStorage.getItem(key);
    const prevData = getData ? JSON.parse(getData) : []; // Fallback to an empty array if no data

    const [list, setList] = useState<ItemInterface[]>(prevData);

    useEffect(() => {
        if (item) {
            // Update the state and localStorage
            setList((prevList) => {
                const updatedList = [...prevList, item];
                localStorage.setItem(key, JSON.stringify(updatedList));
                return updatedList;
            });
        }
    }, [item, key]); // Depend on item and key only

    return { list };
};

export default useUpdateLocalStorage;