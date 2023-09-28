import React,{useState,useCallback} from 'react'
import ArrayList from './ArrayList'

export default function UseCallbackCase() {
    const[count,setCount]=useState(0)
    const[todos,setTodos]=useState([])

    const increment=()=>{
        setCount(count+1)
    }
    // const addTodo=()=>{
    //     setTodos((t)=>[...t,Math.floor(Math.random()*1000)]);
    // }
    const addTodo=useCallback(()=>{
        setTodos((t)=>[...t,Math.floor(Math.random()*1000)]);
    },[todos])
  return (
    <div>
        <h3>useCallback - momozied callback function</h3>
        <ArrayList todos={todos} addTodo={addTodo} />
        <br/>
        <div>
            <div>count : {count}</div>
        <br/>
        <button onClick={increment}>increment</button>
        </div>
    </div>
  )
}
