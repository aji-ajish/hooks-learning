import React, { useState, useEffect } from "react";

function ParagraphList(props){
    const [paragraphText,setParagraphText]=useState([]);

    useEffect(()=>{
        console.log('props change');
        setParagraphText(
            props.paragraphList.map((piece,index)=>(
                <p key={index}>{index+1} . {piece}</p>
            ))
        );
    },[props.paragraphList]);
    return(
        <>
            <p>Number of Paragraphs : {paragraphText.length}</p>
            <br/>
            {paragraphText}
        </>
    )
}

export default function UpdateFetch() {
  const [paragraphList, setParagraphList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler =async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response =await fetch(`https://baconipsum.com/api/?type=all-meat&paras=${e.target.paragraphs.value}&start-with-lorem=1`);
    const data =await response.json();
    setIsLoading(false);
    setParagraphList(data);
  };
  return (
    <>
      <p>Use Case 4:Running on props change UpdateFetch</p>
      <br />
      <form onSubmit={submitHandler}>
        <lable htmlFor="Paragraphs">
          How many paragraphs of "lorem ipsum" do you want?
        </lable>
        <br />
        <select id="Paragraphs" name="paragraphs" style={{ margin: "2rem" }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input type="submit" value="show me the paragraph!" />
        <br />
        {isLoading && <span>Getting Paragraphs...</span>}
      </form>
      <ParagraphList paragraphList={paragraphList} />
    </>
  );
}
