import React from 'react';
import HomeNotification from './HomeNotification';
import EventList from '../events/EventList';
import {connect} from "react-redux";

class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <EventList events={this.props.events}/>
                    </div>
                    <div className="col s12 m4">
                        <HomeNotification/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    events:state.event.events
})

export default connect(mapStateToProps)(Home);