;
import { useParams } from "react-router-dom";
import CardItem from "./CardItem"



  const ProductList = ({ productos }) => {
    const {cat} = useParams();
if (cat) {productos = productos.filter((producto) => producto.category  === cat)}

    return (
      <>
        {productos.map((producto) => (
          <CardItem key={producto.id} producto={producto} />
        ))}
      </>
    );
  };

  export default ProductList









            