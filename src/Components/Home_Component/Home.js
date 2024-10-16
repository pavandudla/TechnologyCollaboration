import {React,useEffect} from "react";
import './Home.css';
import ItImage from './../../Media/it_img.png';
import HomeVideo from './../../Media/home6_bg.mp4'
import Benefit from './../Benefit_Component/Benefit.js'
import Course from './../Course_Component/Course.js';
import Expert from "../Expert_Component/Expert.js";
import Review from './../Review_Component/Review.js'


const Home=()=>{

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component loads
      }, []);
    return(
        <div className="home_maincontainer">
            <div className='It'>
                <h1> Expert IT training when and where you need it.</h1>
                <img src={ItImage} width={600} />
            </div>
            <div className="video-background">
                <video autoPlay muted loop id="background-video">
                    <source src={HomeVideo} type="video/mp4"></source>
                </video>
                
            </div>
           <Benefit/>
           <Course/>
           <Expert/>
           <Review/>
        </div>
    )
}
export default Home;