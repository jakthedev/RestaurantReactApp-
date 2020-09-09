import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponents';
import Contact from "./ContactComponent";
import Dishdetails from './DishdetailComponent.js';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders.js';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    render() {

        const HomePage = () => {
           return(
             <Home dish={this.state.dishes.filter((dish) => dish.featured) [0]}
                   promotion={this.state.promotions.filter((promo) => promo.featured) [0]}
                   leader={this.state.leaders.filter((leader) => leader.featured) [0]}/>
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
                    <Route excact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                    <Footer />
            </div>
        );
    }
}

export default Main;