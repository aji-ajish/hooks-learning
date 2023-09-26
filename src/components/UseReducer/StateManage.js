import React,{useReducer} from "react";

const myReducer=(preState,action)=>{ //initial two parameters 1st is previous state 2nd action(user action)

    // console.log('pre state',preState);
    // console.log('action',action);
    switch(action.type){
        case 'ADD':
            return preState+1;
        case 'REMOVE':
            return preState-1;
        case 'CLEAR':
            return 0;
        default:
            break;
    }
}

export default function StateManage() {
    const [count,dispatcher]=useReducer(myReducer,0) // use reducer except two parameters. 1st is function, 2nd is initial value
    console.log(count);

    const addHandler=()=>{
        dispatcher({type:'ADD'})
    };
    const removeHandler=()=>{
        dispatcher({type:'REMOVE'})
    };
    const ClearHandler=()=>{
        dispatcher({type:'CLEAR'})
    };
  return (
    <>
      <h3>UseReducer - Manage State</h3>
      <p>Count : {count}</p>
      <div>
        <button onClick={addHandler}>Increment</button>&nbsp;&nbsp;
        <button onClick={removeHandler}>Decrement</button>&nbsp;&nbsp;
        <button onClick={ClearHandler}>Reset</button>
      </div>
    </>
  );
}
