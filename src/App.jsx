


import './App.css'
import ItemListContainer from './componets/ItemListContainer'
import Navb from './componets/Navbar'
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductList from './componets/ProductList';
import { Route, Routes } from 'react-router-dom';
import Home from './componets/pages/Home';
import ProductItem from './componets/ProductItem';




function App() {

  const [productos, setProductos] = useState([]);

  const getProductos = async () => { 
    const res= await axios.get("http://fakestoreapi.com/products")
    setProductos(res.data);
  };
  console.log(productos);
    useEffect(() => {
      getProductos ();
      
    }, []);



  return (
    <>
    
      <Navb/>
      <ItemListContainer  greeting="Gravita" />

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/productos' element={<ProductList productos ={productos}/>}/>
      <Route path='/productos/:id' element={<ProductItem productos ={productos} />}/>
      <Route path='/categorias/:cat' element={<ProductList productos ={productos} />}/>
      
      </Routes>
    </>
  )
}

export default App
