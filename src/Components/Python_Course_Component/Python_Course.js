import {React} from 'react';
import './Python_Course.css';
// import team from './../../Media/team.jpg';
import single_course from './../../Media/single-course.jpg';
import pythonLanguage_img from './../../Media/python-language_image.jpg'
import { useState } from 'react';
import Babai from './../../Media/babai.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { LuPlay } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";



const Python=()=>{


 

    const [activeSection, setActiveSection] = useState('overview');
    const [python_basic_minusShow,setPython_basic_minusShow]=useState(false)
    const [python_intermediate_minusShow,setPython_intermediate_minusShow]=useState(false)
    const [python_advanced_minusShow,setPython_advanced_minusShow]=useState(false)
    const [python_specialized_minusShow,setPython_specialized_minusShow]=useState(false)

    // Handlers for setting the active section
    const showOverview = () => setActiveSection('overview');
    const showCurriculum = () => setActiveSection('curriculum');
    const showInstructor = () => setActiveSection('instructor');
    const showReview = () => setActiveSection('review');


    const python_basic_plus_minus_Onclick=()=>{
      setPython_basic_minusShow(!python_basic_minusShow)
    }
    const python_intermediate_plus_minus_Onclick=()=>{
      setPython_intermediate_minusShow(!python_intermediate_minusShow)
    }
    const python_advanced_plus_minus_Onclick=()=>{
      setPython_advanced_minusShow(!python_advanced_minusShow)
    }
    const python_specialized_plus_minus_Onclick=()=>{
      setPython_specialized_minusShow(!python_specialized_minusShow)
    }
    return(
    <>
        <div className='python_mainContainer'>
            <div className='python_mainContainer_img'>
              <h2>Single Course</h2> 
              <h5>Home / <span className='python_span'>Python Course</span></h5>
            </div>       
        </div>
         <div className='python_subContainer'>
            <h2 className='python_subContainer_heading'>Leading the way with life learning</h2>
            <img src={pythonLanguage_img} width={800} height={400}/>
            <div className='overview'>
                <h4 onClick={showOverview} className={activeSection === 'overview' ? 'active-tab' : ''}>Overview</h4>
                <h4 onClick={showCurriculum} className={activeSection === 'curriculum' ? 'active-tab' : ''}>Curriculum</h4>
                <h4 onClick={showInstructor} className={activeSection === 'instructor' ? 'active-tab' : ''}>Instructor</h4>
            </div>
            <div className="content">
                  {activeSection === 'overview' && (
                    <div className='overview_maincontainer'>
                      <div className='overview_description'>
                              <h2 className='course-heading'>Course Description</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has svived not only five centuries, but also the leap into electronic typesetting, remaining essentially.</p>
                      </div>
                      <div className='overview_description'>
                              <h2 className='course-heading'>Certification Online</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has svived not only five centuries, but also the leap into electronic typesetting, remaining essentially.</p>
                      </div>
                    </div>
                  )}
                  {activeSection === 'curriculum' && (
                    <div className='curriculum_maincontainer'>
                      <h2 className='curriculum_maincontainer-heading'>Python Curriculum</h2>
                      <div className='playbtn_container'>
                            {python_basic_minusShow ?
                              (<div >
                                <h3>Introduction to python bascis <TiMinus onClick={python_basic_plus_minus_Onclick} className='python_minus_btn' /></h3>
                                <div className="python_basics" >
                                <div className='playbtn_subcontainer'>
                                  <LuPlay className='play_btn' />
                                  Introduction to python,Installation,Setup
                                </div>
                                <div className='playbtn_subcontainer1'>
                                  <LuPlay className='play_btn' />
                                  Basic Syntax, Variables, and Data Types
                                </div>
                                <div className='playbtn_subcontainer'>
                                  <LuPlay className='play_btn' />
                                  Operators, Expressions, and Control Flow (if-else, loops)
                                </div>
                                <div className='playbtn_subcontainer1'>
                                  <LuPlay className='play_btn' />
                                  Data Structures (Lists, Tuples, Dictionaries, Sets)
                                </div>
                                <div className='playbtn_subcontainer'>
                                  <LuPlay className='play_btn' />
                                  Functions, Modules, and Packages
                                </div>
                                </div>
                              </div>)
                              :
                              (<h3>Introduction to python bascis <FaPlus  onClick={python_basic_plus_minus_Onclick}  className='python_plus_btn'/></h3>)
                            }
                        </div>
                      <div className='playbtn_container'>
                        {python_intermediate_minusShow ?
                            (<>
                            <h3>Intermediate python concepts <TiMinus onClick={python_intermediate_plus_minus_Onclick} className='python_minus_btn' /></h3>
                            <div className='playbtn_subcontainer'>
                              <LuPlay className='play_btn'/>
                              File Handling and Working with File I/O
                            </div>
                            <div className='playbtn_subcontainer1'>
                              <LuPlay className='play_btn'/>
                              Exception Handling and Debugging Techniques
                            </div>
                            <div className='playbtn_subcontainer'>
                              <LuPlay className='play_btn'/>
                              Object-Oriented Programming (Classes, Objects, Inheritance)
                            </div>
                            <div className='playbtn_subcontainer1'>
                              <LuPlay className='play_btn'/>
                              Working with Libraries (Standard Library and Third-party Libraries)
                            </div>
                            <div className='playbtn_subcontainer'>
                              <LuPlay className='play_btn'/>
                              Introduction to NumPy and Pandas for Data Manipulation
                            </div>
                            </>)
                            :
                            (<h3>Intermediate python concepts <FaPlus  onClick={python_intermediate_plus_minus_Onclick}  className='python_plus_btn'/></h3>)
                        }
                      </div>

                      <div className='playbtn_container'>
                          {python_advanced_minusShow?
                            (<>
                                <h3>Advanced python concepts <TiMinus onClick={python_advanced_plus_minus_Onclick} className='python_minus_btn' /></h3>
                                <div className='playbtn_subcontainer'>
                                  <LuPlay className='play_btn'/>
                                  Advanced NumPy and Pandas for Data Analysis
                                </div>
                                <div className='playbtn_subcontainer1'>
                                  <LuPlay className='play_btn'/>
                                  Introduction to Data Visualization with Matplotlib and Seaborn
                                </div>
                                <div className='playbtn_subcontainer'>
                                  <LuPlay className='play_btn'/>
                                  Introduction to Machine Learning with scikit-learn
                                </div>
                                <div className='playbtn_subcontainer1'>
                                  <LuPlay className='play_btn'/>
                                  Web Scraping with BeautifulSoup and Requests
                                </div>
                                <div className='playbtn_subcontainer'>
                                  <LuPlay className='play_btn'/>
                                  Introduction to Flask for Web Development
                                </div>

                                <div className='playbtn_subcontainer1'>
                                  <LuPlay className='play_btn'/>
                                  Working with Databases using SQLite and SQLAlchemy
                                </div>
                                <div className='playbtn_subcontainer'>
                                  <LuPlay className='play_btn'/>
                                  Asynchronous Programming with asyncio
                                </div>
                                <div className='playbtn_subcontainer1'>
                                  <LuPlay className='play_btn'/>
                                  Unit Testing and Test-Driven Development (TDD)
                                </div>
                                <div className='playbtn_subcontainer'>
                                  <LuPlay className='play_btn'/>
                                  Introduction to Docker for Python Applications
                                </div>
                                <div className='playbtn_subcontainer1'>
                                  <LuPlay className='play_btn'/>
                                  Deployment Strategies for Python Applications
                                </div>
                            </>)
                            :
                            (<h3>Advanced python concepts <FaPlus  onClick={python_advanced_plus_minus_Onclick}  className='python_plus_btn'/></h3>)
                          }
                      </div>  

                      <div className='playbtn_container'> 
                        {python_specialized_minusShow ?  
                          (<>
                              <h3>Specialized Topics and Projects <TiMinus onClick={python_specialized_plus_minus_Onclick} className='python_minus_btn' /></h3>
                                <div className='playbtn_subcontainer1'>
                                  <LuPlay className='play_btn'/>
                                  Choose a Specialization (e.g., Data Science, Web Development, DevOps) and dive deeper into related topics
                                </div>
                                <div className='playbtn_subcontainer'>
                                  <LuPlay className='play_btn'/>
                                  Work on a Python Project related to your chosen specialization
                                </div>
                                <div className='playbtn_subcontainer1'>
                                  <LuPlay className='play_btn'/>
                                  Code Review and Refactoring of Project Code
                                </div>
                                <div className='playbtn_subcontainer'>
                                  <LuPlay className='play_btn'/>
                                  Finalize Project Documentation and Present your Project
                                </div>
                          </>)
                          :
                          (<h3>Specialized Topics and Projects <FaPlus  onClick={python_specialized_plus_minus_Onclick}  className='python_plus_btn'/></h3>)
                        }
                      </div>
                    </div>
                  )}

                  {activeSection === 'instructor' && (
                    <div className='instructor'>
                      <img src={Babai} width={250}/>
                      <div className='instructor_content'>
                        <div className='instructor_content_div'>
                          <h2 className='instructor_content_heading'>Ashok Dhudla</h2>
                          <p>Python Developer (10+ years of experience)</p>
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
export default Python;