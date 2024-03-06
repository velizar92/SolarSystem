import './planet.css'
import { Link } from 'react-router-dom';

const Planet = ({id, order, name, volume, mass, url, imgDescription }) => {
    return (
    <div key={id} className="card-container">
        <div className="wrapper">
        <div className="banner-image">
            <img className="planet-image" src={url} alt={imgDescription}></img>
         </div>
            <h1 className="card-heading"> {name}</h1>
            <p className="card-info">Order: {order} <br/>
                Volume: {volume} <br/> Mass: {mass}</p>
        </div>
        <div className="button-wrapper"> 
            <button className="btn fill"><Link to={`/details/${id}`}>More Info</Link></button>
        </div>
    </div>)
}

export default Planet;