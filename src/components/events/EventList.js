import React from 'react';
import EventCard from "./EventCard";

const EventList=({events})=>{
    return(
        <>
        {events && events.map(event=>{
            return(
                <EventCard event={event} key={event.id}/>
            )
        })}
        </>
    )
}

export default EventList;