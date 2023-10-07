import HomePage from "./HomePage/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Courses from "./HomePage/Navbar/NavbarRouting/Courses";
import DigitalNotes from "./HomePage/Navbar/NavbarRouting/DigitalNotes";
import Contact from "./HomePage/Navbar/NavbarRouting/Contact";
import './App.css'
import HtmlCourse from "./CoursesFolder/Html/HtmlCourse";
import CssCourse from "./CoursesFolder/Css/CssCourse";
import JSCourse from "./CoursesFolder/JavaScript/JSCourse.js";
import BootstrapCourse from "./CoursesFolder/Bootstrap/BootstrapCourse";
import MongoDbCourse from "./CoursesFolder/MongoDb/MongoDbCourse";
import ReactCourse from "./CoursesFolder/React/ReactCourse";
import ExpressCourse from "./CoursesFolder/Express/ExpressCourse";
import NodeJsCourse from "./CoursesFolder/NodeJs/NodeJsCourse";
import NextJsCourse from "./CoursesFolder/NextJs/NextJsCourse";
import ThreeJsCourse from "./CoursesFolder/ThreeJs/ThreeJsCourse";
import Web3jsCourse from "./CoursesFolder/Web3js/Web3jsCourse";
import JqueryCourse from "./CoursesFolder/Jquery/JqueryCourse";
import NotFound404 from "./NotFound404/NotFound404";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>/
          <Route path='/Home' element={<HomePage />}></Route>
          <Route path='/Courses' element={<Courses />}></Route>
          <Route path='/digitalNotes' element={<DigitalNotes />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/courses/htmlcourse' element={<HtmlCourse />}></Route>
          <Route path='/courses/csscourse' element={<CssCourse />}></Route>
          <Route path='/courses/javascriptCourse' element={<JSCourse />}></Route>
          <Route path='/courses/Bootstrapcourse' element={<BootstrapCourse />}></Route>
          <Route path='/courses/mongodbcourse' element={<MongoDbCourse />}></Route>
          <Route path='/courses/reactcourse' element={<ReactCourse />}></Route>
          <Route path='/courses/expresscourse' element={<ExpressCourse />}></Route>
          <Route path='/courses/nodejscourse' element={<NodeJsCourse />}></Route>
          <Route path='/courses/nextjscourse' element={<NextJsCourse />}></Route>
          <Route path='/courses/threejscourse' element={<ThreeJsCourse />}></Route>
          <Route path='/courses/web3jscourse' element={<Web3jsCourse />}></Route>
          <Route path='/courses/jquerycourse' element={<JqueryCourse />}></Route>
          <Route path='/*' element={<NotFound404 />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
