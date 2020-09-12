import React from "react";
import {connect} from "react-redux";
import {createEvent} from "../../store/actions/eventActions";
import M from 'materialize-css';

class CreateEvent extends React.Component{
    state={
        eventName:"",
        eventAbout:"",
        eventPlace:"",
        eventDate:"",
        eventBy:""
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createEvent(this.state);
    }

    handleChange=(e)=>{
        this.setState({
                [e.target.id]:e.target.value
            }
        )
    }

    componentDidMount=()=>{
        var elems = document.querySelectorAll('.datepicker');
        var instances = M.Datepicker.init(elems, {
                defaultDate: new Date(),
                onSelect:date=>{
                    this.setState({
                        eventDate:(`${date.getDate()}-${date.toLocaleString('default', { month: 'short' })}-${date.getFullYear()}`)
                    })
                },
                autoClose: true
            } 
        );
    }

    render(){
        return(
            <div className="container">
                <h1>Add New Event</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit} className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="eventName" type="text" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="eventName">Event Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" className="datepicker"/>
                                <label htmlFor="eventDate">Event Date</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="eventPlace" type="text" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="eventPlace">Event Place</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <textarea id="eventAbout" className="materialize-textarea" onChange={this.handleChange}></textarea>
                            <label htmlFor="eventAbout">About the Event</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <button className="btn waves-effect waves-light">Add Event
                                <i className="material-icons right">send</i>
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        createEvent:(event)=>dispatch(createEvent(event))
    }
}

export default connect(null,mapDispatchToProps)(CreateEvent);