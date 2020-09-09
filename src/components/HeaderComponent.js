import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NavbarText from "reactstrap/lib/NavbarText";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            // by using the react fragment you dont add in an extra node element into the dom
            // you add in the react element directly into the DOM. This is the reason why we are using
            // the react fragment
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src='assets/images/logo.png' height="30"
                                 width="41" alt='Dope Food Site'/> </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavbarText>
                                <NavLink className="nav-link" to='/home'>
                                   <span className="fa fa-home fa-lg"/> Home
                                </NavLink>
                            </NavbarText>
                            <Navbar>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                            </Navbar>
                            <Navbar>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                            </Navbar>
                            <Navbar>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                                </NavLink>
                            </Navbar>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                   <div className="container">
                       <div className="row row-header">
                           <div className="col-12 col-sm-6">
                               <h1>Cool Food Site</h1>
                               <p>We take inspiration from the World's best cuisines, and create
                                   a unique fusion experience. Our lipsmacking creations will tickle
                                   your culinary senses!</p>
                           </div>
                       </div>
                   </div>
                </Jumbotron>
                </>
        );
    }
}

export  default  Header;