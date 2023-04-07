import "./ChatInput.css"
import { useState } from "react"

function ChatInput({ addNewHumanChatLogs, humanChatLogs, letter, onClick, addNewAiChatLogs, generatedText, aiChatLogs }) {
    const send = "Send"
    const next = "NextRound"

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }


    const displayInput = () => {
        if (humanChatLogs.length < 6) {
            if (inputValue[0] === letter) {
                addNewHumanChatLogs(inputValue)
                addNewAiChatLogs(generatedText)
            }
        }
        if (aiChatLogs.length < 10) {
                addNewAiChatLogs(generatedText)
        }
    }

    function sendButton() {
        displayInput()
        onClick()
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
            <button className="sendInput">{next}</button>
        </div>
    )
}

export default ChatInput
