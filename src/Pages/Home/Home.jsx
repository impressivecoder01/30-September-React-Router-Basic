
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Outlet, useLoaderData, useNavigation } from 'react-router';
import About from '../About/About';
import PlantCard from '../PlantCard/PlantCard';
import Loading from '../../Components/Loading';

const Home = () => {
    // const [plants, setPlants] = useState([])
    // useEffect(()=> {
    //     fetch('https://openapi.programming-hero.com/api/plants').then(res => res.json()).then(data => setPlants(data.plants))
    // }, [])
    // console.log(plants)
    const navigation = useNavigation()
    console.log(navigation.state)
    const data = useLoaderData()
    // console.log(data)
    return (
        <div>
           
            <Navbar></Navbar>
            {navigation?.state === 'loading' ? <Loading></Loading>:<main className='max-w-11/12 mx-auto'>
                <p className='min-h-[calc(100vh-285px)]'>This is home page</p>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                    data.plants.map(plant => <PlantCard key={plant.id} plant={plant}></PlantCard>)
                }
                </div>
                
                <Outlet>
                

                </Outlet>
            </main>}
            
            <Footer></Footer>
        </div>
    );
};

export default Home;