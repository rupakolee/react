import React from "react";

export default function Info() {
    return(
    <div>
        <img className="my-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80"/>
        <div className="text-container">
            <h2>Rupak Olee</h2>
            <h4>Senior Software Engineeer</h4>
            <p id="site">oleerup.cloudaccess.host</p>
        </div>    
            <div className="buttons">
                <button>Email</button>
                <button id="linkedIn">LinkedIn</button>
            </div>
    </div>
    )
}
