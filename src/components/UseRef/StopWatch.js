import React,{useState,useRef,useEffect} from 'react';

export default function StopWatch() {
    const timerRef=useRef(null);
    const [count,setCount] =useState(0);

    const startHandle = () => {
        if (timerRef.current) {
          return;
        }
      
        timerRef.current = setInterval(() => {
          setCount((c) => c + 1);
        }, 1000);
      };
    const stopHandle=()=>{
        clearInterval(timerRef.current);
        timerRef.current=0
    };
    useEffect(()=>{
        return()=>clearInterval(timerRef.current)
    },[])
  return (
    <><div>
    <h4>UseRef DOM Access Stop watch</h4>
<div>Timer: {count}s</div>
<br/>
<div>
    <button onClick={startHandle}>Start</button>
    <button onClick={stopHandle}>Stop</button>
</div>
    </div></>
  )
}
