import "./app.scss";
import Topbar from "./components/topbar/topbar";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";

function App() {
  
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <About />
        <Portfolio />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
