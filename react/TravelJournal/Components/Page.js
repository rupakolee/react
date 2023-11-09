import react from 'react'

export default function Page(props) {
    return(
        <div className="container">
            <img src={props.item.img} className="profile"/>
            <div className="post">
                <div className="identifier">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg" className="map-icon" />
                <span className="country">{props.item.country}</span>
                <span className="underlined">View on google maps</span>
                </div>
                <h2>{props.item.location}</h2>
                <p className="bold">{props.item.date}</p>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    )
}