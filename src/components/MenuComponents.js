import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        // Required whenever you define a class component
        super(props);
        // Bring in some data for the component, wish we will make use of inorder to construct
        // for the list of dishes on the menu, to do that we are going to have to define a state
        // That stores properties.
        this.state = {
            dishes: [
                {
                    id: 0,
                    name: 'Uthapizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'Aunique combination of '
                }

            ]
        }
    }

    render() {

        const menu;
        // This returns the co-responding view for this component,
        // This is what will be displayed on the UI by the component
        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>

        );
    }
}
// When creating a component dont forget to export the component from this file.
export default Menu;