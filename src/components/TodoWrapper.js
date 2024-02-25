import { React, useState } from 'react'
import { v4 as uuid } from 'uuid';
import { Todos } from './Todos'
import './TodoWrapper.css'

export const TodoWrapper = () => {
  const [tasks, settasks] = useState([]);
  const [value, setvalue] = useState("");

  const addTask = e => {
    e.preventDefault();
    if(value === "") alert("Enter the task description");
    else{
      settasks([...tasks, {task: value, id: uuid(), isDone: false}]);
      setvalue("");
    }
  }

  return (
    <div className='wrapper'>
      <h2>Get Things Done!</h2>
      <form onSubmit={addTask}>
        <div className='searchbar'>
          <input type="text" name="" id="" value={value} onChange={(e)=>{setvalue(e.target.value)}}/>
          <button type='submit'>Add Task</button>
        </div>
      </form>
      <Todos tasks={tasks} settasks={settasks} />
    </div>
  )
}
