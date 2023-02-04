import React from 'react';
import "./list.scss";
import { RiEditLine } from 'react-icons/ri';
import { RiDeleteBin5Line } from 'react-icons/ri';

function List({ list, deleteItem, complete, editItem }) {
    return (
        <ul className="list">
          {list.map(item => {
            return (
              <div className={item.complete ? "complete" : "list-item" } key={item.id}>
                <input className='list-item-input' type="checkbox" onClick={() => complete(item.id)} ></input>
                <li className="list-item-text">{item.value}</li>
                <button className="list-item-edit" onClick={() => editItem(item.id)}><RiEditLine size={20} /></button>
                <button className="list-item-delete" onClick={() => deleteItem(item.id)} ><RiDeleteBin5Line size={18}/></button>
              </div>
            )
          })}
        </ul>
    );
}

export default List;