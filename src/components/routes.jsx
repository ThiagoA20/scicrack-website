import React from 'react';
import Navbar from './navbar'
import Footer from './footer'
import '../index.css'
import Logo from '../media/logo.svg'
import Banner from '../media/banner.jpg'
import Section from './section'

import Twitter from '../media/twitter.png'
import Linkedin from '../media/linkedin.png'
import Instagram from '../media/instagram-logo.png'
import Youtube from '../media/youtube.png'

import { BrowserRouter as Router, Route } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Navbar logo={Logo} navigation1={{"All products":"shop", "Equipment":"shop/equipment", "Consumables":"shop/consumables", "Search":"search"}} navigation2={{"Account":"Account,Wishlist,Cart", "Company":"Blog,About,Careers,Contact us"}}/>
            <Section banner={Banner} number={1}/>
            <Section number={3} />
            <Section number={2} />
            <Section number={4} />
            <Section number={5} />
            <Footer twlogo={Twitter} lklogo={Linkedin} inlogo={Instagram} ytlogo={Youtube}/>
        </div>
    )
}

const ShopPage = () => {
    return (
        <div>
            <h1>Shop</h1>
        </div>
    )
}

const ProductDetailPage = () => {
    return (
        <div>
            <h1>Product</h1>
        </div>
    )
}

const LoginPage = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <h1><a href="/">Scicrack</a></h1>
            <form method="POST" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
            <h3>Need an account? <a href="/account/register">Register</a></h3>
        </div>
    )
}

const RegisterPage = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <h1><a href="/">Scicrack</a></h1>
            <form method="POST" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
                <button type="submit">Register</button>
            </form>
            <h3>Already a member? <a href="/account/login">Login</a></h3>
        </div>
    )
}

const WishlistPage = () => {
    return (
        <div>
            <h1>WishList</h1>
        </div>
    )
}

const CartPage = () => {
    return (
        <div>
            <h1>Cart</h1>
        </div>
    )
}

const BlogPage = () => {
    return (
        <div>
            <h1>Blog</h1>
        </div>
    )
}

const AboutPage = () => {
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}

const CareersPage = () => {
    return (
        <div>
            <h1>Careers</h1>
        </div>
    )
}

const ContactUsPage = () => {
    return (
        <div>
            <h1>Contact Us</h1>
        </div>
    )
}

const PrivacyPolicyPage = () => {
    return (
        <div>
            <h1>Privacy Policy</h1>
        </div>
    )
}

const TermsOfUsePage = () => {
    return (
        <div>
            <h1>Terms of Use</h1>
        </div>
    )
}

const ShippingReturnPage = () => {
    return (
        <div>
            <h1>Shipping & return</h1>
        </div>
    )
}

const Routes = () => {
    return (
        <Router>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop/" component={ShopPage} />
            <Route path="/shop/product" component={ProductDetailPage} />
            <Route exact path="/account/login" component={LoginPage} />
            <Route exact path="/account/register" component={RegisterPage} />
            <Route path="/wishlist/" component={WishlistPage} />
            <Route path="/cart/" component={CartPage} />
            <Route path="/blog/" component={BlogPage} />
            <Route path="/about/" component={AboutPage} />
            <Route path="/careers/" component={CareersPage} />
            <Route path="/contactus/" component={ContactUsPage} />
            <Route path="/privacypolicy/" component={PrivacyPolicyPage} />
            <Route path="/termsofuse/" component={TermsOfUsePage} />
            <Route path="/shipping/" component={ShippingReturnPage} />
        </Router>
    )
}

export default Routes
