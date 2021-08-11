import React from 'react';

class ProjectSection extends React.Component{

  constructor(props)
  {
    super(props);
    this.state = {
      name: this.props.name,
      firstDesc: this.props.desc1,
      secondDesc: this.props.desc2,
      github: "https://github.com/KieranTH/" + this.props.github
    };
  }


  render(){
    return(
      <a href={this.state.github} class="project__clickable">
        <div class="project__area" id={this.props.name}>
          <div class="project__header">
            <h2 class="project__title">{this.props.name}</h2>
          </div>
          <div class="project__info">
          <p class="project__subtitle">{this.props.brief}</p>
          <p class="project__desc">{this.props.desc1}
          <br></br><br></br> {this.props.desc2}
          </p>
          </div>
          <div class="burger">
            <a href="javascript:void(0);" class="burgerIcon" onclick="openMenu()"/>
              <a href={this.state.github} class="nav__social-icon"><i class='bx bxl-github bx-md bx-tada-hover'></i></a>
          </div>
        </div>
      </a>
    );
  }
}


export default ProjectSection;
