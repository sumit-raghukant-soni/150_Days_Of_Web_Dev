import {React, useState} from 'react'
import './Todos.css'
import { Todo } from './Todo'

export const Todos = ({ tasks, settasks }) => {
  const [updating, setupdating] = useState("");

  const removeTask = id => {
    // alert(key);
    settasks(tasks => tasks.filter(todo => id !== todo.id ));
  }

  const updateTask = (id, task) => {
    settasks(tasks.map( (todo) => (
      (todo.id === id) ? {id, task} : todo
    )
    ))
  }

  const statusUpdate = (id, isDone) => {
    settasks(tasks.map( (todo) => (
      (todo.id === id) ? {...todo, isDone} : todo
    )))
  }

  return (
    <div className='TodoList'>
      {/* <Todo task={"New One"}/> */}
      {
        tasks.map((todo) => (
          <Todo todo={todo} key={todo.id} removeTask={removeTask} updating={updating} setupdating={setupdating} updateTask={updateTask} statusUpdate={statusUpdate}/>
        ))
      }
    </div>
  )
}
