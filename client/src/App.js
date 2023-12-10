// import socketIO from 'socket.io-client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Join from './component/Join/Join';
import Chat from './component/Chat/Chat'
import './App.css';

// const ENDPOINT = "http://localhost:4500/";
// const socket = socketIO(ENDPOINT,{transports:['websocket']});

function App() {

  

  return (
    <div className="App">


      <Routes>

         <Route  path="/" element={<Join/>} ></Route>
         <Route path="/chat" element={<Chat/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
