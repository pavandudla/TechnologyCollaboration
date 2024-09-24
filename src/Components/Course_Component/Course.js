import {React,useEffect} from 'react';
import './Course.css';
import line from './../../Media/line.png';
import pythonImage from './../../Media/python.png';
import DjangoImage from './../../Media/django.png';
import OdooImage from './../../Media/odoo.png';
import { Link } from 'react-router-dom';

const Course=()=>{

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component loads
      }, []);
    return(
        <div className='Course_container'>
             <p>Popular Course</p>
             <h1>Popular online course</h1>
             <img src={line} width={250}/>
             <div className='course_card'>
                <figure>
                <div className='course_details'>
                    <Link to='/single_course'><img src={pythonImage} width='100%'/></Link>
                    <div className='course_description'>
                        <h2>Python </h2>
                        <h5>Every thing you need to program in python in one course(include one real time project) </h5>
                    </div>
                    
                </div>
                <div className='course_details'>
                    <Link to='/fullstack'><img src={pythonImage} width='100%'/></Link>
                    <div className='course_description'>
                        <h2>FullStack with python </h2>
                        <h5>Every thing you need to program in python in one course(include one real time project) </h5>
                    </div>
                </div>
                <div className='course_details'>
                    <Link to='/django'><img src={DjangoImage} width='100%' height="40%"/></Link>
                    <div className='course_description'>
                        <h2>Django </h2>
                        <h5>Every thing you need to program in python in one course(include one real time project) </h5>
                    </div>
                </div>
                <div className='course_details'>
                    <Link to='/odoo'><img src={OdooImage} width='100%' height="40%"/></Link>
                    <div className='course_description'>
                        <h2>Odoo </h2>
                        <h5>Every thing you need to program in python in one course(include one real time project) </h5>
                    </div>
                </div>
                </figure>
             </div>
             
        </div>
    )
}
export default Course;