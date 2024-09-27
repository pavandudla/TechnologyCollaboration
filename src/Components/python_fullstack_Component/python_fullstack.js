import {React} from 'react';
import './python_fullstack.css';
import pythonfullstack_img from './../../Media/pythonfullstack_image.jpg'
import { useState } from 'react';
import Babai from './../../Media/babai.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Python_fullstack=()=>{

    const [activeSection, setActiveSection] = useState('overview');

    // Handlers for setting the active section
    const showOverview = () => setActiveSection('overview');
    const showCurriculum = () => setActiveSection('curriculum');
    const showInstructor = () => setActiveSection('instructor');
   

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
                <h4 onClick={showOverview}>Overview</h4>
                <h4 onClick={showCurriculum}>Circulum</h4>
                <h4 onClick={showInstructor}>Instructor</h4>
                
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
          <div>
            <h2>Curriculum</h2>
            <p>This is the curriculum section.</p>
          </div>
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