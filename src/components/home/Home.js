import React from 'react';
import HomeNotification from './HomeNotification';
import EventList from '../events/EventList';

class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <EventList/>
                    </div>
                    <div className="col s12 m4">
                        <HomeNotification/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;