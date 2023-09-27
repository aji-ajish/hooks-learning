import React,{useState,useMemo} from 'react'
import ArrayList from './ArrayList'

export default function UseMemoCase() {
  const [count,setCount]=useState(0)
  const [todos,setTodos]=useState([])
  const calculation=expensiveCalculation(count);

  const increment=()=>{
    console.log('Count Incremented');
    setCount((c)=>c+1)
    
  }
  const addTodo=()=>{
    setTodos((t)=>[...t,Math.floor(Math.random()*100)])
    console.log(todos);
  }
console.log('I Rendered');
  return (
    <div>
      <h2>useMemo - Memorized Value</h2>
      <ArrayList todos={todos} addTodo={addTodo}/>
      <br/>
      <div>
        <div>Count : {count}</div>
        <br/>
        <button onClick={increment}>Incremented</button>
        <h3>expensive Calculation Result</h3>
        {calculation}
      </div>
    </div>
  )
}
const expensiveCalculation=(num)=>{
  for (let i=0;i<1000;i++){
    num+=1;
  }
  console.log("expensive Calculation completed");
  return num;
}
