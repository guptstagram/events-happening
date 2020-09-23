export const createEvent=(event)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        dispatch({type:"CREATE_EVENT",event:event});
    }
}