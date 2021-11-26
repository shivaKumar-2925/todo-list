import React from 'react'
import img from './SVG/Album.svg';
import { useState } from 'react';

const Todo = () => {

  const [input, setInput] = useState('');
  const [addItem,setAddItem] = useState([])
const inputEvent=(e)=>{

  setInput(e.target.value)
}
const submitItem =()=>{
  setAddItem([...addItem,input])
  setInput('')
}
const deleteItem=(id)=>{
  console.log(id);
  const updatedItem=addItem.filter((elems,index)=>{
   return index !==id;
  });
  setAddItem(updatedItem)
}

const deleteAll=()=>{
  setAddItem([])
}
  return (
    <div>
     <div className="main">
       <div className="center">
     <div className="logo">
       <figure>
       <img src={img} alt="image" />
       <figcaption>TODO List</figcaption>
       </figure>
     </div>
     <div className="inputs">
       <input type="text" placeholder='Enter-Todo' onChange={inputEvent} value={input}/>
      
       <i class="fas fa-plus add" onClick={submitItem}></i>
     </div>
     <div className="showItem">
       
       {
         addItem.map((elem,ind)=>{
           return (      <div className="myItem" key={ind}> <h3 className="item">{elem}</h3><i className="fa fa-trash-o delete" aria-hidden="true" onClick={()=>deleteItem(ind)}></i></div>
)
         })
       }
      
  
     </div>
     
       <button className="clearAll" onClick={deleteAll}>Clear All</button>
     </div>
       </div>
 
    </div>
  )
}

export default Todo
