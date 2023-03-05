import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProductList() {
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
      <div className="d-inline-flex flex-wrap  ">
        {productos.map(item => (
          <div className="card m-3 rounded-3 " key={item.id}>
            <Card className="container" style={{ width: '18rem' }}>
      <Card.Img   variant="top" src={item.image} />
      <Card.Body>
        <Card.Title><h2>{item.title}</h2></Card.Title>
        <Card.Text>
    
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

          </div>
        ))}
      </div>
    );
  }
  export default ProductList









            