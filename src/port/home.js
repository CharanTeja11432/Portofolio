import React from 'react';
import frame1 from '../images/Frame 1.png';
import frame2 from '../images/Frame 2.png';
import frame3 from '../images/Frame 3.png';
import frame4 from '../images/Frame 4.png';
import frame5 from '../images/Frame 5.png';
import frame6 from '../images/Frame 6.png';
import './home.css';
const Home=()=>{
    return(
        <div>
            <div className='home-container'>
                <p>Elevate your marketing game with the most dependable outsourcing partner in the industry.</p>
                <p1>From SEO to Paid Media Automation, We Elevate Your Brand with Cutting-Edge Strategies and Expert Execution</p1>
                <button className='partner-button'>
                <span class="button-text">Partner with Us Today</span>
                    <svg width="39" height="70" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 20.8L17.3 4L2.25 4V0.5L23.25 0.5L23.25 21.5H19.75L19.75 6.45L2.95 23.25L0.5 20.8Z" fill="white"/>
                    </svg>
                </button>
            </div>
            <div className='second-half'>
            <h2>Our</h2>
            <h3>Challenges</h3>
            <img src={frame1} alt='frame1' className='frame1' />
            <h4 className='head-1'>02. Escalating Costs</h4>
            <p className='para-1'>Are rising salaries and high fees from local agencies straining your budget?</p>
            <img src={frame2} alt='frame2' className='frame2' />
            <h4 className='head-2'>04. Recruitment and Retention</h4>
            <p className='para-2'>Is it difficult to find and keep skilled professionals who fit well with your team and meet your requirements?</p>
            <img src={frame3} alt='frame3' className='frame3' />
            <h4 className='head-3'>06. Maintaining Quality</h4>
            <p className='para-3'>Is it challenging to uphold high standards of quality across your marketing channels due to limited resources or inconsistent expertise?</p>
            <img src={frame4} alt='frame4' className='frame4' />
            <h4 className='head-4'>01. Unpredictable Workload</h4>
            <p className='para-4'>Is fluctuating workload making it challenging to ensure consistent revenue and manage resources effectively?</p>
            <img src={frame5} alt='frame5' className='frame5' />
            <h4 className='head-5'>03. Skills Shortage</h4>
            <p className='para-5'>Are you struggling to find and integrate specialized skills, especially in areas like CRM and automation, due to a lack of available talent?</p>
            <img src={frame6} alt='frame6' className='frame6' />
            <h4 className='head-6'>05. Scaling Challenges</h4>
            <p className='para-6'>Are you facing obstacles in scaling your operations efficiently without sacrificing quality or increasing costs?</p>
            </div>
        </div>
    );
}
export default Home;