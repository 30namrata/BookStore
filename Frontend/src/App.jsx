import { Route, Routes } from "react-router-dom";
import About from './component/About';
import Contact from './component/Contact';
import Home from "./component/home/Home";
import Courses from "./component/Courses/Courses";
import Signup from "./component/Signup/Signup";
import Contacts from "./component/Contact/Contact";

function App() {
  return (
    <>

      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>


    </>
  )
}

export default App