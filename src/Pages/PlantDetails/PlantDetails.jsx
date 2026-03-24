import { useState } from 'react';
import {  useLoaderData, useLocation } from 'react-router';

const PlantDetails = () => {
  const [cart, setCart] = useState([])
  console.log(cart)
    const data = useLoaderData()
    console.log(data)
   const location = useLocation()
   console.log(location.state)
    
    const {name, image, category, price,description} = data.plants
   
    return (
        <div className="card bg-base-100 w-96 mx-auto my-2 shadow-sm">
  <figure className='h-44 overflow-hidden bg-gray-800'>
    <img className='w-full h-full object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{category}</p>
    <p><small>{description}</small></p>
    <div>
        <p>Price: {price}</p>
    </div>
    <div>
      <button onClick={()=> setCart(()=> [...cart, data.plants])} className='btn btn-primary'>Add to Cart {cart.length}</button>
    </div>
    
  </div>
</div>
    );
};

export default PlantDetails;