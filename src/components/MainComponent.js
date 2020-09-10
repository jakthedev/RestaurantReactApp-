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
        // When this function is invoke this will get the parmeter that is require to display it.
        const DishWithId = ({match}) => {
            return(
              <Dishdetails dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                     comments={this.state.comments.filter((comment) => comment.id ===  parseInt(match.params.dishId,10))}
                      />
            );

        }


        return (
            <div>
                <Header/>
                <Switch>
                <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route excact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                    <Footer />
            </div>
        );
    }
}

export default Main;