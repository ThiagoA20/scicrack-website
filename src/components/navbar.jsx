import React from 'react'
import DropDown from './dropdown'

const DropDownMenu = (props) => {

    let drops = props.drops.split(',')

    return (
        <div className="dropMain">
            <DropDown name={props.name} drops={drops}></DropDown>
        </div>
    )
}

const Navbar = (props) => {

    function NavItem(key, value){

        if (key === "Search"){
            return (
                <div className="header-search">
                    <input></input>
                    <div className="lupa-container">
                        <div className="icone lupa"></div>
                    </div>
                </div>
            )
        } else if (value.split(',').length === 1) {
            return (
                <li><a className="listElement" href={`/${value}/`}>{key}</a></li>
            )
        } else {
            return (
                <DropDownMenu name={key} drops={value}/>
            )
        }
    }

    return (
        <header className="header">
            <nav className="container">
                <div className="header_wrapper">
                    <a href={'/'} alt="Scicrack"><img src={props.logo} alt="Scicrack"/></a>
                    <div className="header_lists">
                        <ul className="list list-center">
                            {Object.entries(props.navigation1).map(([k, v]) => NavItem(k, v))}
                        </ul>
                        <ul className="list list-center">
                            {Object.entries(props.navigation2).map(([k, v]) => NavItem(k, v))}
                        </ul>
                    </div>
                    <button className="header_button">
                        <span className="s1"></span>
                        <span className="s2"></span>
                        <span className="s3"></span>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar