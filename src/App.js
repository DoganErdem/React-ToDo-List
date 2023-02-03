import React, { useState } from "react";
import "./app.scss"
import Button from "./component/button/button";
import Input from "./component/input/input";

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [id, setId] = useState(0);


  return (
    <div className="App">
      
      
      TODO LIST
      <Input value={input} type="text" placeholder={"Yapılacak görev giriniz!"} onChange={(e) => {setInput(e.target.value)}} />
      <Button />
      
      <div>
        list itemlar burada sıralanacak
        <ul className="list">

        </ul>
      </div>

    </div>
  );
}

export default App;
