import {React,useEffect} from 'react';
import './Course.css';
import line from './../../Media/line.png';
import pythonImage from './../../Media/python.png';
import fullstack_python from './../../Media/fullstack-python.jpg'
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
                <div className='under_figure-div'>
                        <div className='course_details'>
                            <Link to='/single_course'><img src={pythonImage} width='100%'/></Link>
                            <div className='course_description'>
                                <h2>Python </h2>
                                <p>Every thing you need to program in python in one course  (include one real time project) </p>
                            </div>
                            
                        </div>
                        <div className='course_details'>
                            <Link to='/fullstack'><img src={fullstack_python} width='100%'/></Link>
                            <div className='course_description'>
                                <h2>FullStack with python </h2>
                                <p>Every thing you need to program in python in one course  (include one real time project) </p>
                            </div>
                        </div>
                </div>
                <div className='under_figure-div'>
                        <div className='course_details'>
                            <Link to='/django'><img src={DjangoImage} width='100%'   id='django-img'/></Link>
                            <div className='course_description'>
                                <h2>Django </h2>
                                <p>Every thing you need to program in python in one course  (include one real time project) </p>
                            </div>
                        </div>
                        <div className='course_details'>
                            <Link to='/odoo'><img src={OdooImage} width='100%' /></Link>
                            <div className='course_description'>
                                <h2>Odoo </h2>
                                <p>Every thing you need to program in python in one course  (include one real time project) </p>
                            </div>
                        </div>
                </div>
                </figure>
             </div>
             
        </div>
    )
}
export default Course;