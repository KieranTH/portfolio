//import logo from './logo.svg';
import './App.css';
import React from 'react';

//--- old compoments from first version ---
/*
import NavBar from './Components/NavBar/NavBar';
import TitleSection from './Components/TitleSection/TitleSection';
import QuickProjectButtons from './Components/QuickProjectButtons/QuickProjectButtons';
import ProjectShowcase from './Components/ProjectShowcase/ProjectShowcase';
import Footer from './Components/Footer/Footer';*/


/*
--- old structure for App() return:

<div classname="App">
  <NavBar/>
  <TitleSection/>
  <ProjectShowcase/>
  <QuickProjectButtons/>
  <Footer/>
</div>

*/


//--- new components ---
import HeaderNav from './NewComps/HeaderNav/HeaderNav';
import Main from './NewComps/Main/Main';
import Footer from './NewComps/Footer/Footer';

import enLang from './NewComps/Data/language.json';
import cyLang from './NewComps/Data/Iaith.json';


class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      lang: enLang
    }
  }



  handleSetLanguage(){
    var language = this.state.lang;
    //console.log(language);
    if(language === enLang)
    {
      console.log("cy");
      this.setState({
        lang: cyLang
      });
    }
    if(language === cyLang)
    {
      console.log("en");
      this.setState({
        lang: enLang
      });
    }
  }






  render(){
  console.log("in render ", this.state.lang.header);
    return (
      <div className="App">
        <HeaderNav language={this.state.lang.header} handleSetLanguage={this.handleSetLanguage.bind(this)}/>
        <Main language={this.state.lang.main}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
