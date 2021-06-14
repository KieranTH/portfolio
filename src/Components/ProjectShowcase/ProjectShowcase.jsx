import React from 'react';
import "./ProjectShowcase.scss";
import "../QuickProjectButtons/QuickProjectButtons";
import pdfImg from "../../Images/PPTtoPDFBefore.PNG";


//--- logos and images ---
import {ReactComponent as JavaIcon} from '../../Images/java-icon.svg';
import {ReactComponent as DiscordLogo} from '../../Images/discord-seeklogo.com.svg';
import {ReactComponent as NodeLogo} from '../../Images/nodejs-icon.svg';
import {ReactComponent as PythonLogo} from '../../Images/python.svg';

function ProjectShowcase(props){
  return(
    <div className="projects">
      <h2 className="project-main-title">Brief Project Showcase</h2>
      <div className="project-showcase">
        <div className="project-item">
          <h3 className="project-item-title">Web Scraper - Amazon Related</h3>
          <p className="project-item-desc">
          This Web Scraper was built amongst the GPU shortage due to Covid-19.
          The application is built using NodeJS and has a fully independant Command Line based Interface.
          <br></br>
          <br></br>
          Integration with Discord allows for swift and easy implementation.
          </p>
          <NodeLogo id="node" className="Logo"/>
          <PythonLogo className="Logo"/>
        </div>
        <div className="project-item">
          <h3 className="project-item-title">PowerPoint to PDF Converter</h3>
          <p className="project-item-desc">
          This application is based on converting any valid PowerPoint to a full PDF. This is done by using
          the Aspose API for converting the files. The UI is handled by Java with the use of the JFrame framework.
          <br></br>
          <br></br>
          The application has OS selections depending on Thread usage. Meaning the program can be used efficiently on
          most systems.
          </p>
          <JavaIcon className="Logo"/>
        </div>
        <div className="project-item">
          <h3 className="project-item-title">Discord Social Bot</h3>
          <p className="project-item-desc">
          This Discord bot is built using Java and implementes the Discord API. This application is built using Maven to implement all
          the needed dependancies, such as JDA (Java API handler for Discord).
          <br></br>
          <br></br>
          For personal use please read the given Documentation within the repo. This gives a brief overlook and implementation guide.
          </p>
          <DiscordLogo className="Logo"/>
        </div>
      </div>
    </div>
  );
}

export default ProjectShowcase;
