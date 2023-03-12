import React from "react";
import "./ItemList.css";
import Img7 from "./../assets/setumisma.png"
import { Button } from "react-bootstrap";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <div className="fondo-intro ">
        <div className="img-intro " >
          <div className="d-flex justify-content-center p-5"><h1>{greeting}</h1></div>
          <a href="/productos"><img className="setumisma" src="https://res.cloudinary.com/dvrq1qlac/image/upload/v1678656220/GRAVITA/WhatsApp_Image_2023-02-25_at_19.33.04_g0dcmn.jpg" alt="se tu misma" />  <Button className="btn-ingreso"> Ingresar en la tienda</Button></a>
        
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
