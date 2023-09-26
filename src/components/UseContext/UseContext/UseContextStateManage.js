import React,{useState, createContext} from 'react'
import Layout from './Layout';

const UserContext=createContext();

export default function UseContextStateManage() {
    const [userDetails,setUserDetails]=useState({
        userName:'Ajish S',
        title:'Learning React Js in Tamil',
        message:'React is a free and open-source front-end JavaScript library '
    });
  return (
    <UserContext.Provider value={{userDetails,setUserDetails}}>
    <Layout />
    </UserContext.Provider>
  )
}

export {UserContext};