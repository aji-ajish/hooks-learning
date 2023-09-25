import React,{useRef,useEffect} from 'react'

export default function InputFocus() {
    const inputRef=useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    },[])
  return (
    <><div>
    <h4>UseRef DOM Access (Input focus)</h4>
<div>
    <input type="text" name='name' ref={inputRef}/>
</div>
    </div></>
  )
}
