import React from 'react';


import './HeaderNav.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'

import {Tooltip} from '@material-ui/core';
import {createMuiTheme,MuiThemeProvider,withStyles} from '@material-ui/core/styles';

class HeaderNav extends React.Component{

  constructor(props)
  {
    super(props);
    this.state = {
      lang: '',
      langFromParent: this.props.language,
      mode: 'light'
    }
    //console.log("lang" + this.state.langFromParent);
  }

//--- running vanilla JS to create mobile-nav bar ---
componentDidMount(){

  /*===== MENU SHOW =====*/
  const showMenu = (toggleId, navId) =>{
      const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId)

      if(toggle && nav){
          toggle.addEventListener('click', ()=>{
              nav.classList.toggle('show')
          })
      }
  }
  showMenu('nav-toggle','nav-menu')

  //===== ACTIVE AND REMOVE MENU =====
  const navLink = document.querySelectorAll('.nav__link');

  function linkAction(){
    //Active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction));



  //--- darkmode ---
  const changeToggle = () =>{


    var icon = document.getElementById('darkmodeToggle');

    if(icon)
    {
      icon.addEventListener('click', ()=>{
        var element = document.body;
        element.classList.toggle("dark-mode");

        var test = document.getElementById("dark-toggle");

        if(icon.className===("bx bx-moon"))
        {

          this.setState({
            mode: 'dark'
          });
          icon.className="bx bxs-moon";
          return;
        }

        if(icon.className==="bx bxs-moon")
        {
          this.setState({
            mode: 'light'
          });
          icon.className="bx bx-moon";
          return;
        }
      })
    }
  }

  changeToggle();

}

// componentDidUpdate(){
//   this.state.langFromParent = this.props.language;
//   console.log(this.state.langFromParent);
// }





render(){
  //--- light mode tooltip | not ideal to condition render like this ---
  if(this.state.mode === "light")
  {
    var theme = createMuiTheme({
      overrides:{
        MuiTooltip: {
          tooltip:{
            color: "#d4d9e4",
            backgroundColor:"#2E3047"
          },
          arrow:{
            color: "#2E3047"
          }
        }
      }
    })
    return(
      <header class="l-header" key={this.props.language}>
              <MuiThemeProvider theme={theme}><nav class="nav bd-grid">
                  <div>
                      <a href="#" class="nav__logo">Kieran</a>
                  </div>

                  <div class="nav__menu" id="nav-menu">
                      <ul class="nav__list">
                          <li class="nav__item"><a href="#home" class="nav__link active">{this.props.language[0].data}</a></li>
                          <li class="nav__item"><a href="#about" class="nav__link">{this.props.language[1].data}</a></li>
                          <li class="nav__item"><a href="#skills" class="nav__link">{this.props.language[2].data}</a></li>
                          <li class="nav__item"><a href="#projects" class="nav__link">{this.props.language[3].data}</a></li>
                          <li class="nav__item"><a href="#contact" class="nav__link">{this.props.language[4].data}</a></li>
                      </ul>
                  </div>
                  <div class="nav__icons" id="nav-icons">
                    <ul class="nav__list">
                      <li class="nav__item"><Tooltip title="LinkedIn" className="nav__tool" arrow="true"><a href="https://www.linkedin.com/in/kieran-th" class="nav__social-icon"><i class='bx bxl-linkedin'></i></a></Tooltip></li>
                      <li class="nav__item"><Tooltip title="Github" className="nav__tool" arrow="true"><a href="https://github.com/KieranTH" class="nav__social-icon"><i class='bx bxl-github' ></i></a></Tooltip></li>
                    </ul>
                  </div>

                  <Tooltip title="Appearance" className="nav__tool" arrow="true"><div class="nav__dark" id="dark-toggle" onclick="changeToggle()">
                    <i class="bx bx-moon" id="darkmodeToggle"></i>
                  </div></Tooltip>

                  <Tooltip title="Language" className="nav__tool" arrow="true"><div className="nav__translate">
                    <FontAwesomeIcon icon={faGlobeEurope} className="translate__icon" onClick={this.props.handleSetLanguage}/>
                  </div></Tooltip>


                  <div class="nav__toggle" id="nav-toggle">
                      <i class='bx bx-menu'></i>
                  </div>
              </nav></MuiThemeProvider>
          </header>
    );
  }
  else if(this.state.mode === "dark")
  {
    //--- dark mode ---
    var theme = createMuiTheme({
      overrides:{
        MuiTooltip: {
          tooltip:{
            color: "#4070F4",
            backgroundColor:"#ddd"
          },
          arrow:{
            color: "#ddd"
          }
        }
      }
    })
    return(
      <header class="l-header" key={this.props.language}>
              <MuiThemeProvider theme={theme}><nav class="nav bd-grid">
                  <div>
                      <a href="#" class="nav__logo">Kieran</a>
                  </div>

                  <div class="nav__menu" id="nav-menu">
                      <ul class="nav__list">
                          <li class="nav__item"><a href="#home" class="nav__link active">{this.props.language[0].data}</a></li>
                          <li class="nav__item"><a href="#about" class="nav__link">{this.props.language[1].data}</a></li>
                          <li class="nav__item"><a href="#skills" class="nav__link">{this.props.language[2].data}</a></li>
                          <li class="nav__item"><a href="#projects" class="nav__link">{this.props.language[3].data}</a></li>
                          <li class="nav__item"><a href="#contact" class="nav__link">{this.props.language[4].data}</a></li>
                      </ul>
                  </div>
                  <div class="nav__icons" id="nav-icons">
                    <ul class="nav__list">
                      <li class="nav__item"><Tooltip title="LinkedIn" className="nav__tool" arrow="true"><a href="https://www.linkedin.com/in/kieran-th" class="nav__social-icon"><i class='bx bxl-linkedin'></i></a></Tooltip></li>
                      <li class="nav__item"><Tooltip title="Github" className="nav__tool" arrow="true"><a href="https://github.com/KieranTH" class="nav__social-icon"><i class='bx bxl-github' ></i></a></Tooltip></li>
                    </ul>
                  </div>

                  <Tooltip title="Appearance" className="nav__tool" arrow="true"><div class="nav__dark" id="dark-toggle" onclick="changeToggle()">
                    <i class="bx bx-moon" id="darkmodeToggle"></i>
                  </div></Tooltip>

                  <Tooltip title="Language" className="nav__tool" arrow="true"><div className="nav__translate">
                    <FontAwesomeIcon icon={faGlobeEurope} className="translate__icon" onClick={this.props.handleSetLanguage}/>
                  </div></Tooltip>


                  <div class="nav__toggle" id="nav-toggle">
                      <i class='bx bx-menu'></i>
                  </div>
              </nav></MuiThemeProvider>
          </header>
    );
  }
}
}


export default HeaderNav;
