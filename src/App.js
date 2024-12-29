
import './App.css';
import {useRef, useState} from 'react';

function App() {

  
const [todo , setTodo] = useState([]);
const inputRef = useRef();


const handleItems = () => {

  if(inputRef.current.value === '') return;
  const text = inputRef.current.value;
  const newItem = {completed:false , text};
setTodo([...todo,newItem]);
// console.log(text);
inputRef.current.value ='';
};

const handleItemDone =(index) => {
  const newTodo = [...todo];
  newTodo[index].completed = !newTodo[index].completed;
  setTodo(newTodo);
};

const deleteItem = (index)=>{
  const newTodo = [...todo];
  newTodo.splice(index,1);
  setTodo(newTodo);
};



  return (
    <div className="App">
      <h1> To Do List 📒 </h1>



      <input type = "text"ref={inputRef} placeholder='Enter Item ..'/>

      <button className='btn' onClick={handleItems}> Add</button>

      <div className='todoList'>
<ul className='list'>
{todo.map(({text , completed},index)=>{
  return <div className='item'>
    <li key ={index} className={completed ? 'done':''} onClick={()=> {handleItemDone(index)}}>{text}</li>
    <span className='close' onClick={()=>deleteItem(index)}>❌</span>
  </div>
  // return <li className={{textDecoration:completed ? 'line-through':'none'}} onClick={()=> {handleItemDone(index)}}>{text}</li>;
})}

      </ul>

  </div>
    </div>
  );
}

export default App;
