import React from "react";

export default function ArrayList(props) {
  return (
    <div>
      <div>Array List</div>
        {props.todos.lenght ? (
          <div>
            {props.todos.map((todo, index) => {
              return <p key={index}>todo</p>;
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
