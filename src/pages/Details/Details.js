import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../Details/details.css';

const Details = () => {

    const [data, setData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetch(`https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/${id}`, {
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

    if(data === undefined){
        return <h3>Loading</h3>
    }

    return (   
            <main className="main-container">
                <div className="main">
                    <h1> Hello from planet <br />{data.name}</h1> 
                    <p className="sub-heading">{data.description}</p>
                </div>       
            </main>);
}

export default Details;