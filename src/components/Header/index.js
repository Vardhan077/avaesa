import { useState,useEffect } from "react"

import './index.css'

const Header = () =>{

    const [open,setOpen] = useState(false);


    return(
        <div>
            {console.log(`dd.${open ? 'active' : 'inactive'}`)}
            <div className="cat">
            <h1 className = 'logo'>JOURNALISM INSIGHTS <span className="span">with Mr. Arun</span></h1>
                <div>
                    <button onClick={() =>{setOpen(!open)}} className="catButton" >Categories</button>
                    <ul className = {`dd${open ? 'Active' : 'Inactive'}`}>
                        <li>News Reporting</li>
                        <li>Investigative Journalism</li>
                        <li>Feature Editing</li>
                        <li>Sports Journalism</li>
                        <li>Entertainment Journalism</li>
                        <li>Business and Financial Journalism</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

function DropDown(props){
    return(
        <li>
            {/* <img src = {props.img} /> */}
            <p>{props.text}</p>
        </li>
    )
}

export default Header