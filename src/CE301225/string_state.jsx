import React,{ Component } from "react";
class SringState extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            age:"",
        };
    }
    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }
    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }
    handleAgeChange = (e) => {
        this.setState({ age: e.target.value });
    };
    consolelog = () => {
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.age);
    };
    render() {
        const { name, email, age } = this.state;
        return (
        <div>
            
            
            <input type="text" name="name" value={name} onChange={this.handleNameChange} placeholder="Enter your name" />
            <input type="email" name="email" value={email} onChange={this.handleEmailChange} placeholder="Enter your email" />
            <input type="number" name="age" value={age} onChange={this.handleAgeChange} placeholder="Enter your age" />
            <button onClick={this.consolelog}>Submit</button>
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            <h2>Age: {age}</h2>
        </div>
        );
    }
}
export default SringState;