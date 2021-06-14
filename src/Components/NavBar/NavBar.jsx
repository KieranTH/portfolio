import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './NavBar.scss';


function NavBar(props)
{
  return(
    <div className="header-container">
      <div className="header-mobile">
        <Menu closeOnDocument className={"header-mobile-menu"}>
          <a id="home" className="header-mobile-menu-item" href="/"><FontAwesomeIcon icon={faHome}/>  Home</a>
          <a id="about" className="header-mobile-menu-item" href="/about"><FontAwesomeIcon icon={faInfoCircle}/>  About</a>
          <a id="repos" className="header-mobile-menu-item" href="/repos"><FontAwesomeIcon icon={faGithub}/>  Repos</a>
          <a id="contact" className="header-mobile-menu-item" href="/contact"><FontAwesomeIcon icon={faAt}/>  Contact</a>
        </Menu>
      </div>

      <div className="header-desktop">
        <Menu closeOnDocument className={"header-desktop-menu"}>
          <a id="home" className="header-desktop-menu-item" href="/"><FontAwesomeIcon icon={faHome}/>  Home</a>
          <a id="about" className="header-desktop-menu-item" href="/about"><FontAwesomeIcon icon={faInfoCircle}/>  About</a>
          <a id="repos" className="header-desktop-menu-item" href="/repos"><FontAwesomeIcon icon={faGithub}/>  Repos</a>
          <a id="contact" className="header-desktop-menu-item" href="/contact"><FontAwesomeIcon icon={faAt}/>  Contact</a>
          <a id="settings" className="header-desktop-menu-item" href="/settings"><FontAwesomeIcon icon={faSlidersH}/>  Settings</a>
        </Menu>
      </div>
    </div>
  );

}



export default NavBar;
