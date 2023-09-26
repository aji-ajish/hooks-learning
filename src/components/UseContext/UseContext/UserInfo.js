import React,{useContext  } from "react";
import { UserContext } from "./UseContextStateManage";

export default function UserInfo() {
    const {userDetails,setUserDetails}=useContext(UserContext);
    console.log(userDetails);
    const {message,title}=userDetails;
  return (
    <div style={{ padding: "15px 5px" }}>
      <div>
        {message} - {title}
      </div>
      <br />
      <span>Edit Child Component Field:</span>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setUserDetails((prev) => ({ ...prev, title: e.target.value }));
        }}
      />
    </div>
  );
}
