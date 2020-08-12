import React from 'react';
import icon from '../assets/IconLight.png';

const Footer = () => {
    return (
        <footer>
            <div className='container-fluid padding'>
            <div className='row text-center'>
                <div className='col-md-4'>
                    <img src={icon} alt='' width='58px'/>
                    <hr className='light'/>
                    <p>801-509-8540</p>
                    <p>kylejamwright@gmail.com</p>
                    <p>Greater Salt Lake Area</p>
                </div>
                <div className='col-md-4'>
                    <hr className='light'/>
                    <h5>My hours</h5>
                    <hr className='light'/>
                    <p>Monday-Friday: 8am - 5pm</p>
                    <p>Saturday: 10am - 4pm</p>
                    <p>Sunday: Unavailable</p>
                </div>
                <div className='col-md-4'>
                    <hr className='light'/>
                    <h5>Service Area</h5>
                    <hr className='light'/>
                    <p>Utah</p>
                    <p>All other states</p>
                    <p>Wherever you are</p>
                </div>
                <div className='col-12'>
                    <hr className='light-100'/>
                    <h5>&copy; kylejw2.github.io</h5>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer;