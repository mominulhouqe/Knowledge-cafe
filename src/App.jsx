import React from 'react'
import Header from './components/Header/Header'
import User from './components/User/User'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    
    <React.Fragment>

      <Header />
      <User />
      <ToastContainer />
    </React.Fragment>

  )
}
