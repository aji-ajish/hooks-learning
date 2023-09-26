import React from "react";

export default function Header(props) {
  const { userDetails } = props;
  const { userName, title } = userDetails;
  return (
    <div
      style={{
        background: "#b5b9ae",
        height: 20,
        display: "flex",
        justifyContent: "space-between",
        padding: 5,
      }} >
        <div>{title}</div>
        <div>Login User : {userName}</div>
      </div>
  );
}
