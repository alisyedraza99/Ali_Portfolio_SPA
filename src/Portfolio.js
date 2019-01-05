import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/Portfolio.css";
import Item from "./Item";
//import sample from "./images/sample.jpg";

//Banner Images:
import AnalogClock from "./images/ProjectBanners/AnalogClock.png";
import DrumKit from "./images/ProjectBanners/DrumKit.png";
import JavaPaint from "./images/ProjectBanners/JavaPaint.png";
import LastIsland from "./images/ProjectBanners/LastIsland.png";
import MoleGenVR from "./images/ProjectBanners/MoleGenVR.png";
import PortfolioSPA from "./images/ProjectBanners/PortfolioSPA.png";
import PortfolioTemplate from "./images/ProjectBanners/PortfolioTemplate.png";
import ResumeTemplate from "./images/ProjectBanners/ResumeTemplate.png";
import ScareEmOff from "./images/ProjectBanners/ScareEmOff.png";
import SpeechRecognition from "./images/ProjectBanners/SpeechRecognition.png";
import TypingSpeedTester from "./images/ProjectBanners/TypingSpeedTester.png";
import WebPaint from "./images/ProjectBanners/WebPaint.png";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Last Island",
          disc:
            "This game was the first project undertaken by Frozen Water, a self-started company that continues to grow. The project was built using Unity3D(C#), Blender and Inkscape.",
          role:
            "Worked on this project independently and performed all tasks necessary to get the game up and running. Tasks included but were not limited to: Designed the level stages using Blender and Unity3d, Implemented Unity Ads, Set up super-classes, sub-classes and required methods, Animated, rigged and modeled each 3d asset in Blender, Designed UI elements in Inkscape, Implemented the Google Play Games Service API to set up leaderboards and achievements, Published on Google Play",
          open: false,
          banner: LastIsland
        },
        {
          name: "Molecule Generation VR",
          disc:
            "Working on developing a Virtual Reality application designed to simulate the various processes that take place inside an e-coli bacteria cell using Blender and Unity3d. ",
          role:
            "This is a project at my current workplace (University of Toronto). My own contributions to the project so far include: designing FSM to transition between various actor states, integrating SteamVR plugin to support all VR headsets, creating a graphing system that calculates and presents graphical representation of molecules present in the scene, developing a level managing system that allows users to switch between levels while maintaining their scores in each level.",
          open: false,
          banner: MoleGenVR
        },
        {
          name: "Java Paint",
          disc:
            "An MVC Paint application modelled after MS Paint the was built using Java.",
          role:
            "Worked on this project in a team of four people. My contributions included: building the GUI using JavaFX, making use of Command design pattern to access shape data and the Strategy design Pattern to handle shape drawing algorithms. Designed an FSM to parse through a save file and the Visitor pattern  was used to assist in saving the files.",
          open: false,
          banner: JavaPaint
        },
        {
          name: "Portfolio SPA",
          disc:
            "The Single page application you are currently looking at! This SPA was built using React, JavaScript, CSS and HTML.",
          role:
            "Worked independently on this project. In order to have a functional SPA, I made use of react-router to allow for routing between my web components. For the portfolio section, I made use of CSS flexbox to allow for an organized collection of projects. Furthermore, to get the tilting effect on the landing page, I made use of the library, react-tilt. ",
          open: false,
          banner: PortfolioSPA
        },
        {
          name: "Drum Kit",
          disc:
            "Key Input Based Drum Kit Web Application built using JavaScript, HTML5 and CSS",
          role:
            "Worked independently on this project, which is now open sourced. I wrote JavaScript functions to dynamically alter CSS elements, designed different difficulty levels for typing test and integrated click, key up, and key down inputs to play drum sound effects. The GUI was built by altering SVGs.",
          open: true,
          banner: DrumKit,
          code: "https://github.com/alisyedraza99/Key-Based-Drum-Kit"
        },
        {
          name: "Analog Clock",
          disc: "Analog Clock Web Application built using JavaScript, HTML5.",
          role:
            "Worked independently on this project, which is now open sourced. The GUI was designed by editing SVG elements. Using the JavaScript Date object, I wrote a method that would calculate the angle at which the clock hands should be at any given second.",
          open: true,
          banner: AnalogClock,
          code: "https://github.com/alisyedraza99/JavaScript-Analog-Clock"
        },
        {
          name: "Speech Recognition Web App",
          disc:
            "Speech Recognition Web Application built using in Vanilla JavaScript, HTML5, CSS.",
          role:
            "Worked independently on this project, which is now open sourced. I created SpeechRecognition object using the Web Speech API and wrote JavaScript functions to set up new paragraph elements every time speaker completes a sentence.",
          open: true,
          banner: SpeechRecognition,
          code: "https://github.com/alisyedraza99/Speech-Recognition"
        },
        {
          name: "Typing Speed Test",
          disc:
            "Typing Speed Testing Web Application built using JavaScript, HTML5 and CSS.",
          role:
            "Worked independently on this project, which is now open sourced. I wrote JavaScript functions to dynamically alter CSS elements, designed different difficulty levels for typing test and integrated click, key up, and key down inputs start and stop timer.",
          open: true,
          banner: TypingSpeedTester,
          code: "https://github.com/alisyedraza99/Typing-Speed-Tester"
        },
        {
          name: "Web Paint",
          disc: "A web Application built using JavaScript and HTML.",
          role:
            "Worked independently on this project, which is now open sourced. I wrote JavaScript functions to dynamically alter the HTML canvas element and integrated mouse-up and mouse-down inputs.",
          open: true,
          banner: WebPaint,
          code: "https://github.com/alisyedraza99/Web-Paint"
        },
        {
          name: "Company Page Template",
          disc:
            "A simple resume template made using CSS and HTML5. This was another web project I worked in order to gain a better understanding of these front end languages.",
          role:
            "Worked independently on this project, which is now open-sourced. All content was adjusted and styled to make it clear and effective resume.",
          open: true,
          banner: ResumeTemplate,
          code: "https://github.com/alisyedraza99/Company-Page-Template"
        },
        {
          name: "Portfolio Template",
          disc:
            "A simple resume template made using CSS and HTML5. Another web project to improve my front-end skills.",
          role:
            "Worked independently on this project, which is now open-sourced. For the projects section, I used CSS grids to have all the projects organized in a collection. I achieved the parallax effect using the position CSS style property",
          open: true,
          banner: PortfolioTemplate,
          code: "https://github.com/alisyedraza99/Portfolio-Template"
        },
        {
          name: "Scare 'Em Off",
          disc:
            "This was the first complete Unity3d game that I developed. The models were made in Blender and all the programming was done using C#.",
          role:
            "I worked independently on this project, which is now open sourced. To get the game up and running, I integrated click, drag, key down and key up inputs for movement and interactions, implemented the Unity3d Ray-cast object to enable game object interactions. I modeled, rigged and animated the assets in Blender and designed and AI system which would randomly generate waypoints for the enemies to follow. Furthermore, I designed a wave generating system which would allow for a particular number of enemies to be spawned in each wave.",
          open: false,
          banner: ScareEmOff
        }
      ]
    };
    this.addElement = this.addElement.bind(this);
  }

  componentDidMount() {
    this.addElement();
  }

  addElement() {
    var x = document.getElementById("wrapper");
    for (var i = 0; i < this.state.items.length; i++) {
      let project = this.state.items[i];
      let name = this.state.items[i].name;

      let div = document.createElement("div");
      div.className = "box";
      div.innerHTML = name;

      ReactDOM.render(<img src={project.banner} alt="project banner" />, div);

      let overlay = document.createElement("div");
      overlay.className = "overlay";

      let txt = document.createElement("h2");
      txt.innerHTML = name;
      overlay.appendChild(txt);
      div.appendChild(overlay);
      //ReactDOM.render(<div className="overlay"><a href="#" className="icon" title="User Profile"></a><i className="fa fa-user"></i></div>, div);

      x.appendChild(div);

      // let btn = document.createElement("button");
      div.addEventListener("click", () => {
        ReactDOM.unmountComponentAtNode(document.getElementById("wrapper"));
        ReactDOM.render(
          <Item project={project} reset={this.addElement} />,
          document.getElementById("wrapper")
        );
      });
      //div.appendChild(btn);
    }
  }

  render() {
    return (
      <div className="Portfolio">
        <div id="wrapper" />
        {/* <div id="itemContent" /> */}
      </div>
    );
  }
}

export default Portfolio;
