import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from  'reactstrap';
//import Dishdetails from './DishdetailComponent.js';( goes in main component)

// class Menu extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     selectedDish: null ( moved to MainComponent )
    // }
    // console.log('constructor');

    // onDishSelect(dish){
    //     this.setState({selectedDish:dish});
    // } ( Moved to main component)



    // renderDish(dish){
    //     if(dish!=null){
    //         return(
    //             <Card>
    //                 <CardImg width="100%" src={dish.image} alt={dish.name}/>
    //                 <CardBody>
    //                     <CardTitle>{dish.name}</CardTitle>
    //                     <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     }
    //     else{
    //         return(
    //             <div></div>
    //         );
    //     }
    // }

    // componentDidMount(){
    //     console.log('componentDidMount');
    // }

    // render(){
    // because the props is a javascript object we can easyly specify various properties, that will
    // be passed in as a javascript object

  function RenderMenuItem({ dish, onClick }) {
        // This function will simply return a view heree
    return(
        <Card key={dish.id}
              onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay className="ml-5">
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );

}
// turning this into is own functional component
    const Menu = (props) => {
        // now the const menu props, this function will return the menu,

        const menu = props.dishes.map((dish) => {
            return(
                // Inside here is where we are iterating over all the
                // Items
                <div className="col-12 col-md-5 m-1" key={dish.id}>
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }


export default Menu;