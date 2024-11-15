
const useLocalStorage = (key: string) => {
    try {
        const getData = localStorage.getItem(key);
        const prevData = getData ? JSON.parse(getData) : []; // Fallback to an empty array if no data
        return prevData;
    } catch (err) {
        console.error((err as Error).message);
    }
}
 
export default useLocalStorage;