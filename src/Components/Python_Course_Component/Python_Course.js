import {React} from 'react';
import './Python_Course.css';
// import team from './../../Media/team.jpg';
import single_course from './../../Media/single-course.jpg';
import pythonLanguage_img from './../../Media/python-language_image.jpg'
import { useState } from 'react';
import Babai from './../../Media/babai.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { LuPlay } from "react-icons/lu";



const Python=()=>{

    const [activeSection, setActiveSection] = useState('overview');

    // Handlers for setting the active section
    const showOverview = () => setActiveSection('overview');
    const showCurriculum = () => setActiveSection('curriculum');
    const showInstructor = () => setActiveSection('instructor');
    const showReview = () => setActiveSection('review');

    return(
    <>
        <div className='python_mainContainer'>
            <div className='python_mainContainer_img'>
              <h2>Single Course</h2> 
              <h5>Home / <span className='python_span'>Python Course</span></h5>
            </div>  
               
        </div>
         <div className='python_subContainer'>
            <h2>Leading the way with life learning</h2>
            <img src={pythonLanguage_img} width={800} height={400}/>
            <div className='overview'>
                <h4 onClick={showOverview} className={activeSection === 'overview' ? 'active-tab' : ''}>Overview</h4>
                <h4 onClick={showCurriculum} className={activeSection === 'curriculum' ? 'active-tab' : ''}>Curriculum</h4>
                <h4 onClick={showInstructor} className={activeSection === 'instructor' ? 'active-tab' : ''}>Instructor</h4>
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
                    <div className='curriculum_maincontainer'>
                      <h2>Python Curriculum</h2>
                      <div className='playbtn_container'>
                        <h3>Section 1</h3>
                        <div className='playbtn_subcontainer'>
                          <LuPlay className='play_btn'/>
                          Introduction
                        </div>
                        <div className='playbtn_subcontainer1'>
                          <LuPlay className='play_btn'/>
                          Environment Setup
                        </div>
                        <div className='playbtn_subcontainer'>
                          <LuPlay className='play_btn'/>
                          Quiz one
                        </div>
                      </div>
                      <div className='playbtn_container'>
                        <h3>Section 2</h3>
                        <div className='playbtn_subcontainer'>
                          <LuPlay className='play_btn'/>
                          Introduction
                        </div>
                        <div className='playbtn_subcontainer1'>
                          <LuPlay className='play_btn'/>
                          Environment Setup
                        </div>
                        <div className='playbtn_subcontainer'>
                          <LuPlay className='play_btn'/>
                          Quiz one
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === 'instructor' && (
                    <div className='instructor'>
                      <img src={Babai} width={250}/>
                      <div className='instructor_content'>
                        <div>
                          <h2>Ashok Dhudla</h2>
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