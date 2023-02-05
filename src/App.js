import React, { useEffect, useState } from "react";
import "./app.scss"
import Button from "./component/button/button";
import Input from "./component/input/input";
import List from "./component/list/list";



const getLocalList = () => {
  const liste = JSON.parse(localStorage.getItem('list'));
  if(liste){
    return liste;
  }else { return []}
}

function App() {

  const [list, setList] = useState(getLocalList());
  const [input, setInput] = useState("");
  const [id, setId] = useState("");
  const [changeBtn, setChangeBtn] = useState(true);
  
  

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list]);


  const addItem = (e) => {
    e.preventDefault();

    if(!input){
      alert("Bir görev giriniz!")
      return;
    }

    const item = {
      id: id ? id : new Date().getTime().toString(),
      value: input,
      complete: false
    }

    if(!changeBtn){
      const newList = list.filter(item => item.id !== id)
      setList(newList)
      setChangeBtn(e => !e);
      setInput("");
      setId("");
      setList([item, ...newList])
      return;
    }

    setList([item, ...list]);
    setInput("");
  };

  const deleteItem = (id) => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  };

  const complete = (id) => {
    const completeList = list.map(item => item.id === id ? {...item, complete: !item.complete} : item);
    setList(completeList);
  };

  const editItem = (id) => {
      const editTask = list.find( (item) =>  item.id === id )
      setInput(editTask.value);
      setChangeBtn(e => !e);
      setId(id);

  }


  return (
    <div className="App">

      TODO LIST
      <Input value={input} type="text" placeholder={"Write new task!"} onChange={(e) => {setInput(e.target.value)}} />
      <Button onClick={addItem} changeBtn={changeBtn}/>
      {list.length>0 && <List list={list} deleteItem={deleteItem} complete={complete} editItem={editItem} />}

    </div>
  );
}

export default App;
