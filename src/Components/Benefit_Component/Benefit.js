import {React} from 'react';
import './Benefit.css'
import watch from './../../Media/watch.png';
import balance from './../../Media/balance.png';
import gain from './../../Media/gain.png';
import route from './../../Media/route.png';
import line from './../../Media/line.png';

const Benefit=()=>{
    return(
        <div>
            <div className='Benefit_Container'>
                <h2>Our Affordable</h2>
                <h1>Your benefit with Tech Collab</h1>
                <img src={line} width={250}/>
                <div className='Benifit_img_container'>
                    <div className='Benifit_image'>
                        <img src={watch} width={120}/>
                        <h3>Save time & money</h3>
                    </div>
                    <div className='Benifit_image'>
                        <img src={balance} width={120}/>
                        <h3>Balance learning with life</h3>
                    </div>
                    <div className='Benifit_image'>
                        <img src={gain} width={120}/>
                        <h3>Gain Valuable Knowledge</h3>
                    </div>
                    <div className='Benifit_image'>
                        <img src={route} width={120}/>
                        <h3>Finish What you started</h3>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Benefit;