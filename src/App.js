import "./App.css";

import { Route, Routes } from "react-router-dom";

import Contact from './Contact';
import Main from "./Main";


function App() {

  return (
    <Routes>
    <Route path="/" element={<Main />}/>
    <Route path="/contact" element={<Contact />}/>

    </Routes>
  );
}

export default App;
