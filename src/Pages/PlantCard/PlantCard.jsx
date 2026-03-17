import React from 'react';

const PlantCard = ({plant}) => {
    const {name, image, category, price, id} = plant
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure className='h-44 overflow-hidden bg-gray-800'>
    <img className='w-full h-full object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{category}</p>
    <div>
        <p>Price: {price}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default PlantCard;