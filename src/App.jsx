import React from "react";
import './styles/index.scss';
import Home from "./app/home";
import { Toaster } from "react-hot-toast";
import ApiTable from "./app/api-table";

function App() {

  return (
    <div>
      <Toaster />
      <Home />
      <ApiTable />
    </div>
  )
}

export default App
