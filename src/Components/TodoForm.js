import React, {useState,useEffect,useRef} from 'react'
import TodoList from './TodoList';

function TodoForm(props) {
    const [input,setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus()
    })

    const handleChange = e =>{
        setInput(e.target.value);
    }

    const handlesubmit = e =>{
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        });

        setInput('');
        
    }
    return (
        <form className="todo-form" onSubmit={handlesubmit}>

        {props.edit? ( <><input type='text' placeholder="update a todo" value={input} name='text' className="todo-input edit" onChange={handleChange} ref={inputRef}/>
        <button className="todo-button edit" >update todo</button>
        </>
        ) :
         ( <> <input type='text' placeholder="Add a todo" value={input} name='text' className="todo-input" onChange={handleChange} ref={inputRef}/>
        <button className="todo-button" >Add todo</button> </>)
    }
           
        </form>
    )
}

export default TodoForm
