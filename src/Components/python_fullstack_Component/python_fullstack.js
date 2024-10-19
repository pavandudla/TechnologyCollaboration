import {React} from 'react';
import './python_fullstack.css';
import pythonfullstack_img from './../../Media/pythonfullstack_image.jpg'
import { useState } from 'react';
import Babai from './../../Media/babai.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { LuPlay } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";


const Python_fullstack=()=>{

    const [activeSection, setActiveSection] = useState('overview');
    const [pythonfullstack_basic_minusShow,setPythonfullstack_basic_minusShow]=useState(false)
    const [pythonfullstack_intermediate_minusShow,setPythonfullstack_intermediate_minusShow]=useState(false)
    const [pythonfullstack_advanced_minusShow,setPythonfullstack_advanced_minusShow]=useState(false)
    const [pythonfullstack_specialized_minusShow,setPythonfullstack_specialized_minusShow]=useState(false)
    const [pythonfullstack_javascript_basic_minusShow,setPythonfullstack_javascript_basic_minusShow]=useState(false)
    const [pythonfullstack_javascript_advanced_minusShow,setPythonfullstack_javascript_advanced_minusShow]=useState(false)

    // Handlers for setting the active section
    const showOverview = () => setActiveSection('overview');
    const showCurriculum = () => setActiveSection('curriculum');
    const showInstructor = () => setActiveSection('instructor');


    const pythonfullstack_basic_plus_minus_Onclick=()=>{
      setPythonfullstack_basic_minusShow(!pythonfullstack_basic_minusShow)
    }
    const pythonfullstack_intermediate_plus_minus_Onclick=()=>{
      setPythonfullstack_intermediate_minusShow(!pythonfullstack_intermediate_minusShow)
    }
    const pythonfullstack_advanced_plus_minus_Onclick=()=>{
      setPythonfullstack_advanced_minusShow(!pythonfullstack_advanced_minusShow)
    }
    const pythonfullstack_specialized_plus_minus_Onclick=()=>{
      setPythonfullstack_specialized_minusShow(!pythonfullstack_specialized_minusShow)
    }
    const pythonfullstack_javascript_basic_plus_minus_Onclick=()=>{
      setPythonfullstack_javascript_basic_minusShow(!pythonfullstack_javascript_basic_minusShow)
    }
    const pythonfullstack_javascript_advanced_plus_minus_Onclick=()=>{
      setPythonfullstack_javascript_advanced_minusShow(!pythonfullstack_javascript_advanced_minusShow)
    }
   

    return(
    <>
        <div className='python_mainContainer'>
            <div className='python_mainContainer_img'>
              <h2>Single Course</h2> 
              <h5>Home / <span className='pythonfullstack_span'>Python fullstack course</span></h5>
            </div>  
               
        </div>
         <div className='python_subContainer'>
            <h2>Leading the way with life learning</h2>
            <img src={pythonfullstack_img} width={800} height={400}/>
            <div className='overview'>
                <h4 onClick={showOverview} className={activeSection=="overview"?"active-tab":""}>Overview</h4>
                <h4 onClick={showCurriculum} className={activeSection=="curriculum"?"active-tab":""}>Circulum</h4>
                <h4 onClick={showInstructor} className={activeSection=="instructor"?"active-tab":""}>Instructor</h4>
                
            </div>
            <div className="content">
        {activeSection === 'overview' && (
          <div className='overview_maincontainer'>
            <div>
                    <h2>Course Description</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has svived not only five centuries, but also the leap into electronic typesetting, remaining essentially.</p>
            </div>
            <div>
                    <h2>Certification Online</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has svived not only five centuries, but also the leap into electronic typesetting, remaining essentially.</p>
           </div>
          </div>
        )}

        {activeSection === 'curriculum' && (
          <><div className='Pythonfullstack_curriculum_container'>
                <h2>FullStack Curriculum</h2>
                <h2 className='curriculum_maincontainer-heading'>Python Curriculum</h2>
                      <div className='fullstackplaybtn_container'>
                            {pythonfullstack_basic_minusShow ?
                              (<div >
                                <h3>Introduction to python bascis <TiMinus onClick={pythonfullstack_basic_plus_minus_Onclick} className='python_minus_btn' /></h3>
                                <div className="python_basics" >
                                <div className='fullstackplaybtn_subcontainer'>
                                  <LuPlay className='play_btn' />
                                  Introduction to python,Installation,Setup
                                </div>
                                <div className='fullstackplaybtn_subcontainer1'>
                                  <LuPlay className='play_btn' />
                                  Basic Syntax, Variables, and Data Types
                                </div>
                                <div className='fullstackplaybtn_subcontainer'>
                                  <LuPlay className='play_btn' />
                                  Operators, Expressions, and Control Flow (if-else, loops)
                                </div>
                                <div className='fullstackplaybtn_subcontainer1'>
                                  <LuPlay className='play_btn' />
                                  Data Structures (Lists, Tuples, Dictionaries, Sets)
                                </div>
                                <div className='fullstackplaybtn_subcontainer'>
                                  <LuPlay className='play_btn' />
                                  Functions, Modules, and Packages
                                </div>
                                </div>
                              </div>)
                              :
                              (<h3>Introduction to python bascis <FaPlus  onClick={pythonfullstack_basic_plus_minus_Onclick}  className='python_plus_btn'/></h3>)
                            }
                        </div>
                      <div className='fullstackplaybtn_container'>
                        {pythonfullstack_intermediate_minusShow ?
                            (<>
                            <h3>Intermediate python concepts <TiMinus onClick={pythonfullstack_intermediate_plus_minus_Onclick} className='python_minus_btn' /></h3>
                            <div className='fullstackplaybtn_subcontainer'>
                              <LuPlay className='play_btn'/>
                              File Handling and Working with File I/O
                            </div>
                            <div className='fullstackplaybtn_subcontainer1'>
                              <LuPlay className='play_btn'/>
                              Exception Handling and Debugging Techniques
                            </div>
                            <div className='fullstackplaybtn_subcontainer'>
                              <LuPlay className='play_btn'/>
                              Object-Oriented Programming (Classes, Objects, Inheritance)
                            </div>
                            <div className='fullstackplaybtn_subcontainer1'>
                              <LuPlay className='play_btn'/>
                              Working with Libraries (Standard Library and Third-party Libraries)
                            </div>
                            <div className='fullstackplaybtn_subcontainer'>
                              <LuPlay className='play_btn'/>
                              Introduction to NumPy and Pandas for Data Manipulation
                            </div>
                            </>)
                            :
                            (<h3>Intermediate python concepts <FaPlus  onClick={pythonfullstack_intermediate_plus_minus_Onclick}  className='python_plus_btn'/></h3>)
                        }
                      </div>

                      <div className='fullstackplaybtn_container'>
                          {pythonfullstack_advanced_minusShow?
                            (<>
                                <h3>Advanced python concepts <TiMinus onClick={pythonfullstack_advanced_plus_minus_Onclick} className='python_minus_btn' /></h3>
                                <div className='fullstackplaybtn_subcontainer'>
                                  <LuPlay className='play_btn'/>
                                  Advanced NumPy and Pandas for Data Analysis
                                </div>
                                <div className='fullstackplaybtn_subcontainer1'>
                                  <LuPlay className='play_btn'/>
                                  Introduction to Data Visualization with Matplotlib and Seaborn
                                </div>
                                <div className='fullstackplaybtn_subcontainer'>
                                  <LuPlay className='play_btn'/>
                                  Introduction to Machine Learning with scikit-learn
                                </div>
                                <div className='fullstackplaybtn_subcontainer1'>
                                  <LuPlay className='play_btn'/>
                                  Web Scraping with BeautifulSoup and Requests
                                </div>
                                <div className='fullstackplaybtn_subcontainer'>
                                  <LuPlay className='play_btn'/>
                                  Introduction to Flask for Web Development
                                </div>

                                <div className='fullstackplaybtn_subcontainer1'>
                                  <LuPlay className='play_btn'/>
                                  Working with Databases using SQLite and SQLAlchemy
                                </div>
                                <div className='fullstackplaybtn_subcontainer'>
                                  <LuPlay className='play_btn'/>
                                  Asynchronous Programming with asyncio
                                </div>
                                <div className='fullstackplaybtn_subcontainer1'>
                                  <LuPlay className='play_btn'/>
                                  Unit Testing and Test-Driven Development (TDD)
                                </div>
                                <div className='fullstackplaybtn_subcontainer'>
                                  <LuPlay className='play_btn'/>
                                  Introduction to Docker for Python Applications
                                </div>
                                <div className='fullstackplaybtn_subcontainer1'>
                                  <LuPlay className='play_btn'/>
                                  Deployment Strategies for Python Applications
                                </div>
                            </>)
                            :
                            (<h3>Advanced python concepts <FaPlus  onClick={pythonfullstack_advanced_plus_minus_Onclick}  className='python_plus_btn'/></h3>)
                          }
                      </div>  

                      <div className='fullstackplaybtn_container'> 
                        {pythonfullstack_specialized_minusShow ?  
                          (<>
                              <h3>Specialized Topics and Projects <TiMinus onClick={pythonfullstack_specialized_plus_minus_Onclick} className='python_minus_btn' /></h3>
                                <div className='fullstackplaybtn_subcontainer1'>
                                  <LuPlay className='play_btn'/>
                                  Choose a Specialization (e.g., Data Science, Web Development, DevOps) and dive deeper into related topics
                                </div>
                                <div className='fullstackplaybtn_subcontainer'>
                                  <LuPlay className='play_btn'/>
                                  Work on a Python Project related to your chosen specialization
                                </div>
                                <div className='fullstackplaybtn_subcontainer1'>
                                  <LuPlay className='play_btn'/>
                                  Code Review and Refactoring of Project Code
                                </div>
                                <div className='fullstackplaybtn_subcontainer'>
                                  <LuPlay className='play_btn'/>
                                  Finalize Project Documentation and Present your Project
                                </div>
                          </>)
                          :
                          (<h3>Specialized Topics and Projects <FaPlus  onClick={pythonfullstack_specialized_plus_minus_Onclick}  className='python_plus_btn'/></h3>)
                        }
                      </div>



                  <h2>Javascript Curriculum</h2>
                  {pythonfullstack_javascript_basic_minusShow ?
                      (<div className='fullstack_javascript_container'>
                        <h3>Javascript Basics <TiMinus onClick={pythonfullstack_javascript_basic_plus_minus_Onclick} className='python_minus_btn' /></h3>
                        <div className='fullstackplaybtn_subcontainer'>
                          <LuPlay className='play_btn'/>
                          What is javascript and its features
                        </div>
                        <div className='fullstackplaybtn_subcontainer1'>
                          <LuPlay className='play_btn'/>
                          Variables in javascript
                        </div>
                        <div className='fullstackplaybtn_subcontainer'>
                          <LuPlay className='play_btn'/>
                          Data types in javascript
                        </div>
                        <div className='fullstackplaybtn_subcontainer1'>
                          <LuPlay className='play_btn'/>
                          Operators and control statements
                        </div>
                        <div className='fullstackplaybtn_subcontainer'>
                          <LuPlay className='play_btn'/>
                          Loops in javascript
                        </div>
                        <div className='fullstackplaybtn_subcontainer1'>
                          <LuPlay className='play_btn'/>
                          Data structure
                        </div>
                        <div className='fullstackplaybtn_subcontainer'>
                          <LuPlay className='play_btn'/>
                          Scope in javascript
                        </div>
                        <div className='fullstackplaybtn_subcontainer1'>
                          <LuPlay className='play_btn'/>
                          Objects in javascript
                        </div>
                        <div className='fullstackplaybtn_subcontainer'>
                          <LuPlay className='play_btn'/>
                          Functions in javascript
                        </div>
                        <div className='fullstackplaybtn_subcontainer1'>
                          <LuPlay className='play_btn'/>
                          Form validations in javascript
                        </div>
                        <div className='fullstackplaybtn_subcontainer'>
                          <LuPlay className='play_btn'/>
                          Dom manipulation in javascript
                        </div>
                        <div className='fullstackplaybtn_subcontainer1'>
                          <LuPlay className='play_btn'/>
                          Events in javascript
                        </div>
                        <div className='fullstackplaybtn_subcontainer'>
                          <LuPlay className='play_btn'/>
                          Bom elements in javascript
                        </div>
                        </div>)
                          :
                          (<h3>Javascript Basics <FaPlus  onClick={pythonfullstack_javascript_basic_plus_minus_Onclick}  className='python_plus_btn'/></h3>)
                        }

                      {pythonfullstack_javascript_advanced_minusShow ?
                        (<div >
                          <h3>Advanced Topics in Javascript <TiMinus onClick={pythonfullstack_javascript_advanced_plus_minus_Onclick} className='python_minus_btn' /></h3>      
                          <div className='fullstackplaybtn_subcontainer'>
                            <LuPlay className='play_btn'/>
                            Prototyping in javascript
                          </div>
                          <div className='fullstackplaybtn_subcontainer1'>
                            <LuPlay className='play_btn'/>
                            Proto type inheritance in javascript
                          </div>
                          <div className='fullstackplaybtn_subcontainer'>
                            <LuPlay className='play_btn'/>
                            Callbacks in javascript
                          </div>
                          <div className='fullstackplaybtn_subcontainer1'>
                            <LuPlay className='play_btn'/>
                            IIFE(Immediately invoked function execution)
                          </div>
                          <div className='fullstackplaybtn_subcontainer'>
                            <LuPlay className='play_btn'/>
                            Promises in javascript
                          </div>
                          <div className='fullstackplaybtn_subcontainer1'>
                            <LuPlay className='play_btn'/>
                            Ajax in Javascript
                          </div>
                          <div className='fullstackplaybtn_subcontainer'>
                            <LuPlay className='play_btn'/>
                            Async await in javascript
                          </div>
                          <div className='fullstackplaybtn_subcontainer1'>
                            <LuPlay className='play_btn'/>
                            Closures in Javascript
                          </div>
                          <div className='fullstackplaybtn_subcontainer'>
                            <LuPlay className='play_btn'/>
                            Oops concepts in javascript
                          </div>
                          <div className='fullstackplaybtn_subcontainer1'>
                            <LuPlay className='play_btn'/>
                            Json in Javascript
                          </div>
                          </div>)
                          :
                          (<h3>Advanced Topics in Javascript <FaPlus  onClick={pythonfullstack_javascript_advanced_plus_minus_Onclick}  className='python_plus_btn'/></h3>)
                        }
                  </div>
                </>
        )}

{activeSection === 'instructor' && (
          <div className='instructor'>
            <img src={Babai} width={250}/>
            <div className='instructor_content'>
              <div>
                <h2>Ashok Dhudla</h2>
                <p>Python fullstack Developer (10+ years of experience)</p>
              </div>
              <div> 
                <h4>Jone Smit is a celebrated photographer, author, and writer who brings passion to everything he does.</h4>
              </div>
              <div className='socialmedia'>
                <div >
                  <a  href="https://www.facebook.com/Ashokdhudla" target="_blank" rel="noreferrer">
                      <FaFacebookF size={20} className='icons' />
                      
                  </a>
                </div>  
                <div>
                  <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter size={20} className='icons'/>
                  </a>
                </div> 
                <div>
                  <a href="https://www.instagram.com/ashokdhudla/" target="_blank" rel="noreferrer">
                    <FaInstagram size={20} className='icons'/>
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/ashok-dhudla-96a11358/?originalSubdomain=in" target="_blank" rel="noreferrer">
                    <FaLinkedin size={20} className='icons'/>
                  </a>
                  
                </div>
              </div>
            </div>  
          </div>
        )}

       
         </div>
        </div> 
 </> 
    )
}
export default Python_fullstack;