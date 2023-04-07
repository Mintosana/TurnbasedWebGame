import "./ChatInput.css"
import { useState } from "react"
import { comparePrompts } from "../CompareStrings"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function ChatInput({ addNewHumanChatLogs, humanChatLogs, letter, onClick }) {
    const send = "Send"
    const next = "NextRound"

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const displayInput = () => {
        if (humanChatLogs.length < 5 && inputValue[0] === letter) {
                addNewHumanChatLogs(inputValue)
        }
        else {
            toast("The word is not right");
        }
    }

    async function sendButton() {
        displayInput()
        let generatedText = await onClick()
        if (generatedText !== null) {
            comparePrompts(inputValue, generatedText)
        }
    }

    return (
        <div className="containerInput">
            <input
                className="chatInput"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            ></input>
            <button className="sendInput" onClick={sendButton}>
                {send}
            </button>
            <ToastContainer />

            <button className="sendInput">{next}</button>
        </div>
    )
}

export default ChatInput
