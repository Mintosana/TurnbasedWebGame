import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import ChatPrompts from './Components/ChatPrompts';
import ChatLogs from './Components/ChatLogs';
import ChatInput from './Components/ChatInput';

function App() {
const [humanChatLogs, setHumanChatLogs] = useState([""]);
function addNewHumanChatLogs(input) {
  setHumanChatLogs([...humanChatLogs, input])
}
  return (
    <div className="App">
      <div className="container">

        <Header></Header>  
        
        <ChatPrompts humanChatLogs={humanChatLogs}></ChatPrompts>

        <ChatLogs humanChatLogs={humanChatLogs}></ChatLogs>

        <ChatInput addNewHumanChatLogs={addNewHumanChatLogs} humanChatLogs={humanChatLogs}></ChatInput>

      </div>
    </div>
  );
}

export default App;
