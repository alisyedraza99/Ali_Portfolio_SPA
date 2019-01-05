import React, { Component } from "react";
//import anime from "animejs";
import Tilt from "react-tilt";
import Ali_Avatar_V1 from "./images/Ali_Avatar_V1.svg";
import Ali_Avatar_Joker from "./images/Ali_Avatar_Joker.svg";
import Ali_Avatar_Kratos from "./images/Ali_Avatar_Kratos.svg";
import Ali_Avatar_Soccer from "./images/Ali_Avatar_Soccer.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: Ali_Avatar_V1,
      width: 0,
      height: 0,
      x: 0,
      y: 0
    };
    this.changeAvatar = this.changeAvatar.bind(this);
    this.resetAvatar = this.resetAvatar.bind(this);
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateWindowDimensions);
  // }

  // updateWindowDimensions() {
  //   this.setState({ width: window.innerWidth, height: window.innerHeight });
  // }

  resetAvatar() {
    if (this.state.avatar !== Ali_Avatar_V1) {
      this.state.avatar = Ali_Avatar_V1;
    }
  }
  changeAvatar() {
    var avatars = [Ali_Avatar_Joker, Ali_Avatar_Soccer, Ali_Avatar_Kratos];
    var random = Math.floor(Math.random() * avatars.length);
    this.setState({
      avatar: avatars[random]
    });
  }

  _onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }

  componentDidMount() {
    // this.updateWindowDimensions();
    // window.addEventListener("resize", this.updateWindowDimensions);
  }
  render() {
    // var style = {
    //   position: "absolute",
    //   left: this.state.x + "px",
    //   top: this.state.y + "px"
    // };

    return (
      <div className="App" onMouseMove={this._onMouseMove.bind(this)}>
        <header className="App-header">
          <p>Hi, my name is</p>
          <h1 className="App-title">Ali Raza</h1>
          <p>Software Engineer + Student</p>
          <Tilt
            className="Tilt"
            options={{ max: 25 }}
            style={{ height: 250, width: 250 }}
          >
            <img
              onMouseEnter={this.changeAvatar}
              onMouseLeave={this.resetAvatar}
              src={this.state.avatar}
              className="Ali-avatar"
              alt="logo"
            />
          </Tilt>
          {/* <div className="follow" style={style}>
            Catch Me!
          </div> */}
        </header>
      </div>
    );
  }
}

export default App;
