import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export function comparePrompts(humanChatLogs, generatedText) {
    if (humanChatLogs && generatedText) {
        let humanInputLength = humanChatLogs.length
        let generatedTextLength = generatedText.length - 2
        console.log(
            "String length of human input that is the word: " +
                humanChatLogs +
                " " +
                humanInputLength
        )
        console.log(
            "String length of AI input that is the word: " +
                generatedText +
                " " +
                generatedTextLength
        )
        if (humanInputLength < generatedTextLength) {
            toast("You Lost... The Skynet will take over the world");
        } else if (humanInputLength > generatedTextLength) {
            toast("You won... Terminator is no more");
        } else 
        {
            toast("You guys are equal...  you may now hold hands");
        }
    }
}
