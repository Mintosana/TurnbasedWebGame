import "./App.css"
import { useState } from "react"
import Header from "./Components/Header"
import ChatPrompts from "./Components/ChatPrompts"
import ChatLogs from "./Components/ChatLogs"
import ChatInput from "./Components/ChatInput"
import { useGenerate } from "./OpenAi"
import { useEffect } from 'react';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [humanChatLogs, setHumanChatLogs] = useState([""])
    const [aiChatLogs, setAiChatLogs] = useState([""]);
    const [letter, setLetter] = useState("")

    const { data, error, generateText } = useGenerate()

    useEffect(() => {
      if (data && data.trim() !== "") {
        setAiChatLogs([...aiChatLogs, data]);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    function addNewHumanChatLogs(input) {
        setHumanChatLogs([...humanChatLogs, input])
    }

    return (
        <div className="App">
            <div className="container">
                <Header setLetter={setLetter} letter={letter}></Header>

                <ChatPrompts
                    humanChatLogs={humanChatLogs}
                    generatedText={data}
                ></ChatPrompts>

                <ChatLogs humanChatLogs={humanChatLogs} generatedText={data} aiChatLogs={aiChatLogs}></ChatLogs>

                <ChatInput
                    addNewHumanChatLogs={addNewHumanChatLogs}
                    humanChatLogs={humanChatLogs}
                    letter={letter}
                    onClick={generateText}
                    generatedText={data}
                    aiChatLogs={aiChatLogs}
                ></ChatInput>
            </div>
        </div>
    )
}

export default App
