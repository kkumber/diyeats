import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { error } from "console";

interface FoodID {
    foodId: number
}

const ShareButton = ({foodId}: FoodID) => {

    const handleCopyLink = (id: number) => {
        navigator.clipboard.writeText(`/pages/Meal?id=${id}`).then(() => {
            alert('Link has been copied to clipboard');
        }).catch((error) => {
            console.error("Error in copying link: ", error)
        })
    }

    return ( 
        <>
        <button className="" onClick={() => handleCopyLink(foodId)}>
            <FontAwesomeIcon icon={faPaperclip} size="2xl"/>
        </button>
        </>
     );
}
 
export default ShareButton;