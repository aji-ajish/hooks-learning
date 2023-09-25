import React, { useRef } from "react";

export default function Ref() {
  const divRef = useRef(null);
  const spanRef = useRef(null);

  const handleDiv = () => {
    console.log(divRef);
  };
  const handleSpan = () => {
    spanRef.current.innerHTML="inner html update"
  };
  return (
    <>
      <div>
        <h4>UseRef DOM Access</h4>
        <div ref={divRef} onClick={handleDiv}>
          Click to view DOM element
        </div>
        <br/>
        <div>
          <span ref={spanRef} onClick={handleSpan}>
            Click to update Dom element
          </span>
        </div>
      </div>
    </>
  );
}
