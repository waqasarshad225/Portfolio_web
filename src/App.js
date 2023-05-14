import "./App.css";
import Home from "./portfoliocontainer/Home/Home";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import About from "./About/About"
import Blog from "./Blog/blog"
import Contact from "./Contact/contact"
import Testimonials from "./Testimonials/testimonials"
import Casestudies from "./Casestudies/casestudies"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Home /> */}
        {/* <About /> */}
        {/* <Contact/> */}
        
        
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/blog" element={<Blog/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/testimonials" element={<Testimonials/>} />
          <Route exact path="/casestudies" element={<Casestudies/>} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
