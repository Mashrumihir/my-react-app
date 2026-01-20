import React,{Component} from "react";
class RenderCond extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textColor:"black",
            backColor:"white",
        };
    }

        toggle = () => {
            this.setState({ isOn: !this.state.isOn });
        };
        render() {
            return (
                <div>
                    {/* <button onClick={this.toggle}>{this.state.isOn ? "ON" : "OFF"}</button> */}
                    <button onClick={() => this.setState({ textColor: "green" })}>Green</button>
                    <button onClick={() => this.setState({ textColor: "blue" })}>Blue</button>
                    <button onClick={() => this.setState({ textColor: "yellow" })}>Yellow</button>
                    <button onClick={() => this.setState({ textColor: "red" })}>Red</button>
                    <br/>
                    <button onClick={() => this.setState({ backColor: "green" })}>Green</button>
                    <button onClick={() => this.setState({ backColor: "blue" })}>Blue</button>
                    <button onClick={() => this.setState({ backColor: "yellow" })}>Yellow</button>
                    <button onClick={() => this.setState({ backColor: "red" })}>Red</button>
                    <br/>
                    <p style={{ color: this.state.textColor, backgroundColor: this.state.backColor }}>Sample Text</p>
                </div>
            );
        }
    }
export default RenderCond;