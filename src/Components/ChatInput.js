import "./ChatInput.css"
import { useState } from "react"

function ChatInput({ addNewHumanChatLogs, humanChatLogs, letter, onClick }) {
    const send = "Send"
    const next = "NextRound"

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }


    const displayInput = () => {
        if (humanChatLogs.length < 6) {
            const upperCasedString = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
            console.log(upperCasedString);

            if (upperCasedString[0] === letter) {

                addNewHumanChatLogs(upperCasedString)
            }
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
