import React from 'react'

const EventDetails=(props)=>{
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <h1>Event Name</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className="indigo-text text-darken-3">Happening on 3rd Dec 2020 in New York</p>
                    <p className="blue-text text-darken-3">Posted by ABCD</p>
                </div>
            </div>
        </div>
    )
}

export default EventDetails;
