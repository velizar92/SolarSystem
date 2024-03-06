import pagenotfound from '../assets/images/pagenotfound.webp'

const Error = () => {
    return  (
        <main>
            <div className="main">
                <h1>Page not found</h1> 
                 <img className="img-page-not-found" src={pagenotfound} alt="page not found picture" />
            </div>
        </main>);
}

export default Error;