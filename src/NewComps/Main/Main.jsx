import React from 'react';

import './Main.scss';

import pdfImg from "../../Assets/Images/PPT2PDF.JPG";
import nhsImg from '../../Assets/Images/NHS.png';

import userIcon from '../../Assets/Images/usericon.png';
import skillsIcon from '../../Assets/Images/skills2.png';

import ScrollReveal from 'scrollreveal';

import ProjectSection from './ProjectSection';


class Main extends React.Component{

  constructor(props)
  {
    super(props);
    this.state = {
      langFromParent: this.props.language
    }
    //console.log(this.state.langFromParent);
  }

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

// componentDidUpdate(){
//   this.state.langFromParent = this.props.language;
// }



render(){
  return(
    <main class="l-main" key={this.props.language}>
            <section class="home bd-grid" id="home">
                <div class="home__data">
                    <h1 class="home__title">{this.props.language.intro.welcome},<br></br>{this.props.language.intro.prename} <span class="home__title-color">Kieran Hughes</span><span> {this.props.language.intro.postname},</span><br></br>{this.props.language.intro.dev}</h1>

                    <a href="#contact" class="button" id="title__button">{this.props.language.intro.contact}</a>
                </div>
            </section>


            <section class="about section " id="about">
                <h2 class="section-title">{this.props.language.about.title}</h2>
                <div class="about__container bd-grid">
                    <div class="about__img">
                      <img src={userIcon} alt=""/>
                    </div>
                    <div>
                        <h2 class="about__subtitle">{this.props.language.about.name}</h2>
                        <p class="about__text">{this.props.language.about.desc1}<br></br>{this.props.language.about.desc2}
                        </p>
                    </div>
                </div>
            </section>


            <section class="skills section" id="skills">
                <h2 class="section-title">{this.props.language.skills.title}</h2>

                <div class="skills__container bd-grid">
                    <div>
                        <h2 class="skills__subtitle">{this.props.language.skills.name}</h2>
                        <p class="skills__text">{this.props.language.skills.desc1}
                        <br></br>
                        <br></br>
                        {this.props.language.skills.desc2}
                        <br></br>
                        <br></br>
                        {this.props.language.skills.desc2}
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
                <h2 class="section-title">{this.props.language.projects[0][0].title}</h2>

                <div class="projects__container">
                  <div class="projects__center">

                  <ProjectSection name={this.props.language.projects[1][0].data}
                  desc1={this.props.language.projects[1][1].data}
                  desc2={this.props.language.projects[1][2].data}
                  brief={this.props.language.projects[0][0].brief}
                  github="NHSFinder"/>

                  <ProjectSection name={this.props.language.projects[2][0].data}
                  desc1={this.props.language.projects[2][1].data}
                  desc2={this.props.language.projects[2][2].data}
                  brief={this.props.language.projects[0][0].brief}
                  github="policeapi"/>

                  <ProjectSection name={this.props.language.projects[3][0].data}
                  desc1={this.props.language.projects[3][1].data}
                  desc2={this.props.language.projects[3][2].data}
                  brief={this.props.language.projects[0][0].brief}
                  github="Social-Bot"/>

                  <ProjectSection name={this.props.language.projects[4][0].data}
                  desc1={this.props.language.projects[4][1].data}
                  desc2={this.props.language.projects[4][2].data}
                  brief={this.props.language.projects[0][0].brief}
                  github="Scraper"/>

                  <ProjectSection name={this.props.language.projects[5][0].data}
                  desc1={this.props.language.projects[5][1].data}
                  desc2={this.props.language.projects[5][2].data}
                  brief={this.props.language.projects[0][0].brief}
                  github="PPTtoPDF"/>

                  <ProjectSection name={this.props.language.projects[6][0].data}
                  desc1={this.props.language.projects[6][1].data}
                  desc2={this.props.language.projects[6][2].data}
                  brief={this.props.language.projects[0][0].brief}
                  github="LearningVR"/>

                  </div>
                </div>

            </section>

            <section class="contact section" id="contact">
                <h2 class="section-title">{this.props.language.contact.title}</h2>

                <div class="contact__container bd-grid">
                  <div class="email__container">
                    <a href="mailto:kieran.hughes2@live.co.uk" class="email__link"><i class='bx bx-mail-send bx-md email__icon'></i><h3 class="email__text" style={{animation: 'typewriter 1s'}}>Kieran.hughes2@live.co.uk</h3>
                    <input type="button" value={this.props.language.contact.button} class="email__button button"/></a>
                  </div>
                </div>
            </section>
        </main>
  );
}
}


export default Main;
