import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/Item.css";
import { IoLogoGithub } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import sample from "./images/sample.jpg";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.on = this.on.bind(this);
    this.off = this.off.bind(this);
    this.hideCode = this.hideCode.bind(this);
  }

  on() {
    document.getElementById(this.props.name).style.display = "block";
  }

  hideCode() {
    if (this.props.project.open === false) {
      document
        .getElementById("gitCode")
        .setAttribute("style", "display: none;");
    }
  }
  off() {
    ReactDOM.unmountComponentAtNode(document.getElementById("wrapper"));
    this.props.reset();
  }

  componentDidMount() {
    console.log(this.props.name);
    this.hideCode();
  }

  render() {
    return (
      <div className="Item">
        <div className="clearfix">
          <button onClick={this.off}>
            <IoMdArrowBack className="logo" />
          </button>
          <h1>{this.props.project.name}</h1>
          <p>{this.props.project.disc}</p>
          <h3>Role</h3>

          <p>{this.props.project.role}</p>
          <a href={this.props.project.code}>
            <button id="gitCode">
              Get The Code <IoLogoGithub className="logo" />
            </button>
          </a>
          <img
            className="img2"
            src={this.props.project.banner}
            alt="Pineapple"
          />
        </div>
      </div>
    );
  }
}

export default Item;
