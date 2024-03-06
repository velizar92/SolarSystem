import '../Planets/planet.css';

const Planet = ({id, order, name, volume, mass, url, imgDescription }) => {
    return (
    <div key={id} className="container">
        <div className="wrapper">
        <div className="banner-image">
            <img className="planet-image" src={url} alt={imgDescription}></img>
         </div>
            <h1 className="card-heading"> {name}</h1>
            <p className="card-info">Order: {order} <br/>
                Volume: {volume} <br/> Mass: {mass}</p>
        </div>
        <div class="button-wrapper"> 
            <button className="btn fill">More Info</button>
        </div>
    </div>)
}

export default Planet;