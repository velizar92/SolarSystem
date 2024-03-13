import { useEffect, useState } from 'react';
import '../Planets/planets.css';
import Planet from '../../components/Planet/Planet';

const Planets = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/', {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '',
                    'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
                }
            }).catch((err) => ('Error in catch', console.error(err)));
            const data = await response.json();
            console.log(data);
            setData(data);
        };
        fetchAPI();
    }, []);

    return (

        <div>
            <h1 className="header-text" >All planets in our Solar system</h1>
            <div className="cards-container">
                {data.map((planet) => {
                        return <Planet 
                            id={planet.id}
                            order={planet.planetOrder} 
                            name={planet.name} 
                            volume={planet.basicDetails.volume}
                            mass={planet.basicDetails.mass}
                            url={planet.imgSrc.img}
                            imgDescription={planet.imgSrc.imgDescription} />
                })}
            </div>        
        </div>     
    );       
}

export default Planets;