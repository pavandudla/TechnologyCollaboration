import {React} from 'react';
import './Footer.css';
import { MdAddLocation } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";

const Footer=()=>{
    return(
        <div className='main_container'>
        <div className='Footer_container'>
            <div className='Findus_container'>
                <p>Find Us</p>
                <div className='footer_description'>
                    <div className='footer_icons'>
                            <MdAddLocation color='#ffb607' className='icon' size={24}/>
                            <div>4-183/69,Nri Colony,Hyderabad,Telangana</div>
                    </div>
                    <div className='footer_icons'>
                            <FaEnvelope color='#ffb607' className='icon' size={20}/>
                            <div>techcollab.python@gmail.com</div>
                            
                    </div>
                    <div className='footer_icons'>
                            <BiSolidPhoneCall color='#ffb607' className='icon' size={24}/>
                            <div>+919966079191</div>
                    </div>
                    
                </div>
            </div> 
            <div className='Findus_container'>
                <p>Useful links</p>
                <div className='footer_description'>
                    <div>Allcourses</div>
                    <div>About us</div>
                    <div>Help(FAQ)</div>
                </div>
            </div>
        </div>
       
        </div>
    )
}

export default Footer;