import "./App.css"
import { useState } from "react"
import Header from "./Components/Header"
import ChatPrompts from "./Components/ChatPrompts"
import ChatLogs from "./Components/ChatLogs"
import ChatInput from "./Components/ChatInput"
import { useGenerate } from "./OpenAi"

function App() {
    const [humanChatLogs, setHumanChatLogs] = useState([""])
    const [letter, setLetter] = useState("")

    const { data, error, generateText } = useGenerate()

    function addNewHumanChatLogs(input) {
        setHumanChatLogs([...humanChatLogs, input])
    }
    const [aiChatLogs, setAiChatLogs] = useState([""])
    function addNewAiChatLogs(input) {
        setAiChatLogs([...aiChatLogs, input])
    }
    return (
        <div className="App">
            <div className="container">
                <Header setLetter={setLetter} letter={letter}></Header>

                <ChatPrompts
                    humanChatLogs={humanChatLogs}
                    generatedText={data}
                ></ChatPrompts>

                <ChatLogs humanChatLogs={humanChatLogs}></ChatLogs>

                <ChatInput
                    addNewHumanChatLogs={addNewHumanChatLogs}
                    humanChatLogs={humanChatLogs}
                    letter={letter}
                    onClick={generateText}
                ></ChatInput>
            </div>
        </div>
    )
}

export default App
