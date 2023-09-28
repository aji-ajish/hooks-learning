import React from "react";

export default function ArrayList(props) {
  console.log('i rendering');
  return (
    <div>
      <div>Array List</div>
        {props.todos.length ? (
          <div>
            {props.todos.map((todo, index) => {
              return <p key={index}>{todo}</p>; // Fix here, wrap todo in {}
            })}
          </div>
        ) : (
          <div>
            <br />
            <div>(Array list empty)</div>
          </div>
        )}
      <button onClick={props.addTodo}>Add Element</button>
    </div>
  );
}
