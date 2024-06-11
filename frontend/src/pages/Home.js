import { useEffect } from 'react';
import { useReccContext } from '../hooks/useReccContext';

//components
import ReccDetails from '../components/ReccDetails';
import ReccForm from '../components/ReccForm';
import SearchBar from '../components/SearchBar';

const Home = () => {

    const { filteredReccArray, dispatch } = useReccContext();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("/api/reccs/");
            const jsonData = await data.json();

            if(data.ok){
              dispatch({type: 'SET_RECCS', payload: jsonData});
            }
        }
        fetchData();
    },[dispatch]);

    
    return (
        <div className="home">
          <SearchBar />
          <ReccForm />
          <div className="reccs">
          {filteredReccArray && filteredReccArray.map(recc => (
                <ReccDetails recc={recc} key={recc._id} />
))}
        </div>
        </div>
      )
    }

export default Home;
