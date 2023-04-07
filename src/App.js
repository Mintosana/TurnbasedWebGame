import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import ChatPrompts from './Components/ChatPrompts';
import ChatLogs from './Components/ChatLogs';
import ChatInput from './Components/ChatInput';
import { useGenerate } from './OpenAi';

function App() {
const [humanChatLogs, setHumanChatLogs] = useState([""]);
const [aiChatLogs, setAiChatLogs] = useState([""]);
const [letter, setLetter] = useState("");


const {
  data,
  generateText
} = useGenerate();



function addNewAiChatLogs(generatedText) {
  if (generatedText && generatedText.trim() !== "") {
    setAiChatLogs([...aiChatLogs, generatedText]);
  }
}
function addNewHumanChatLogs(input) {
  setHumanChatLogs([...humanChatLogs, input])
}
  return (
    <div className="App">
      <div className="container">

        <Header setLetter={setLetter} letter={letter}></Header>
        
        <ChatPrompts humanChatLogs={humanChatLogs} generatedText={data} ></ChatPrompts>

        <ChatLogs humanChatLogs={humanChatLogs} generatedText={data} aiChatLogs={aiChatLogs}></ChatLogs>

        <ChatInput addNewHumanChatLogs={addNewHumanChatLogs} humanChatLogs={humanChatLogs} letter={letter} onClick={generateText} addNewAiChatLogs={addNewAiChatLogs} generatedText={data} aiChatLogs={aiChatLogs}></ChatInput>

      </div>
    </div>
  );
}

export default App;
