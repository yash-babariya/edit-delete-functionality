import React from "react";
import './styles/index.scss';
import Home from "./app/home";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <div>
      <Toaster />
      <Home />
    </div>
  )
}

export default App
