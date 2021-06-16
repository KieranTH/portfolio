import React from 'react';

import './Main.scss';

import pdfImg from "../../Assets/Images/PPT2PDF.JPG";
import nhsImg from '../../Assets/Images/NHS.png';

import userIcon from '../../Assets/Images/usericon.png';
import skillsIcon from '../../Assets/Images/skills2.png';

import ScrollReveal from 'scrollreveal';

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
    sr.reveal('.button',{delay: 200});
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

                    <a href="#contact" class="button">Contact</a>
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
                        using NodeJS or Python, or by creating websites such as this by using technologies such as a JavaScript framework: React.
                        <br></br>
                        <br></br>
                        I also have experience within areas such as Data Management, by developing and maintaining Databases within MySQL. This is mainly attached to work that was conducted during my degree, but has enabled me to use platforms such as XAMPP to host local
                        applications through Apache (Web) front-end and MySQL (Database) back-end, for a full-stack experience.
                        <br></br>
                        <br></br>
                        Below is a Skill-Chart that represents my strength within each language.
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
                                <span class="skills__name">JAVASCRIPT / NODEJS / React</span>
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
                                <span class="skills__name">Web - HTML / CSS / JS</span>
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
                    <div class="project__area" id="nhsfinder">
                      <div class="project__header">
                        <h2 class="project__title">NHS Location Finder</h2>
                      </div>
                      <div class="project__info">
                      <p class="project__subtitle">Brief Desc:</p>
                      <p class="project__desc">Java based application to return all NHS Registered Facilities within a given radius. Built using JFRame, Apache POI-HSSF and packaged using Maven.
                      <br></br><br></br> Due to packaged nature of application, please use Maven or similar dependancy manager to import all necessary libraries. Program is set as JAR export for future reference.
                      </p>
                      </div>
                      <div class="burger">
                        <a href="javascript:void(0);" class="burgerIcon" onclick="openMenu()"/>
                          <a href="https://github.com/KieranTH/NHSFinder" class="nav__social-icon"><i class='bx bxl-github bx-md bx-tada-hover'></i></a>
                      </div>
                    </div>

                    <div class="project__area" id="discord">
                      <div class="project__header">
                        <h2 class="project__title">Discord Social Bot</h2>
                      </div>
                      <div class="project__info">
                      <p class="project__subtitle">Brief Desc:</p>
                      <p class="project__desc">This Discord bot is built using Java and implementes the Discord API. This application is built using Maven to implement all
                      the needed dependancies, such as JDA (Java API handler for Discord).<br></br><br></br>For personal use please read the given Documentation within the repo. This gives a brief overlook and implementation guide.
                      </p>
                      </div>
                      <div class="burger">
                        <a href="javascript:void(0);" class="burgerIcon" onclick="openMenu()"/>
                          <a href="https://github.com/KieranTH/Social-Bot" class="nav__social-icon"><i class='bx bxl-github bx-md bx-tada-hover'></i></a>
                      </div>
                    </div>

                    <div class="project__area" id="scraper">
                      <div class="project__header">
                        <h2 class="project__title">Web Scraper</h2>
                      </div>
                      <div class="project__info">
                      <p class="project__subtitle">Brief Desc:</p>
                      <p class="project__desc">Web Scraper built using NodeJS, uses CLI and integrates directly with Discord 3rd Party Amazon alert server.
                      <br></br><br></br>
                      Initially built during the Covid-19 GPU shortage, meaning direct use of Discord API for "re-stocking" alerts. Can also be used directly for scraping and purchasing any product on Amazon.
                      </p>
                      </div>
                      <div class="burger">
                        <a href="javascript:void(0);" class="burgerIcon" onclick="openMenu()"/>
                          <a href="https://github.com/KieranTH/Scraper" class="nav__social-icon"><i class='bx bxl-github bx-md bx-tada-hover'></i></a>
                      </div>
                    </div>

                    <div class="project__area" id="ppt">
                      <div class="project__header">
                        <h2 class="project__title">PowerPoint to PDF Converter</h2>
                      </div>
                      <div class="project__info">
                      <p class="project__subtitle">Brief Desc:</p>
                      <p class="project__desc">Java application based on converting any valid PowerPoint to a full PDF. Done by using
                      the Aspose API for convertingfiles. The UI is handled by Java with the use of the JFrame framework.
                      <br></br><br></br>
                      The application has OS selections depending on Thread usage. Meaning the program can be used efficiently on
                      most systems.
                      </p>
                      </div>
                      <div class="burger">
                        <a href="javascript:void(0);" class="burgerIcon" onclick="openMenu()"/>
                          <a href="https://github.com/KieranTH/PPTtoPDF" class="nav__social-icon"><i class='bx bxl-github bx-md bx-tada-hover'></i></a>
                      </div>
                    </div>

                  </div>
                </div>

            </section>

            <section class="contact section" id="contact">
                <h2 class="section-title">Contact</h2>

                <div class="contact__container bd-grid">
                    <form action="" class="contact__form">
                        <input type="text" placeholder="Name" class="contact__input"/>
                        <input type="mail" placeholder="Email" class="contact__input"/>
                        <textarea name="" id="" cols="0" rows="10" class="contact__input"></textarea>
                        <input type="button" value="Submit" class="contact__button button"/>
                    </form>
                </div>
            </section>
        </main>
  );
}
}


export default Main;
