import {React} from 'react';
import './Django.css';
import team from './../../Media/team.jpg';
import django_img from './../../Media/django_image.jpg';
import { useState } from 'react';
import Babai from './../../Media/babai.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { LuPlay } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";



const Django=()=>{

    const [activeSection, setActiveSection] = useState('overview');
    const [django_basic_minusShow,setDjango_basic_minusShow]=useState(false)
    const [django_intermediate_minusShow,setDjango_intermediate_minusShow]=useState(false)
    const [django_advanced_minusShow,setDjango_advanced_minusShow]=useState(false)
    const [django_specialized_minusShow,setDjango_specialized_minusShow]=useState(false)
    const [django_optimization_minusShow,setDjango_optimization_minusShow]=useState(false)
    const [django_review_minusShow,setDjango_review_minusShow]=useState(false)


    // Handlers for setting the active section
    const showOverview = () => setActiveSection('overview');
    const showCurriculum = () => setActiveSection('curriculum');
    const showInstructor = () => setActiveSection('instructor');
    
    const django_basic_plus_minus_Onclick=()=>{
      setDjango_basic_minusShow(!django_basic_minusShow)
    }
    const django_intermediate_plus_minus_Onclick=()=>{
      setDjango_intermediate_minusShow(!django_intermediate_minusShow)
    }
    const django_advanced_plus_minus_Onclick=()=>{
      setDjango_advanced_minusShow(!django_advanced_minusShow)
    }
    const django_specialized_plus_minus_Onclick=()=>{
      setDjango_specialized_minusShow(!django_specialized_minusShow)
    }
    const django_optimization_plus_minus_Onclick=()=>{
      setDjango_specialized_minusShow(!django_specialized_minusShow)
    }
    const django_review_plus_minus_Onclick=()=>{
      setDjango_specialized_minusShow(!django_specialized_minusShow)
    }
    return(
    <>
        <div className='django_mainContainer'>
            <div className='django_mainContainer_img'>
              <h2>Single Course</h2> 
              <h5>Home / <span className='django_span'>Django course</span></h5>
            </div>  
               
        </div>
         <div className='django_subContainer'>
            <h2>Leading the way with life learning</h2>
            <img src={django_img} width={800} height={400}/>
            <div className='django_overview'>
                <h4 onClick={showOverview} className={activeSection === 'overview' ? 'active-tab' : ''}>Overview</h4>
                <h4 onClick={showCurriculum} className={activeSection === 'curriculum' ? 'active-tab' : ''}>Curriculum</h4>
                <h4 onClick={showInstructor} className={activeSection === 'instructor' ? 'active-tab' : ''}>Instructor</h4>
              
            </div>
            <div className="django_content">
            {activeSection === 'overview' && (
          <div className='django_overview_maincontainer'>
            <div className='django_overview_description'>
                    <h2>Course Description</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has svived not only five centuries, but also the leap into electronic typesetting, remaining essentially.</p>
            </div>
            <div className='django_overview_description'>
                    <h2>Certification Online</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has svived not only five centuries, but also the leap into electronic typesetting, remaining essentially.</p>
           </div>
          </div>
        )}

        {activeSection === 'curriculum' && (
          <div className='django_curriculum_maincontainer'>
            <h2>Django Curriculum</h2>
            <div className='playbtn_container'>
            {django_basic_minusShow ?
              (<>
                      <h3>Introduction to Django bascis <TiMinus onClick={django_basic_plus_minus_Onclick} className='python_minus_btn' /></h3>
                      <div className='playbtn_subcontainer'>
                        <LuPlay className='play_btn' />
                        Basic understanding of web development
                      </div>
                      <div className='playbtn_subcontainer1'>
                        <LuPlay className='play_btn' />
                        Overview of Django framework
                      </div>
                      <div className='playbtn_subcontainer'>
                        <LuPlay className='play_btn' />
                        Install Python and Django.
                      </div>
                      <div className='playbtn_subcontainer1'>
                        <LuPlay className='play_btn' />
                        Create a virtual environment
                      </div>
                      <div className='playbtn_subcontainer'>
                        <LuPlay className='play_btn' />
                        Set up a new Django project
                      </div></>)
                      :
                      (<h3>Introduction to python bascis <FaPlus onClick={django_basic_plus_minus_Onclick} className='python_plus_btn' /></h3>)
                      }
                    </div>

                    <div className='playbtn_container'>
                      {django_intermediate_minusShow ?
                      (<>
                          <h3>Intermediate Django concepts <TiMinus onClick={django_intermediate_plus_minus_Onclick} className='python_minus_btn' /></h3>
                            <div className='playbtn_subcontainer'>
                              <LuPlay className='play_btn' />
                              Understand models and database design
                            </div>
                            <div className='playbtn_subcontainer1'>
                              <LuPlay className='play_btn' />
                              Create models and perform basic database operations
                            </div>
                            <div className='playbtn_subcontainer'>
                              <LuPlay className='play_btn' />
                              Explore and customise the Django admin
                            </div>
                            <div className='playbtn_subcontainer1'>
                              <LuPlay className='play_btn' />
                              Learn about views and URL patterns
                            </div>
                            <div className='playbtn_subcontainer'>
                              <LuPlay className='play_btn' />
                              Create basic views for your application
                            </div>
                            <div className='playbtn_subcontainer1'>
                              <LuPlay className='play_btn' />
                              Understand Django template language.
                            </div>
                            <div className='playbtn_subcontainer'>
                              <LuPlay className='play_btn' />
                              Build templates for your views
                            </div>
                            <div className='playbtn_subcontainer1'>
                              <LuPlay className='play_btn' />
                              Learn how to work with forms in Django
                            </div>
                            <div className='playbtn_subcontainer'>
                              <LuPlay className='play_btn' />
                              Implement user authentication and authorization
                            </div></>)
                            :
                            (<h3>Intermediate django concepts <FaPlus onClick={django_intermediate_plus_minus_Onclick} className='python_plus_btn' /></h3>)
                            }
                        </div>

                        <div className='playbtn_container'>
                        {django_advanced_minusShow ?
                        (<>
                          <h3>Advanced Django Topics <TiMinus onClick={django_advanced_plus_minus_Onclick} className='python_minus_btn' /></h3>
                          <div className='playbtn_subcontainer'>
                            <LuPlay className='play_btn' />
                            Explore class-based views and their advantages
                          </div>
                          <div className='playbtn_subcontainer1'>
                            <LuPlay className='play_btn' />
                            Understand and implement middleware
                          </div>
                          <div className='playbtn_subcontainer'>
                            <LuPlay className='play_btn' />
                            Learn about signals for decoupled applications
                          </div>
                          <div className='playbtn_subcontainer1'>
                            <LuPlay className='play_btn' />
                            Learn the basics of building APIs with Django REST Framework
                          </div>
                          <div className='playbtn_subcontainer'>
                            <LuPlay className='play_btn' />
                            Create RESTful APIs using Django REST Framework
                          </div></>)
                          :
                          (<h3>Intermediate django concepts <FaPlus onClick={django_advanced_plus_minus_Onclick} className='python_plus_btn' /></h3>)
                          }
                      </div>




                       
                      <div className='playbtn_container'>
                        {django_specialized_minusShow ?
                        (<>
                          <h3>Specialized Django Topics and Projects<TiMinus onClick={django_specialized_plus_minus_Onclick} className='python_minus_btn' /></h3>
                          <div className='playbtn_subcontainer'>
                            <LuPlay className='play_btn' />
                            Develop a small to medium-sized project using Django
                          </div>
                          <div className='playbtn_subcontainer1'>
                            <LuPlay className='play_btn' />
                            Implement features like user authentication, CRUD operations, and API endpoints
                          </div>
                          <div className='playbtn_subcontainer'>
                            <LuPlay className='play_btn' />
                            Understand and write tests for your Django application
                          </div>
                          <div className='playbtn_subcontainer1'>
                            <LuPlay className='play_btn' />
                            Explore deployment options (e.g., Heroku, AWS, or Digital Ocean)
                          </div>
                          <div className='playbtn_subcontainer'>
                            <LuPlay className='play_btn' />
                            Deploy your Django project to a live server
                          </div></>)
                          :
                          (<h3>Specialized django Topics and Projects <FaPlus onClick={django_specialized_plus_minus_Onclick} className='python_plus_btn' /></h3>)
                          }
                      </div>


                      <div className='playbtn_container'>
                        {django_optimization_minusShow ?
                        (<>
                          <h3>Optimization and Security<TiMinus onClick={django_optimization_plus_minus_Onclick} className='python_minus_btn' /></h3>     
                        {/* <h3 className='playbtn_subcontainer1'></h3> */}
                        <div className='playbtn_subcontainer'>
                          <LuPlay className='play_btn' />
                          Optimise your Django application for better performance
                        </div>
                        <div className='playbtn_subcontainer1'>
                          <LuPlay className='play_btn' />
                          Learn and implement security best practices in Django
                        </div>
                        </>)
                          :
                          (<h3>Optimization and Security <FaPlus onClick={django_optimization_plus_minus_Onclick} className='python_plus_btn' /></h3>)
                          }
                      </div>

                      <div className='playbtn_container'>
                        {django_review_minusShow ?
                        (<>
                          <h3>Review and Advanced Topics<TiMinus onClick={django_review_plus_minus_Onclick} className='python_minus_btn' /></h3> 
                        {/* <h3 className='playbtn_subcontainer1'>Review and Advanced Topics</h3> */}
                        <div className='playbtn_subcontainer'>
                          <LuPlay className='play_btn' />
                          Review the concepts learned
                        </div>
                        <div className='playbtn_subcontainer1'>
                          <LuPlay className='play_btn' />
                          Explore advanced Django features or related technologies
                        </div>
                        </>)
                          :
                          (<h3>Review and Advanced Topics <FaPlus onClick={django_review_plus_minus_Onclick} className='python_plus_btn' /></h3>)
                          }
                      </div>
                     
        </div>
        )}

{activeSection === 'instructor' && (
          <div className='django_instructor'>
            <img src={Babai} width={250}/>
            <div className='django_instructor_content'>
              <div className='django_instructor_content_div'>
                <h2>Ashok Dhudla</h2>
                <p>Django Developer (10+ years of experience)</p>
              </div>
              <div>
                <h4>Jone Smit is a celebrated photographer, author, and writer who brings passion to everything he does.</h4>
              </div>
              <div className='django_socialmedia'>
                <div >
                  <a  href="https://www.facebook.com/Ashokdhudla" target="_blank" rel="noreferrer">
                      <FaFacebookF size={20} className='django_icons' />
                      
                  </a>
                </div>  
                <div>
                  <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter size={20} className='django_icons'/>
                  </a>
                </div> 
                <div>
                  <a href="https://www.instagram.com/ashokdhudla/" target="_blank" rel="noreferrer">
                    <FaInstagram size={20} className='django_icons'/>
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/ashok-dhudla-96a11358/?originalSubdomain=in" target="_blank" rel="noreferrer">
                    <FaLinkedin size={20} className='django_icons'/>
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
export default Django;