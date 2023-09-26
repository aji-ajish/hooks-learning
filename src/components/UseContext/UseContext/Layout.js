import React from "react";
import Header from "./Header";
import UserInfo from "./UserInfo";

export default function Layout() {
    
  return (
    <div>
      <h3>Without UseContext - Pass state data through props</h3>
      <div
        style={{ border: "1px solid gray",
         padding: "0px 0px 10px 0px" }}>
            <Header />
            <UserInfo />
         </div>
    </div>
  );
}
