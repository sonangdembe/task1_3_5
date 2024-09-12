import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import {SearchFilter} from './task1/SearchFilter'
import { Home } from './Home';
import { Combine } from './components/Combine';

const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path ='/' element ={<Home/>}/>
      <Route path ='/task1' element ={<SearchFilter/>}/>
      <Route path ='/task' element ={<Combine/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App