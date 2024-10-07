import React, { useEffect, useRef } from "react";
import './experience.css';

const CounterSection = () => {
  const experienceRef = useRef(null);
  const teachingRef = useRef(null);
  const studentsRef = useRef(null);

  // Counter animation function
  const animateCounter = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.innerText = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.innerText = `${end}+`; // Add "+" after counting completes
      }
    };
    window.requestAnimationFrame(step);
  };

  // IntersectionObserver to trigger animation when elements are in view
  useEffect(() => {
    const options = {
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetId = entry.target.id;
          switch (targetId) {
            case "experience":
              animateCounter(entry.target, 0, 9, 2000); // 0 to 9 in 2 seconds
              break;
            case "teaching":
              animateCounter(entry.target, 0, 3, 2000); // 0 to 3 in 2 seconds
              break;
            case "students":
              animateCounter(entry.target, 0, 100, 2500); // 0 to 1000 in 2.5 seconds
              break;
            default:
              break;
          }
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, options);

    // Observe the elements
    const experienceElement = experienceRef.current;
    const teachingElement = teachingRef.current;
    const studentsElement = studentsRef.current;

    if (experienceElement) observer.observe(experienceElement);
    if (teachingElement) observer.observe(teachingElement);
    if (studentsElement) observer.observe(studentsElement);

    return () => {
      if (experienceElement) observer.unobserve(experienceElement);
      if (teachingElement) observer.unobserve(teachingElement);
      if (studentsElement) observer.unobserve(studentsElement);
    };
  }, []);

  return (
    <div className="counters">
      <div className="counter-section">
        <div className="counter" id="experience" ref={experienceRef}>0</div>
        <p>Years of Experience</p>
      </div>
      <div className="counter-section">
        <div className="counter" id="teaching" ref={teachingRef}>0</div>
        <p>Years of Teaching</p>
      </div>
      <div className="counter-section">
        <div className="counter" id="students" ref={studentsRef}>0</div>
        <p>Students Taught</p>
      </div>
    </div>
  );
};

export default CounterSection;
