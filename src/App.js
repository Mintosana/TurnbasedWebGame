import './App.css';
import Header from './Components/Header';
import ChatPrompts from './Components/ChatPrompts';
import ChatLogs from './Components/ChatLogs';
import ChatInput from './Components/ChatInput';

function App() {
  return (
    <div className="App">
      <div className="container">

        <Header></Header>  
        
        <ChatPrompts></ChatPrompts>

        <ChatLogs></ChatLogs>

        <ChatInput></ChatInput>

      </div>
    </div>
  );
}

export default App;
