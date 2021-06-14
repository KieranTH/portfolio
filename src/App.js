import logo from './logo.svg';
import './App.css';

import NavBar from './Components/NavBar/NavBar';
import TitleSection from './Components/TitleSection/TitleSection';
import QuickProjectButtons from './Components/QuickProjectButtons/QuickProjectButtons';
import ProjectShowcase from './Components/ProjectShowcase/ProjectShowcase';
import Footer from './Components/Footer/Footer';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <TitleSection/>
      <ProjectShowcase/>
      <QuickProjectButtons/>
      <Footer/>
    </div>
  );
}

export default App;
