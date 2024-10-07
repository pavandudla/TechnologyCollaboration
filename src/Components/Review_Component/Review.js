import {React} from 'react';
import './Review.css';
import hundred from './../../Media/hundred.png';
import fiften from './../../Media/fiften.png';
import five from './../../Media/five.png';
import four from './../../Media/four.png';

const Review=()=>{
    return(
        <div className='Review_mainContainer'>
            <div className='Review_subContainer'>
                <div className='review_description'>
                    <img src={hundred} width={150}/>
                    <h3>Sucess rate</h3>
                </div>
                <div className='review_description'>
                    <img src={fiften} width={140} className='studentEnrolled_img'/>
                    <h3>Students enrolled</h3>
                </div>
                <div className='review_description'>
                    <img src={five} width={150}/>
                    <h3>Realtime projects</h3>
                </div>
                <div className='review_description'>
                    <img src={four} width={150}/>
                    <h3>Complete courses</h3>
                </div>
                
            </div>
        </div>
    )
}

export default Review;