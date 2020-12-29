import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'


function Footer() {
    return(
        <div>
            <footer className="bg-light pt-3">
                <div className="mx-auto text-center">
                <Link to="/"><a className="pr-2" style={{textDecoration:"none"}}>Privacy and Policy</a></Link>
                <Link to="/"><a style={{textDecoration:"none"}}>Terms and Conditions</a></Link>
                <Link to="/"><a className="pl-2"style={{textDecoration:"none"}}>Disclaimer</a></Link>
                </div> <br />
                <p className="mx-auto text-center">Copyright © 2020 <a href="">Movie Trends</a> - Developed by <a href="https://www.metamium.com/" target="_blank"> Metamium Group</a></p>
            </footer>
        </div>
        )
}


export default Footer;
