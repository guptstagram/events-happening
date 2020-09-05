import React from "react";

class Signup extends React.Component{
    state={
        firstName:"",
        lastName:"",
        email:"",
        password:""
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }

    handleChange=(e)=>{
        this.setState({
                [e.target.id]:e.target.value
            }
        )
    }

    render(){
        return(
            <div className="container">
                <h1>Sign Up</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit} className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="firstName" type="text" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="firstName">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="lastName" type="text" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="lastName">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="email">E-mail</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <button className="btn waves-effect waves-light">Submit
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

export default Signup;