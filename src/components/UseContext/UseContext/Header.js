import React,{useContext  } from "react";
import { UserContext } from "./UseContextStateManage";

export default function Header() {
  const {userDetails}=useContext(UserContext);
  const {userName,title}=userDetails;
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
