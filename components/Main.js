import React from "react"
import ReactDOM from "react-dom" 

export default function Main(props){
    return (<section>
    <div className="main-container">
    <img src={`./images/${props.img}`} className="main-pic"></img>
    <div className="text-container"><div><div className="first-line"><img src="./images/location.png" className="location"></img><span className="country-name">{props.country}</span><span><a href={`https://www.google.com/maps/${props.url}`}>Veiw on Google Maps</a></span>
    </div><h2 className="mount">{props.mount}</h2><h4 className="date">{props.date}</h4><p className="text-description">{props.description}</p></div></div></div>
    </section>)
    
}
