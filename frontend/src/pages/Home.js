import {useEffect, useState} from 'react';

//components
import ReccDetails from '../components/ReccDetails';
import ReccForm from '../components/ReccForm';

const Home = () => {

    const [routes, setRoutes] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("/api/reccs");
            const json = await data.json();

            if(data.ok){
                setRoutes(json);
            }
        }
        fetchData();
    },[]);

    return (
        <div className="home">
          <div className="reccs">
            {routes && routes.map((recc) => (
                <ReccDetails key={recc._id} recc={recc} />
))}
           </div>
          <ReccForm />
        </div>
      )
    }

export default Home;
