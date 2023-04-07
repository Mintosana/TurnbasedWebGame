import "./ChatInput.css"
import { useState } from "react"
import { generateLetter } from "../OpenAi"

const updateLetter ="";

function ChatInput({ addNewHumanChatLogs, humanChatLogs, letter, onClick }) {
    const send = "Send"
    const next = "NextRound"

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const displayInput = () => {
        if (humanChatLogs.length < 5) {
            if (inputValue[0] === letter) {
                addNewHumanChatLogs(inputValue)
            }
        }
    }

    function sendButton() {
        displayInput()
        onClick()
    }

    function clearGame(){
        setInputValue("");
        generateLetter();
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
            <button className="sendInput" onClick={clearGame}>{next}</button>
        </div>
    )
}

export default ChatInput
