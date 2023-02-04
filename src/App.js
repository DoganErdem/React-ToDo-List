import React, { useEffect, useState } from "react";
import "./app.scss"
import Button from "./component/button/button";
import Input from "./component/input/input";
import List from "./component/list/list";

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [id, setId] = useState(0);

  const addItem = (e) => {
    e.preventDefault();

    if(!input){
      alert("Bir görev giriniz!")
      return;
    }

    const item = {
      id: id,
      value: input,
      complete: false
    }

    setId(id + 1);
    setList([item, ...list]);
    setInput("");
    console.log(item.id);
  }

  const deleteItem = (id) => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  }

  const complete = (id) => {
    const completeList = list.map(item => item.id === id ? {...item, complete: !item.complete} : item);
    setList(completeList);
  }


  return (
    <div className="App">
      
      TODO LIST
      <Input value={input} type="text" placeholder={"Yapılacak görev giriniz!"} onChange={(e) => {setInput(e.target.value)}} />
      <Button onClick={addItem}/>
      <List list={list} deleteItem={deleteItem} complete={complete} />

    </div>
  );
}

export default App;
