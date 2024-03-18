import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Chatbot from "./components/Modals/ChatBot";


function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/chat" element={<Chatbot/>}/>
    </Routes>

  );
}

export default App;
