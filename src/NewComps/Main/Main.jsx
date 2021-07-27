import React from 'react';

import './Main.scss';

import pdfImg from "../../Assets/Images/PPT2PDF.JPG";
import nhsImg from '../../Assets/Images/NHS.png';

import userIcon from '../../Assets/Images/usericon.png';
import skillsIcon from '../../Assets/Images/skills2.png';

import ScrollReveal from 'scrollreveal';

import ProjectSection from './ProjectSection';


class Main extends React.Component{

//--- running vanilla JS to create scroll effect from ScrollReveal ---
  componentDidMount(){
    /*===== SCROLL REVEAL ANIMATION =====*/
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    /*SCROLL HOME*/
    sr.reveal('.home__title',{});
    sr.reveal('#title__button',{delay: 200});
    //sr.reveal('.home__img',{delay: 400});
    //sr.reveal('.home__social-icon',{ interval: 200});


    /*SCROLL ABOUT*/
    sr.reveal('.about__img',{});
    sr.reveal('.about__subtitle',{delay: 400});
    sr.reveal('.about__text',{delay: 400});

    /*SCROLL SKILLS*/
    sr.reveal('.skills__subtitle',{});
    sr.reveal('.skills__text',{});
    sr.reveal('.skills__data',{interval: 200});
    sr.reveal('.skills__img',{delay: 600});

    /*SCROLL WORK*/
    sr.reveal('.project__area',{interval: 200});

    /*SCROLL CONTACT*/
    sr.reveal('.contact__input',{interval: 200});


    //--- dark mode ---
  }




render(){
  return(
    <main class="l-main">
            <section class="home bd-grid" id="home">
                <div class="home__data">
                    <h1 class="home__title">Hi,<br></br>I'm <span class="home__title-color">Kieran Hughes</span><span>,</span><br></br>Graduate Software Developer</h1>

                    <a href="#contact" class="button" id="title__button">Contact</a>
                </div>
            </section>


            <section class="about section " id="about">
                <h2 class="section-title">About</h2>
                <div class="about__container bd-grid">
                    <div class="about__img">
                      <img src={userIcon} alt=""/>
                    </div>
                    <div>
                        <h2 class="about__subtitle">I'm Kieran</h2>
                        <p class="about__text">I'm an avid software developer and have recently graduated from Bangor University with a BSc in Computer Science.<br></br>As seen below within skills and projects,
                        the work I've conducted has not all been within the constraints of University. Some projects I have completed are based on either hobby or skill developing applications.
                        </p>
                    </div>
                </div>
            </section>


            <section class="skills section" id="skills">
                <h2 class="section-title">Skills</h2>

                <div class="skills__container bd-grid">
                    <div>
                        <h2 class="skills__subtitle">Development Skills</h2>
                        <p class="skills__text">Within my Degree study, the main scope within learning was using Object Oritentated Programming. This is where my developed skills for languages such as Java, C, C# and C++ come from.
                        Due to this my favoured form of programming is within OOP and developing applications based around this paradigm. I have also honed similar skills by spending time on "side-projects", either creating standalone applications
                        using JavaScript (NodeJS) or Python, or by creating websites such as this by using technologies such as a React.js.
                        <br></br>
                        <br></br>
                        I also have experience within areas such as Data Management, by developing and maintaining Databases within MySQL. This is mainly attached to work that was conducted during my degree, but has enabled me to use platforms such as XAMPP to host local
                        applications through Apache (Web) front-end and MySQL (Database) back-end, for a full-stack experience.
                        <br></br>
                        <br></br>
                        Below is a Skill-Chart that represents my strength within each language and experience derived from previous projects.
                        </p>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bx-coffee skills__icon'></i>
                                <span class="skills__name">Java</span>
                            </div>
                            <div class="skills__bar skills__java">

                            </div>
                            <div>
                                <span class="skills__percentage">95%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-c-plus-plus skills__icon'></i>
                                <span class="skills__name">C / C# / C++</span>
                            </div>
                            <div class="skills__bar skills__c">

                            </div>
                            <div>
                                <span class="skills__percentage">75%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class="bx bxl-nodejs skills__icon"></i>
                                <span class="skills__name">JavaScript / NodeJS / React</span>
                            </div>
                            <div class="skills__bar skills__js">

                            </div>
                            <div>
                                <span class="skills__percentage">80%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-python skills__icon'></i>
                                <span class="skills__name">Python</span>
                            </div>
                            <div class="skills__bar skills__py">

                            </div>
                            <div>
                                <span class="skills__percentage">60%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-html5 skills__icon'></i>
                                <span class="skills__name">Web - HTML / CSS</span>
                            </div>
                            <div class="skills__bar skills__html">

                            </div>
                            <div>
                                <span class="skills__percentage">70%</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={skillsIcon} alt="" class="skills__img"/>
                    </div>
                </div>
            </section>


            <section class="projects section bd-grid" id="projects">
                <h2 class="section-title">Projects</h2>

                <div class="projects__container">
                  <div class="projects__center">

                  <ProjectSection name="NHS Location Finder"
                  desc1="Java based application to return all NHS Registered Facilities within a given radius. Built using JFRame, Apache POI-HSSF and packaged using Maven."
                  desc2="Due to packaged nature of application, please use Maven or similar dependancy manager to import all necessary libraries. Program is set as JAR export for future reference."
                  github="NHSFinder"/>

                  <ProjectSection name="Crime Rate Checker - Police API"
                  desc1="React based website which displays crime statistics from the UK Police API for a given area."
                  desc2="Uses REST API methods for retrieving data from API, and parses all collected data for dynamic use within the website."
                  github="policeapi"/>

                  <ProjectSection name="Discord Social Bot"
                  desc1="This Discord bot is built using Java and implementes the Discord API. This application is built using Maven to implement all the needed dependancies, such as JDA (Java API handler for Discord)."
                  desc2="For personal use please read the given Documentation within the repo. This gives a brief overlook and implementation guide."
                  github="Social-Bot"/>

                  <ProjectSection name="Web Scraper"
                  desc1="Web Scraper built using NodeJS, uses CLI and integrates directly with Discord 3rd Party Amazon alert server."
                  desc2="Initially built during the Covid-19 GPU shortage, meaning direct use of Discord API for 're-stocking' alerts. Can also be used directly for scraping and purchasing any product on Amazon."
                  github="Scraper"/>

                  <ProjectSection name="PowerPoint to PDF Converter"
                  desc1="Java application based on converting any valid PowerPoint to a full PDF. Done by using the Aspose API for converting files. The UI is handled by Java with the use of the JFrame framework."
                  desc2="The application has OS selections depending on Thread usage. Meaning the program can be used efficiently on most systems."
                  github="PPTtoPDF"/>

                  <ProjectSection name="Virtual Reality - Unity Project"
                  desc1="VR Immersive environment built using Unity and the Oculus SDK. Used to create an intutive and immersive learning experience and to demonstrate learning improvements compared to current state of learning. Built using C# and contains assets from Blender and the Unity asset store."
                  desc2="Built as 3rd year university project and used within final year dissertation. Github repo contains all source code - .gitignore is used to reduce clutter - project can be exported to .exe format."
                  github="LearningVR"/>

                  </div>
                </div>

            </section>

            <section class="contact section" id="contact">
                <h2 class="section-title">Contact Me</h2>

                <div class="contact__container bd-grid">
                  <div class="email__container">
                    <a href="mailto:kieran.hughes2@live.co.uk" class="email__link"><i class='bx bx-mail-send bx-md email__icon'></i><h3 class="email__text">Kieran.hughes2@live.co.uk</h3>
                    <input type="button" value="Send an E-mail!" class="email__button button"/></a>
                  </div>
                </div>
            </section>
        </main>
  );
}
}


export default Main;
