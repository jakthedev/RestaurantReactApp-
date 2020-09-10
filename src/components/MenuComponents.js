import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from  'reactstrap';
import { Link } from 'react-router-dom';


  function RenderMenuItem({ dish, onClick }) {
        // This function will simply return a view heree
    return(
        <Card >
            <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay className="ml-5">
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            </Link>
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
                    <RenderMenuItem dish={dish} />
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem> <Link to='/home'> Home </Link> </BreadcrumbItem>
                        <BreadcrumbItem active> Menu </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3> Menu </h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }


export default Menu;