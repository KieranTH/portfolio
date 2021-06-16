//import logo from './logo.svg';
import './App.css';

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


function App() {
  return (
    <div className="App">
      <HeaderNav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
