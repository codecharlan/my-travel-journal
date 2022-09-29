import React from "react"
import ReactDOM from "react-dom" 
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Data from "./Data"


export default function App(){
     const main = Data.map(item => {
        return (
            <Main
                key={item.id}
                {...item}
                
            />
        )
    })    
    return (<div>
    <Navbar />
    <section>
    {main}
    </section>
    </div>)
}