// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//      <div>hi this is react</div>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar_Component/Navbar';
import Home from './Components/Home_Component/Home.js';
import Footer from './Components/Footer_Component/Footer.js';
import Python from './Components/Python_Course_Component/Python_Course.js';
import Course from './Components/Course_Component/Course.js';
import Python_fullstack from './Components/python_fullstack_Component/python_fullstack.js';
import Django from './Components/Django_Component/Django.js';
import Odoo from './Components/Odoo_Component/Odoo.js';
import ScrollToTop from './Components/Scrolltop/ScrollTop.js';
import Login from './Components/Login_Component/Login.js';
import Signup from './Components/Signup_Component/Signup.js';
import ContactUs from './Components/Contact US/Contact_us.js';
import CounterSection from './Components/experience/experience.js';
import ForgotPassword from './Components/Forgot_password/Forgot_password.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Course />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/single_course" element={<Python />} />
        <Route path="/fullstack" element={<Python_fullstack />} />
        <Route path="/django" element={<Django />} />
        <Route path="/odoo" element={<Odoo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/counter' element={<CounterSection/>}/>
        <Route path='/forgot_password' element={<ForgotPassword/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

