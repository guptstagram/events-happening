import React from "react";

class Login extends React.Component{
    state={
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
                <h1>Log in</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit} className="col s12">
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

export default Login;