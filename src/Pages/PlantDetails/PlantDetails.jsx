import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router';

const PlantDetails = () => {
    // const data = useLoaderData()
    const {id} = useParams()
    console.log(id)
    // console.log('ee',data,params)
    const [plant, setPlant] = useState({})
    const {name, image, category, price,description} = plant
    useEffect(()=> {
        fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
        .then(res => res.json())
        .then(data => setPlant(data?.plants))
    }, [id,setPlant])
    console.log(plant)
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
    
  </div>
</div>
    );
};

export default PlantDetails;