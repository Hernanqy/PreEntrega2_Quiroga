import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CardItem = ({ producto }) => {
  return (
    
    <div className="d-inline-flex flex-wrap  ">
      
        <div className="card m-3 rounded-3 " key={producto.id}>
          <Card className="container" style={{ width: '18rem' }}>
    <Card.Img   variant="top" src={producto.image} />
    <Card.Body>
      <Card.Title><h2>{producto.title}</h2></Card.Title>
      <Card.Text>
  
      </Card.Text>
      <Link to={`${producto.id}`}>
      <Button variant="warning">Mas info</Button></Link>
    </Card.Body>
  </Card>

        </div>
      
    </div>
  );
};

export default CardItem;