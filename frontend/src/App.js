import React from 'react'
import SignUp from './Pages/SignUp'
import { Routes,Route } from 'react-router-dom'
import AllMail from './Pages/AllMail'
import Home from './Pages/Home'

function App() {
  return (
    <Routes>
    <Route path="/" element={<SignUp />} />
    <Route path="/home" element={<Home />} />
   <Route path='/allmail' element={<AllMail/>}/>
 </Routes>
   
  );
}

export default App;
