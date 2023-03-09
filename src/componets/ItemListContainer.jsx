import React from 'react';
import './ItemList.css'
const ItemListContainer = ({greeting}) => {
    return (
        
             <div>
               <div className="card-header text-center display-1 text-dark">{greeting}</div>
      <div className="card  saludo mb-3 mt-5">
       

  <div className="card-body">
    <h5 className="card-title text-center">Todo lo nuevo Ya Disponible</h5>
    <p className="card-text"></p>
  </div>
</div>
    </div>
        
    );
}

export default ItemListContainer;

