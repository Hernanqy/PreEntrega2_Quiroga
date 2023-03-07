;
import CardItem from "./CardItem"



  const ProductList = ({ productos }) => {
    return (
      <>
        {productos.map((producto) => (
          <CardItem key={producto.id} producto={producto} />
        ))}
      </>
    );
  };

  export default ProductList









            