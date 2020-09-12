const initState={
    events:[
        {
            id:1,
            eventName:"hey event",
            eventAbout:"this is hey event",
            eventPlace:"hey event place",
            eventDate:"12-12-2019",
        },
        {
            id:2,
            eventName:"hello event",
            eventAbout:"this is hello event",
            eventPlace:"hello event place",
            eventDate:"13-12-2019",
        }
    ]
}

const eventReducer=(state=initState,action)=>{
    switch (action.type) {
        case "CREATE_EVENT":
            console.log("created event",action.event);
    
        default:
            break;
    }
    return state;
}

export default eventReducer;