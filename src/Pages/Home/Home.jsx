import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';
import About from '../About/About';

const Home = () => {
    const [plants, setPlants] = useState([])
    useEffect(()=> {
        fetch('https://openapi.programming-hero.com/api/plants').then(res => res.json()).then(data => setPlants(data.plants))
    }, [])
    console.log(plants)
    return (
        <div>
           
            <Navbar></Navbar>
            <main className='p-9'>
                <p className='min-h-[calc(100vh-285px)]'>This is home page</p>
                {
                    plants.map(plant => <p>{plant.name}</p>)
                }
                <Outlet>
                <About></About>

                </Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;