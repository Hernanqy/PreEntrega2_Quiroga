import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ProductItem({ productos }) {
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id == id);

  return (
    <div className="container ">
      

      <div>
        <h4>{producto.title}</h4>
        <img src={producto.image} alt="" width={200} />
        <h5>{producto.category}</h5>
        <p>{producto.description}</p>
        <p>$ {producto.price}</p>
        <p>rating: {producto.rating.rate}</p>
      </div><div className="d-flex justify-content-center">
        {" "}
        <Button className="m-2 " size="lg" variant="primary">
          <a href="/productos" className="text-dark">Volver</a>
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
