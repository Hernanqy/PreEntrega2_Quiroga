import React from 'react';

const ItemListContainer = ({greeting}) => {
    return (
        
             <div>
      <div className="card text-white bg-success mb-3 mt-5">
  <div className="card-header text-center display-1">{greeting}</div>
  <div className="card-body">
    <h5 className="card-title">Success card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
        
    );
}

export default ItemListContainer;

