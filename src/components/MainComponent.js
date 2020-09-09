import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponents';
import Dishdetails from './DishdetailComponent.js';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            // selectedDish: null going to remove because, going to find a new way of navagating and
            // Supplying selected dish to the dish detail component.
        };
    }
    // going to remove because, going to find a new way of navagating and
    // Supplying selected dish to the dish detail component.
    // onDishSelect(dishId){
    //     this.setState({ selectedDish:dishId});
    //     // This is only tracking the dish Id and not the dish information
    // }


    render() {

        const HomePage = () => {
           return(
             <Home />
           );
        }
        return (
            <div>
                <Header />
                {/*<Menu dishes={this.state.dishes}*/}
                {/*      onClick={(dishId) => this.onDishSelect(dishId)}/>*/}
                {/*// Here we are making good of the array operators, after we pass the dish information
                to the javascript component, it goes into the dishes array and selects out the dish that was
                   chosen information and pass that to the dish details components,
                    To do this we make use of the arrays operators in javascript, to enables us to abstract
                    the details of the selected dish. */}
                {/*<Dishdetails*/}
                {/*    dish={this.state.dishes.filter((dish) =>dish.id === this.state.selectedDish )[0]} />*/}

                <Switch>
                {/*Going to use the switch component to enclose a couple routes into the Main component
                So we are going to route to the two views that we have just created(Home component)
                also the Menu component*/}
                <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
                    <Redirect to="/home" />
                </Switch>
                    <Footer />
            </div>
        );
    }
}

export default Main;