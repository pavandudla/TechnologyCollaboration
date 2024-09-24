import {React} from "react";
import './Expert.css'
import owncourse_image from './../../Media/owncourse.png';

const Expert=()=>{
    return(
        <div className="expert_mainContainer">
            <div className="expert_subContainer">
                    <img src={owncourse_image} width={180}/>
                    <div className="description">
                        <h3>Go at your own course</h3>
                        <p>Enjoy lifetime access to course on techcollab</p>
                    </div>   
            </div>
            <div className="expert_subContainer">
                    <img src={owncourse_image} width={180}/>
                    <div className="description">
                        <h3>Go at your own course</h3>
                        <p>Enjoy lifetime access to course on techcollab</p>
                    </div>   
            </div>
            <div className="expert_subContainer">
                    <img src={owncourse_image} width={180}/>
                    <div className="description">
                        <h3>Go at your own course</h3>
                        <p>Enjoy lifetime access to course on techcollab</p>
                    </div>   
            </div>
        </div>
    )
}
export default Expert;