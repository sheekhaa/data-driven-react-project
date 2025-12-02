import { CiLocationOn } from "react-icons/ci";
export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.entry.img.src}
                    alt={props.entry.img.alt}
                />
            </div>
            <div className="info-container">
             <CiLocationOn className='marker'/>
                <span className="country">{props.entry.country}</span>
                <a href={props.entry.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{props.entry.title}</h2>
                <p className="trip-dates">{props.entry.dates}</p>
                     <p className="rating">Rating: {props.entry.rating}</p>
                <p className="entry-text">{props.entry.text}</p>
                <h3>Similar Places</h3>
                <ul className="list-items">
                     {props.entry.similarPlaces.map(({name, Rating, index} )=>(
                          <li key={index}>
                            <p>Name: {name}</p>
                            <p>Rating: {Rating}</p>
                        </li>               
                     ))}          
                </ul>           
            </div>            
        </article>
    )
}