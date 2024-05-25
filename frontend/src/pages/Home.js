import { useEffect } from 'react';
import { useReccContext } from '../hooks/useReccContext';

//components
import ReccDetails from '../components/ReccDetails';
import ReccForm from '../components/ReccForm';
import SearchBar from '../components/SearchBar';

const Home = () => {

    const {routes, dispatch} = useReccContext();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("/api/reccs");
            const json = await data.json();

            if(data.ok){
              dispatch({type: 'SET_ARCcode', payload: json});
            }
        }
        fetchData();
    },[dispatch]);

    return (
        <div className="home">
          <div className="reccs">
            {routes && routes.map(recc => (
                <ReccDetails recc={recc} key={recc._id} />
))}
           </div>
          <ReccForm />
          <SearchBar />
        </div>
      )
    }

export default Home;
