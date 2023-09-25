import React, { useState, useEffect } from "react";

export default function FetchApi() {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      console.log(data);
      setIsLoading(false);
      setUserInfo(data);
    };
    fetchData();
  }, []); //componentDidMount
  return (
    <>
      <p>Use Case 1: Run once on mount</p>
      <br />
      <p>User Information:</p>
      {isLoading ? (
        <span>Loading ...</span>
      ) : (
        <pre>{JSON.stringify(userInfo, null, "\t")}</pre>
      )}
    </>
  );
}
