import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponents';
import Dishdetails from './DishdetailComponent.js';
import { DISHES } from '../shared/dishes';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId){
        this.setState({ selectedDish:dishId});
        // This is only tracking the dish Id and not the dish information
    }


    render() {
        return (
            <div>
                <Navbar dark color={"primary"}>
                    <div className="container">
                        <NavbarBrand href={"/"}> Name Of Chow Spot</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}
                      onClick={(dishId) => this.onDishSelect(dishId)}/>
                {/*// Here we are making good of the array operators, after we pass the dish information
                to the javascript component, it goes into the dishes array and selects out the dish that was
                   chosen information and pass that to the dish details components,
                    To do this we make use of the arrays operators in javascript, to enables us to abstract
                    the details of the selected dish. */}
                <Dishdetails

                    dish={this.state.dishes.filter((dish) =>dish.id === this.state.selectedDish )[0]} />
            </div>
        );
    }
}

export default Main;