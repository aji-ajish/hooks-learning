import React, { useState } from "react";

export default function UseStateHook() {
  const [count, SetCount] = useState(0);
  const [userName, SetUserName] = useState("");
  const [userList, SetUserList] = useState([38, 55, 71, 92]);
  const [userDetails, SetUserdetails] = useState({
    name: "Ajish",
    Education: "B.Sc",
    Learning: "React"
  });

  return (
    <>
      <div>
        <p>Counter App</p>
        <p>count: {count}</p>
        <button onClick={(e) => SetCount(count + 1)}>Add</button>
        <button onClick={(e) => SetCount(count - 1)}>Sub</button>
      </div>
      <br />
      <div>
        <p>Welcome, Hi {userName}</p>
        <input
          type="text"
          value={userName}
          onChange={(e) => SetUserName(e.target.value)}
        />
      </div>
      <div>
        <p>User List</p>
        {userList.map((user, index) => {
          return (<div key={index}>
            {index + 1}.  {user}
          </div>);
        })}
        <button onClick={() => {
          SetUserList([...userList, Math.floor(Math.random() * 1000)]);
        }}>push random number</button>
      </div>
      <div>
        <p>Name: {userDetails.name}</p>
        <p>Education: {userDetails.Education}</p>
        <p>Learning: {userDetails.Learning}</p>
        <input
          type="text"
          value={userDetails.Education}
          onChange={(e) => SetUserdetails({ ...userDetails, Education: e.target.value })}
        />
      </div>
    </>
  );
}
