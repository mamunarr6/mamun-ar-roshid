import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home/Home";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
