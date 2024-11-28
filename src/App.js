import Home from "./Home";
import Navbar from "./Navbar";
import Project from "./Project";
import Skills from "./Skills";
import Foot from "./Foot";
import Job from "./Job";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Skills />
      <Project/>
      <Job />
      <Foot />
    </div>
  );
}

export default App;
