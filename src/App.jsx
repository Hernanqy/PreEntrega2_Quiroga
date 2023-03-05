


import './App.css'
import ItemListContainer from './componets/ItemListContainer'
import Navb from './componets/Navbar'
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductList from './componets/ProductList';
import { Route, Routes } from 'react-router-dom';
import Home from './componets/pages/Home';




function App() {




  return (
    <>
    
      <Navb/>
      <ItemListContainer greeting="Hola somos Gravita" />

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/productos' element={<ProductList />}/>
      
      </Routes>
    </>
  )
}

export default App
