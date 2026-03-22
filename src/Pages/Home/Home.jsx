
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Outlet, useLoaderData } from 'react-router';
import About from '../About/About';
import PlantCard from '../PlantCard/PlantCard';

const Home = () => {
    // const [plants, setPlants] = useState([])
    // useEffect(()=> {
    //     fetch('https://openapi.programming-hero.com/api/plants').then(res => res.json()).then(data => setPlants(data.plants))
    // }, [])
    // console.log(plants)
    const data = useLoaderData()
    // console.log(data)
    return (
        <div>
           
            <Navbar></Navbar>
            <main className='max-w-11/12 mx-auto'>
                <p className='min-h-[calc(100vh-285px)]'>This is home page</p>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                    data.plants.map(plant => <PlantCard key={plant.id} plant={plant}></PlantCard>)
                }
                </div>
                
                <Outlet>
                

                </Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;