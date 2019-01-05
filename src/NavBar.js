import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./css/NavBar.css";
import { IoLogoGithub } from "react-icons/io";
import About from "./About";
import Portfolio from "./Portfolio";
import App from "./App";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.closeForm = this.closeForm.bind(this);
    this.openForm = this.openForm.bind(this);
  }
  openForm() {
    document.getElementById("id01").style.display = "block";
  }
  closeForm() {
    document.getElementById("id01").style.display = "none";
  }
  componentDidMount() {
    document.title = "Ali Syed Raza | Software Engineer";
    var form = document.getElementById("id01");
    window.onclick = e => {
      if (e.target === form) {
        this.closeForm();
      }
    };
  }
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="NavBar">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <button onClick={this.openForm}>Contact</button>
            </li>
            <li>
              <a className="gitLink" href="https://github.com/alisyedraza99">
                <IoLogoGithub className="logo" />
              </a>
            </li>
          </ul>

          <div id="id01" className="modal">
            <form
              className="modal-content animate"
              action="mailto:alisyedraza99@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="imgcontainer">
                <span
                  onClick={this.closeForm}
                  className="close"
                  title="Close Modal"
                >
                  &times;
                </span>
              </div>

              <div className="container">
                <h3>Let's Build Something Great Together</h3>
                <label htmlFor="name">
                  <b>Name</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  required
                />
                <label htmlFor="email">
                  <b>Email</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  required
                />
                <label htmlFor="message">
                  <b>Message</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Message"
                  name="message"
                  required
                />
                <button type="submit">Send</button>
              </div>
            </form>
          </div>

          <div className="content">
            <Route exact path="/" component={App} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/About" component={About} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default NavBar;
