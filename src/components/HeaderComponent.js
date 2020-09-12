import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NavbarText from "reactstrap/lib/NavbarText";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handelLogin = this.handelLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handelLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + "Password: " + this.password.value
        + " Remember: " + this.remember.checked);
        event.preventDefault();
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
                                    <span className="fa fa-address-card fa-lg"> </span> Contact Us
                                </NavLink>
                            </Navbar>
                        </Nav>
                            <Nav className="ml-auto" navbar>
                                <Navbar>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"> </span> Login
                                    </Button>
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
                <Modal isOpen={this.state.isModalOpen} toggle= {this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username"> Username </Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password"> Password </Label>
                                <Input type="password" id="password" name="password"
                                innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" /> Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary"> Login </Button>
                        </Form>

                    </ModalBody>
                </Modal>
                </>
        );
    }
}

export  default  Header;