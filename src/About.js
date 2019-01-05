import React, { Component } from "react";
import "./css/About.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="About">
        <h1>About Me</h1>
        <p>
          I am an aspiring software engineer pursuing a Computer Science degree
          at the University of Toronto. My love for exploring new technologies
          pushes me to teach myself new tools, frameworks and languages that can
          help me develop my skillset. As of now, I am familiar with the
          following technologies:
        </p>

        <div class="row">
          <div class="column">
            <div class="card">
              <h3>Languages</h3>
              <ul>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Python</li>
                <li>C#</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <h3>Frameworks, Libraries and SDKs</h3>
              <ul>
                <li>ReactJS (+ react-router and react-icons)</li>
                <li>AnimeJS</li>
                <li>TiltJS</li>
                <li>SteamVR</li>
                <li>Android SDK</li>
              </ul>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <h3>Other Tools and Technologies</h3>
              <ul>
                <li>Unity3D</li>
                <li>Blender</li>
                <li>InkScape</li>
                <li>VideoPad</li>
                <li>LightWorks</li>
                <li>React Developer Tools</li>
              </ul>
            </div>
          </div>
        </div>
        <p>Projects for each of these can be found int the Portfolio section</p>
        <div className="Education">
          <h3>Education</h3>
          <h4>University of Toronto</h4>
          <p>Specialist: Computer Science, Minor: Mathematics</p>
          <p>Second Year – Current CGPA: 3.89</p>
        </div>
      </div>
    );
  }
}

export default About;
