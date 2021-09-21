import React from 'react'
import Consumables from '../media/petri.jpg'
import Equipment from '../media/lab_equipment.jpg'


const Section = (props) => {
    if (props.number === 1) {
        return (
            <section className="first-section">
                <div className="container container-first-section">
                    <div className="container-slogan">
                        <h1>We provide the tools for your <span className="txt-rotate" data-period="500" data-rotate='["Business.", "Laboratory.", "Dreams."]'></span></h1>
                        <div className="container-about">
                            <p>At Scicrack, we provide the tools and the knowledge for you to start your scientific career.</p>
                        </div>
                    </div>
                    <button className="container-call-to-action">
                            <div className="arrow-call-to-action"><i className="arrow down"></i></div>
                            OUR PRODUCTS
                    </button>
                </div>
                <div className="home-background">
                    <div className="banner-cover"></div>
                    <img src={props.banner} alt="banner" />
                </div>
            </section>
        )
    } else if (props.number === 2) {
        return (
            <section className="section2-box">
                <div className="section-2">
                    <a href="/shop/consumables/" id="img-1" className="redirect-shop-box">
                        <div className="redirect-shop">
                            <span>CONSUMABLES</span>
                            <p>
                                Explore options for culture media,
                                reagents and extraction kits.
                            </p>
                            <span style={{
                                color: "#efe934"
                            }}>SHOP NOW</span>
                        </div>
                        <img src={Consumables} alt="consumables"/>
                    </a>
                    <a href="/shop/equipment/" id="img-2" className="redirect-shop-box">
                        <div className="redirect-shop">
                            <span>EQUIPMENT</span>
                            <p>
                                Our selection of microscopes, centrifuges, incubators,
                                among other laboratory equipments.
                            </p>
                            <span style={{
                                color: "#efe934"
                            }}>SHOP NOW</span>
                        </div>
                        <img src={Equipment} alt="equipment"/>
                    </a>
                </div>
            </section>
        )
    } else if (props.number === 3) {
        return (
            <section className="container section3-box">
                <div className="align-center">
                    <p>CHECK OUT OUR</p>
                    <p>HOTTEST TRENDING ITENS</p>
                </div>
                <div></div>
            </section>
        )
    } else if (props.number === 4) {
        return (
            <section className="section4-box">
                <p>About Us</p>
            </section>
        ) 
    } else if (props.number === 5) {
        return (
            <section className="section3-box">
                <p>Reviews</p>
            </section>
        ) 
    }
}

// <span>Dreams</span>
// <span>Laboratory</span>

export default Section
