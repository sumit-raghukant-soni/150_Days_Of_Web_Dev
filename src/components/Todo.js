import { React, useRef, useState } from 'react'
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({ todo, removeTask, updating, setupdating, updateTask, statusUpdate }) => {
    const [icon1, seticon1] = useState(faPenToSquare);
    const [icon2, seticon2] = useState(faTrash);
    const [mode, setmode] = useState(true);
    const [Value, setValue] = useState(todo.task);
    const textInput = useRef(null);
    const update = () => {
        if(updating !== "" && todo.id !== updating) return;
        else{
            if (icon1 === faPenToSquare) {
                setmode(false);
                setValue(todo.task);
                setupdating(todo.id);
                seticon1(faCheck);
                seticon2(faXmark);
                setTimeout(() => {
                    textInput.current.focus();
                }, 0);
            }
            else {
                setmode(true);
                updateTask(todo.id, Value)
                setupdating("");
                seticon1(faPenToSquare);
                seticon2(faTrash);
            }
        }
    }

    return (
        <div id={todo.id} className={todo.isDone ? "done todo" : "todo"}>
            <input type="text" hidden={!mode} onClick={() => statusUpdate(todo.id, !todo.isDone)} value={todo.task} readOnly={mode}/>

            <input type="text" ref={textInput} hidden={mode} value={Value} onChange={(e) => {setValue(e.target.value)}}/>
            <div className='sideIcons' hidden={todo.isDone}>
                <FontAwesomeIcon icon={icon1} className='icon' onClick={() => { update("") }} />
                <FontAwesomeIcon icon={icon2} className='icon' onClick={() =>{
                    (icon2 === faTrash && updating === "") ? removeTask(todo.id) : update("");
                }} />
            </div>
        </div>
    )
}
