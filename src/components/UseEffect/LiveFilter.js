import React, { useState, useEffect } from "react";

const array = [
  { key: "1", type: "mobile", value: "iqoo" },
  { key: "2", type: "laptop", value: "lenovo" },
  { key: "3", type: "tablet", value: "Samsung Galaxy Tab" },
  { key: "4", type: "camera", value: "Canon EOS" },
  { key: "5", type: "headphones", value: "Sony WH-1000XM4" },
  { key: "6", type: "watch", value: "Apple Watch" },
  { key: "7", type: "gaming console", value: "PlayStation 5" },
  { key: "8", type: "speaker", value: "Bose SoundLink" },
  { key: "9", type: "smart home device", value: "Amazon Echo" },
  { key: "10", type: "router", value: "TP-Link Archer C4000" },
];

export default function LiveFilter() {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("");
  const [filteredArray, setFilteredArray] = useState(array);

  const inputTypeFilter = (e) => {
    setInputType(e.target.value);
  };

  const inputValueFilter = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    console.log("render");
    setFilteredArray((_) => {
      const newArray = array
        .filter((item) => item.value.includes(inputValue))
        .filter((item) => item.type.includes(inputType));
        return newArray;
    });
  }, [inputValue, inputType]);

  const listItem = filteredArray.map((item) => (
    <>
      <tr>
        <td
          style={{
            borderRight: "1px solid red",
            borderBottom: "1px solid red",
            padding: "10px",
            paddingRight: "2rem",
          }}
        >
          {item.type}
        </td>

        <td
          style={{
            borderBottom: "1px solid red",
            padding: "10px",
            paddingRight: "2rem",
          }}
        >
          {item.value}
        </td>
      </tr>
    </>
  ));
  return (
    <>
      <p>Use Case 3: Running on state Change LiveFilter</p>
      <form>
        <lable style={{ marginTop: "2rem", marginRight: "5rem" }}>
          Filter by type
        </lable>
        <lable>Filter by value</lable>
        <br />
        <input
          type="text"
          autoComplete="off"
          onChange={inputTypeFilter}
          style={{ marginTop: "2rem", marginRight: "5rem" }}
        />
        <input type="text" autoComplete="off" onChange={inputValueFilter} />
        <table style={{ marginLeft: "50rem", paddingRight: "2rem" }}>
          <tr>
            <th
              style={{
                borderRight: "1px solid red",
                borderBottom: "1px solid red",
                padding: "10px",
                paddingRight: "2rem",
              }}
            >
              Type
            </th>
            <th
              style={{
                borderBottom: "1px solid red",
                padding: "10px",
                paddingRight: "2rem",
              }}
            >
              Value
            </th>
          </tr>
          {listItem}
        </table>
      </form>
    </>
  );
}
