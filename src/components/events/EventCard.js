import React from 'react';
import cardImg from "../../assets/mages/ss.jpg"

const EventCard=()=>{
    return(
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={cardImg} style={{height:"200px"}}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                <p><a href="#">This is a link</a></p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                <p className="indigo-text text-darken-3">Happening on 3rd Dec 2020 in New York</p>
                <p className="blue-text text-darken-3">Posted by ABCD</p>
            </div>
        </div>
    )
}

export default EventCard;