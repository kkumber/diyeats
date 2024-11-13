
const useLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(key) : [];
}
 
export default useLocalStorage;