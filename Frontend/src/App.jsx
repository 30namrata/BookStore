import { Route, Routes } from "react-router-dom";
import About from './component/About';
import Contact from './component/Contact';
import Home from "./component/home/Home";
import Courses from "./component/Courses/Courses";

function App() {
  return (
    <>

      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>


    </>
  )
}

export default App