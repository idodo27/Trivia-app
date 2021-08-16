import React, { Component } from 'react';
import './SignUp.css'
import axios from "axios";

export default class PersonList extends React.Component {
    state = {
        logState: this.props.logState,
        success: this.props.success,
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        fin: ""
    };

    handleChange = (event) => {
        this.setState({
            username: document.getElementById("uName").innerHTML.value,
            passwor: document.getElementById("pass").innerHTML.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        const formData = new FormData();
        formData.append("username", this.state.username);
        formData.append("password", this.state.password);
        formData.append("firstname", this.state.firstname);
        formData.append("lastname", this.state.lastname);
        axios
            .post("url_of_server", formData)
            .then((res) => {
                if (res.data == "success") {

                    this.setState({ fin: res.data, success: true, logState: false })
                    localStorage.setItem("user", this.state.success);
                    localStorage.setItem("name", this.state.username);
                    window.location.reload();
                    ;
                }
                else {
                    this.setState({ fin: "Wrong credentials" })
                }
            }).catch((err) => {
                console.log(err);
            });

    };

    logOut = () => {
        localStorage.clear();
        this.setState({ success: false, fin: "" });
    }

    render() {
        return (
            <div>
                <div className="helloDiv">
                    <h1 className="nameHeader">
                        {this.state.fin.length > 0 && this.state.fin !== "Wrong credentials" ? "Welcome " + this.state.fin : ""}
                        {this.state.fin == "Wrong credentials" ? this.state.fin : ""}
                    </h1>
                </div>
                <div className="mainDiv">

                    <div className="formDiv">

                        <form>
                            <label>
                                <input 
                                    type="text" 
                                    placeholder="Enter your first name" 
                                    name="firstname" 
                                    id="fName" 
                                    className="inputs" 
                                    onChange={(event) => {
                                        this.state.firstname = event.target.value
                                    }}/>
                            </label>
                            <label>
                                <input 
                                    type="text" 
                                    placeholder="Enter your last name" 
                                    name="lastname" 
                                    id="lName" 
                                    className="inputs"
                                    onChange={(event) => {
                                        this.state.lastname = event.target.value
                                    }} />
                            </label>
                            <label>
                                <input
                                    className="inputs"
                                    type="text"
                                    id="uName"
                                    name="username"
                                    placeholder="Enter your username:"
                                    onChange={(event) => {
                                        this.state.username = event.target.value
                                    }}
                                />
                            </label>
                            <label>

                                <input
                                    className="inputs"
                                    type="password"
                                    id="pass"
                                    name="password"
                                    placeholder="Enter your password:"
                                    onChange={(event) => {
                                        this.state.password = event.target.value;
                                    }}
                                />
                            </label>
                            <button onClick={this.handleSubmit} className="submitBtn" type="submit">
                                Login
                            </button>
                        </form>
                    </div>
                </div></div>
        );
    }
}
