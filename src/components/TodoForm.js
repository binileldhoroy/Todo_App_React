import React, {useState,useEffect,useRef} from 'react'

const TodoForm = (props) => {
    const [input,setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
      inputRef.current.focus()
    })

    const formChange = (event) => {
      setInput(event.target.value)
    }

    const formSubmit = (e) =>{
        e.preventDefault();

      props.onSubmit({
        id:Math.floor(Math.random()*10000),
        text:input
      })

      setInput('')

    }
  return (
    <form className='todo-form' onSubmit={formSubmit}>
        {props.edit ? (
          <><input type="text" placeholder='Update Your Item' value={input} onChange={formChange} name='text' className='todo-input edit' ref={inputRef} /><button className='todo-button edit'>Update</button></>
        ) : (
          <><input type="text" placeholder='Add a Todo' value={input} onChange={formChange} name='text' className='todo-input' ref={inputRef} /><button className='todo-button'>Add Todo</button></>
        )}
    </form>
  )
}

export default TodoForm
