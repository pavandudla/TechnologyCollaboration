// // import {React} from 'react';
// // import './Navbar.css';
// // import Logo from './../../Media/tech2-logo.png';
// // import Training1 from './../../Media/training1.jpg';
// // import Training2 from './../../Media/training2.jpg';
// // import Training3 from './../../Media/training3.jpg';
// // import HomeBg from './../../Media/home_bg.png'
// // const Navbar=()=>{
// // return(
// //     <>
// //     <div className='Navbar_Container'>
// //         <img src={Logo} width={200} />
// //         <ul>
// //             <li><a href='#'>Home</a></li>
// //             <li><a href='#'>Services</a></li>
// //             <li><a href='#'>About us</a></li>
// //             <li><a href='#'>Contact us</a></li>
// //             <li className='loginbtn'><a href='#'>Login/Register</a></li>
// //         </ul>
// //     </div>
// //     {/* <div className='slider'>
// //         <figure>
// //             <div className='slide'>
// //                 <h1>Training 1</h1>
// //                 <img src={Training1}/>
// //             </div>
// //             <div className='slide'>
// //                 <h1>Training 2</h1>
// //                 <img src={Training2}/>
// //             </div>
// //             <div className='slide'>
// //                 <h1>Training 3</h1>
// //                 <img src={Training3}/>
// //             </div>
// //             <div className='slide'>
// //                 <h1>Training 2</h1>
// //                 <img src={Training2}/>
// //             </div>
// //         </figure>
// //     </div> */}
// //     <div class="video-background">
// //         <video autoplay muted loop id="background-video">
// //             <source src={HomeBg} type="video/mp4"/>
// //             Your browser does not support the video tag.
// //         </video>
// //     </div>
// //     <div>
// //         <img src={HomeBg} width={1215} height={540}/>
// //     </div>
// //     </>
// // )
// // }
// // export default Navbar;




// import {React,useState} from 'react';
// import './Navbar.css';
// import Logo from './../../Media/tech2-logo.png';
// import { Link } from 'react-router-dom';


// const Navbar = () => {

//     const [active,setActive]=useState(false);

   

//     const toggleDropdown = () => {
//         setActive((prevActive) => !prevActive); // Toggle between true/false
//         console.log(active)
//       };


//     return (
//         <>
//             <div className='Navbar_Container'>
//                 <img src={Logo} width={200} alt="Logo" />
//                 <ul>
//                     <li><Link to='/'>Home</Link></li>
//                     <li><Link to='/course'>Courses</Link></li>
//                     <li onClick={toggleDropdown} class="navbar-item_dropdown"><Link>Services</Link> 

//                     {active && (
//                             <ul className="dropdown-menu">
//                                 <li className="dropdown-item">Training</li>
//                                 <li className="dropdown-item">Development</li>
//                             </ul>
//                     )}
//                     </li>
//                     <li><Link>About us</Link></li>
//                     <li><Link>Contact us</Link></li>
//                     <li className='loginbtn'><a href='#'>Login/Register</a></li>
//                 </ul>
//             </div>
           
//         </>
//     );
// }

// export default Navbar;








import { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import Logo from './../../Media/tech2-logo.png';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
   
  // State to toggle navbar visibility
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [screenhandle,setScreenhandle]=useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Toggle function
  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible); // Toggles the navbar visibility state
  };

   


  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) { // Adjust this value as needed
        setIsNavbarVisible(true); // Show navbar on larger screens
      } else {
        setIsNavbarVisible(false); // Hide navbar on smaller screens
      }
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Call once to set initial state
    handleResize();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




 // Update the isMobile state when window is resized
 useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 768);
  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
}, []);

const closeNavbar = () => {
  if (isMobile) {
    // Close the navbar when mobile
    setIsNavbarVisible(false); // Hides the navbar
    console.log('Navbar closed');
  }
 
};


 
    return (
        <div className='navbar_maincontainer'>
          <div className='smallscreen'>
            <Link to="/"><img src={Logo} width={200} alt="Logo" /></Link>
            <IoReorderThree className="navbar-Threetoggler" onClick={toggleNavbar} size={35}/>
          </div>
         

          {isNavbarVisible &&
            (<div className='Navbar_Container' >
                <div className='toggler_icon'>
                    <Link to="/"><img src={Logo} width={200} alt="Logo" /></Link>
                    <RxCross2 className="navbar-Crosstoggler" onClick={toggleNavbar} size={25}/>
                </div>
                
                <ul className='smallscreen_unorderlist'>
                    <li ><Link to='/' onClick={closeNavbar}>Home</Link></li>
                    
                    <li>
                        <div className="dropdown-label">
                          
                            <div>Services</div>
                            <IoIosArrowDown size={20} className='dropdown_icon'/>
                           
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">
                                    <Link to="/training" onClick={closeNavbar}>Training</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link to="/development" onClick={closeNavbar}>Development</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li ><Link to="/counter"onClick={closeNavbar}>About us</Link></li>
                    <li ><Link to="/contactus" onClick={closeNavbar}>Contact us</Link></li> 
                    <li className='loginbtn'><Link to='/login' onClick={closeNavbar}>Login/Register</Link></li>
                </ul>
            </div>)}
          
        
            
        </div>

    )
};

export default Navbar;
