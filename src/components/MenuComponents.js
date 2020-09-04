import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        // Required whenever you define a class component
        super(props);
        // Bring in some data for the component, wish we will make use of inorder to construct
        // for the list of dishes on the menu, to do that we are going to have to define a state
        // That stores properties of the component that we can make use of.
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
    this.setState({selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )

        }
        else {
            return(
                <div></div>
            )
        }
    }


    render() {
        // Defining the menu has a javascript const, after you have define the properties in
        // state you can refer to the code here
        const menu = this.props.dishes.map((dish) =>
        // map lets you iterate over all the items
            // Using a map operator
        {// returning a layout for the dish here
            return (
                // Inside this div we will construct the div for each of the items.
                // Whenever you construct a list of items in react, every item requires
                // A key atturibute to be specfied This is why we are taking a list of items and
                // rendering them here, the key helps when react is rendering these items to screen
                // recognize each one of the elements and why it is operating the screen so the
                // keys will help it to idenity the elements unqiuely, so it uses the key when it
                // needs to update. use the dish id to update the elements
                <div key={dish.id} className="col-12 col-md-5 mt-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                       <CardImg width="100%" object src={dish.image} alt={dish.name} />
                       <CardImgOverlay>
                        <CardTitle> {dish.name}</CardTitle>
                        <p>{dish.description}</p>
                    </CardImgOverlay>
                    </Card>
                       </div>
            );
        });

        // This returns the co-responding view for this component,
        // This is what will be displayed on the UI by the component
        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}
// When creating a component dont forget to export the component from this file.
export default Menu;