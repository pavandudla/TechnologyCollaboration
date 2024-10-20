import {React} from 'react';
import './Odoo.css';
import team from './../../Media/team.jpg';
import odoo_img from './../../Media/odoo_image.jpg';
import { useState } from 'react';
import Babai from './../../Media/babai.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { LuPlay } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";


const Odoo=()=>{

    const [activeSection, setActiveSection] = useState('overview');
    const [odoo_basic_minusShow,setOdoo_basic_minusShow]=useState(false)
    const [odoo_advanced_minusShow,setOdoo_advanced_minusShow]=useState(false)
    const [odoo_optimization_minusShow,setOdoo_optimization_minusShow]=useState(false)
    const [odoo_projects_minusShow,setOdoo_projects_minusShow]=useState(false)

    // Handlers for setting the active section
    const showOverview = () => setActiveSection('overview');
    const showCurriculum = () => setActiveSection('curriculum');
    const showInstructor = () => setActiveSection('instructor');
    const showReview = () => setActiveSection('review');

    const odoo_basic_plus_minus_Onclick=()=>{
      setOdoo_basic_minusShow(!odoo_basic_minusShow)
    }
   
    const odoo_advanced_plus_minus_Onclick=()=>{
      setOdoo_advanced_minusShow(!odoo_advanced_minusShow)
    }
    const odoo_optimization_plus_minus_Onclick=()=>{
      setOdoo_optimization_minusShow(!odoo_optimization_minusShow)
    }
    const odoo_projects_plus_minus_Onclick=()=>{
      setOdoo_projects_minusShow(!odoo_projects_minusShow)
    }

    return(
    <>
        <div className='odoo_mainContainer'>
            <div className='odoo_mainContainer_img'>
              <h2>Single Course</h2> 
              <h5>Home / <span className='odoo_span'>Odoo Course</span></h5>
            </div>  
               
        </div>
         <div className='odoo_subContainer'>
            <h2>Leading the way with life learning</h2>
            <img src={odoo_img} width={800} height={400} style={{border:"0.5px solid #bebebe"}}/>
            <div className='overview'>
                <h4 onClick={showOverview} className={activeSection=="overview"?"active-tab":""}>Overview</h4>
                <h4 onClick={showCurriculum} className={activeSection=="curriculum"?"active-tab":""}>Curriculum</h4>
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
          <div className='odoo_curriculum_container'>
            <h2>Odoo Curriculum</h2>
            {odoo_basic_minusShow ?
                (<div >
                  <h3>Introduction to Odoo and Basic Concepts <TiMinus onClick={odoo_basic_plus_minus_Onclick} className='python_minus_btn' /></h3>
                  <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Overview of ERP and Odoo</div>
                  <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/>Odoo installation and setup</div>
                  <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Tour of the Odoo interface</div>
                  <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/>Setting up a new database</div>
                  <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Configuring basic company settings</div>
                  <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/>Configuring basic company settings</div>
                  <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Managing user roles and access rights</div>
                  <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/>Understanding data models in Odoo</div>
                  <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Creating simple models and fields</div>
                  <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/>Basic ORM operations (create, read, write, delete)</div>
                  <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Introduction to different view types (form, tree, kanban)</div>
                  <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/>Creating and customising views</div>
                  <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Advanced UI features: widgets, buttons, and filters</div>
                  <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/>Creating and customising views</div>
                  <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Advanced UI features: widgets, buttons, and filters</div>
                  <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/>Odoo Reports</div>
                  <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Customizing Menus and Actions</div>
                  <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/>Odoo Security</div>
                  <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>User Authentication</div>
                  <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/>Creating a Basic Module</div>
                  <div className='odoo_playbtn_container'><LuPlay className='play_btn'/> Odoo Workflows</div>
                </div>)
                :
                (<h3>Introduction to Odoo and Basic Concepts <FaPlus onClick={odoo_basic_plus_minus_Onclick} className='python_minus_btn' /></h3>)
              }

         
            {odoo_advanced_minusShow ?
                (<div > 
                  <h3>Advanced Module Development<TiMinus onClick={odoo_advanced_plus_minus_Onclick} className='python_minus_btn' /></h3>
                  <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Building advanced views with inheritance</div>
                  <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/> Customising existing widgets</div>
                  <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Creating new widgets</div>
                  <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/> Advanced ORM queries</div>
                  <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>API decorators and best practices</div>
                  <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/> Using external APIs in Odoo</div>
                  </div>)
                  :
                  (<h3>Advanced Module Development<FaPlus onClick={odoo_advanced_plus_minus_Onclick} className='python_minus_btn' /></h3>)
                }

                {odoo_optimization_minusShow ?
                  (<div > 
                    <h3>Performance Optimization and Best Practices<TiMinus onClick={odoo_optimization_plus_minus_Onclick} className='python_minus_btn' /></h3>   
                    <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Identifying performance bottlenecks</div>
                    <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/> Caching strategies</div>
                    <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Database indexing and optimization</div>
                    <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/> Using version control (e.g., Git) with Odoo</div>
                    <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Collaborative development practices</div>
                    <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/> Code reviews and documentation</div>
                    <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Testing and Debugging</div>
                    <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/> Writing and running tests in Odoo</div>
                    <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Debugging techniques</div>
                    <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/> Profiling and analysing code performance</div>
                    </div>)
                  :
                  (<h3>Performance Optimization and Best Practices<FaPlus onClick={odoo_optimization_plus_minus_Onclick} className='python_minus_btn' /></h3>)
                }

                {odoo_projects_minusShow ?
                  (<div > 
                    <h3>Advanced Topics and Project Work<TiMinus onClick={odoo_projects_plus_minus_Onclick} className='python_minus_btn' /></h3> 
                    <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Advanced server actions and cron jobs</div>
                    <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/> Integrating external libraries</div>
                    <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Mobile development with Odoo</div>
                    <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/> Participants work on a comprehensive project</div>
                    <div className='odoo_playbtn_container'><LuPlay className='play_btn'/>Review and discussion of project outcomes</div>
                    <div className='odoo_playbtn_container1'><LuPlay className='play_btn'/> Q&A session and final assessments</div>
                  </div>)
                  :
                  (<h3>Advanced Topics and Project Work<FaPlus onClick={odoo_projects_plus_minus_Onclick} className='python_minus_btn' /></h3>)
                }
          </div>
        )}

{activeSection === 'instructor' && (
          <div className='odoo_instructor'>
            <img src={Babai} width={250}/>
            <div className='odoo_instructor_content'>
              <div>
                <h2>Ashok Dhudla</h2>
                <p>Odoo Developer (10+ years of experience)</p>
              </div>
              <div>
                <p>Jone Smit is a celebrated photographer, author, and writer who brings passion to everything he does.</p>
              </div>
              <div className='odoo_socialmedia'>
                <div >
                  <a  href="https://www.facebook.com/Ashokdhudla" target="_blank" rel="noreferrer">
                      <FaFacebookF size={20} className='odoo_icons' />
                      
                  </a>
                </div>  
                <div>
                  <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter size={20} className='odoo_icons'/>
                  </a>
                </div> 
                <div>
                  <a href="https://www.instagram.com/ashokdhudla/" target="_blank" rel="noreferrer">
                    <FaInstagram size={20} className='odoo_icons'/>
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/ashok-dhudla-96a11358/?originalSubdomain=in" target="_blank" rel="noreferrer">
                    <FaLinkedin size={20} className='odoo_icons'/>
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
export default Odoo;