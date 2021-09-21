import React from 'react'
import DNA from '../media/dna.svg'

const Footer = (props) => {
    return (
        <footer>
            <div className="footer-decorator">
                <img src={DNA} alt="dna"/>
            </div>
            <div className="container footer-box">
                <div className="about-redirect">
                    <p>
                        <strong>Scicrack Laboratories</strong><br/>
                        <span>Dallas park, Bloco C apto 203
                        Campina Grande, PB, Brasil</span>
                    </p>
                    <a className="email" href="mailto:scicrack@protonmail.com">scicrack@protonmail.com</a>
                    <p>
                        ©2021 Scicrack laboratories | <a href="/privacypolicy/">Privacy Policy</a> | <a href="/termsofuse/">Terms of Use</a> | <a href="/shipping/">Shipping & Return Policy</a>
                    </p>
                </div>
                <ul className="Socialmedia-box">
                    <li><a href="/"><img src={props.twlogo} alt="twitter"/></a></li>
                    <li><a href="/"><img src={props.lklogo} alt="linkedin" /></a></li>
                    <li><a href="https://instagram.com/scicrack"><img src={props.inlogo} alt="instagram"/></a></li>
                    <li className="youtube-logo"><a href="https://www.youtube.com/channel/UChGLvsZMT2yY-NSRcgkfrVg"><img src={props.ytlogo} alt="youtube"/></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer