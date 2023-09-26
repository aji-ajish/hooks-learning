import React, { useReducer } from "react";

const myReducer = (preState, action) => {
  switch (action.type) {
    case "USERNAME":
      return { ...preState, username: action.payload };
    case "PASSWORD":
      return { ...preState, password: action.payload };
    case "LOGGED_IN":
      return { ...preState, isLoggedIn: true };
    case "LOGGED_OUT":
      return { ...preState, isLoggedIn: false,username:'',password:'', };
    case "IS_LOADING":
      return { ...preState, isLoading: true };
    case "IS_NOT_LOADING":
      return { ...preState, isLoading: false };
      case "ERROR":
      return { ...preState, isError: true, isLoading: false};
    default:
      break;
  }
};

export default function MultipleState() {
  const initialState = {
    username: "",
    password: "",
    isLoggedIn: false,
    isLoading: false,
    isError: false,
  };

  const [state, dispatcher] = useReducer(myReducer, initialState);

  const usernameHandler = (e) => {
    dispatcher({ type: "USERNAME", payload: e.target.value });
  };

  const passwordHandler = (e) => {
    dispatcher({ type: "PASSWORD", payload: e.target.value });
  };

  const logoutHandler = (e) => {
    dispatcher({ type: "LOGGED_OUT", payload: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatcher({ type: "IS_LOADING", payload: e.target.value });
    setTimeout(() => {
      if (state.username === "ajish" && state.password === "admin") {
        dispatcher({ type: "LOGGED_IN" });
        dispatcher({ type: "IS_NOT_LOADING" });
      } else {
        dispatcher({ type: "ERROR" });
        alert("incorrect username or password");
      }
    },3000);
  };
  return (
    <>
      <h3>Manage Multiple State</h3>
      <div
        style={{
          background: "#cacaca",
          borderRadius: "1ren",
          padding: "1rem",
          margin: "2rem",
        }}
      >
        {state.isLoggedIn ? (
          <>
            <p>Welcome {state.username}</p>
            <button onClick={logoutHandler}>Log Out</button>
          </>
        ) : (
          <form onSubmit={submitHandler} autoComplete="off">
            <div style={{ fontWeight: "bold", textAlign: "center" }}>
              Login Form
            </div>
            <div style={{ margin: "1rem 0", textAlign: "center" }}>
              <lable htmlFor="username">User Name</lable>
              <input
                type="text"
                id="username"
                onChange={usernameHandler}
                value={state.username}
                style={{ margin: "0 1rem" }}
                placeholder="enter name"
              />
            </div>
            <div style={{ margin: "1rem 0", textAlign: "center" }}>
              <lable htmlFor="password">Password</lable>
              <input
                type="password"
                id="password"
                onChange={passwordHandler}
                value={state.password}
                style={{ margin: "0 1rem" }}
                placeholder="enter password"
              />
            </div>
            <div style={{ margin: "1rem 0", textAlign: "center" }}>
              <button
                type="submit"
                disabled={
                  state.isLoading || !(state.username && state.password)
                }
              >
                {state.isLoading ? "Logging you in ..." : "Log in"}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
