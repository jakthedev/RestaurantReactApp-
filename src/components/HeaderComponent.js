import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return(
            // by using the react fragment you dont add in an extra node element into the dom
            // you add in the react element directly into the DOM. This is the reason why we are using
            // the react fragment
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href={"/"}> Name Of Chow Spot</NavbarBrand>
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