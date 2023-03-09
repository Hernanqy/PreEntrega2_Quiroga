

import Img1 from "../../assets/Ilustraciones-Gravita-06.jpg"
import Img2 from "../../assets/Ilustraciones-Gravita-11.jpg"
import Img3 from "../../assets/Ilustraciones-Gravita-22.jpg"
import Img4 from "../../assets/Ilustraciones-Gravita-24.jpg"
import Card from 'react-bootstrap/Card';

;

function Home() {
  return (
  <>
  <div className="row">

    <Card className="bg-dark text-white col-lg-12 m-5">
      <Card.Img className="img-fluid" src={Img1} alt="Card image" />
      
        
    </Card></div>
    
    </>
  );
}

export default Home;