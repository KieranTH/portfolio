import React from 'react';


import './HeaderNav.scss';

class HeaderNav extends React.Component{

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

        if(icon.className===("bx bx-moon"))
        {
          icon.className="bx bxs-moon";
          return;
        }

        if(icon.className==="bx bxs-moon")
        {
          icon.className="bx bx-moon";
          return;
        }
      })
    }
  }

  changeToggle();
}


render(){
  return(
    <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                    <a href="#" class="nav__logo">Kieran</a>
                </div>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
                        <li class="nav__item"><a href="#projects" class="nav__link">Projects</a></li>
                        <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
                    </ul>
                </div>
                <div class="nav__icons" id="nav-icons">
                  <ul class="nav__list">
                    <li class="nav__item"><a href="https://www.linkedin.com/in/kieran-th" class="nav__social-icon"><i class='bx bxl-linkedin'></i></a></li>
                    <li class="nav__item"><a href="https://github.com/KieranTH" class="nav__social-icon"><i class='bx bxl-github' ></i></a></li>
                  </ul>
                </div>

                <div class="nav__dark" id="dark-toggle" onclick="changeToggle()">
                  <i class="bx bx-moon" id="darkmodeToggle"></i>
                </div>
                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>
  );
}
}


export default HeaderNav;
