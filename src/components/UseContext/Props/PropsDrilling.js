import React,{useState} from 'react'
import Layout from './Layout';

export default function PropsDrilling() {
    const [userDetails,setUserDetails]=useState({
        userName:'Ajish',
        title:'Learning React Js in Tamil',
        message:'React is a free and open-source front-end JavaScript library  '
    });
  return (
    <Layout userDetails={userDetails} setUserDetails={setUserDetails} />
  )
}
