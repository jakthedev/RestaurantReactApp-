import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';


   function ConvertDateToCommentDateFormat({timestamp}) {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }
    function RenderDish({dish}){
        return(
            <div className="row">
                <Card>
                    <CardImg src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
   function RenderComments({comments}) {
        if (comments == null || comments.length === 0) {
            return (
                <div></div>
            );
        }

        const renderedComments = comments.map((comment) => {
            return (
                <li>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',
                        { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            );
        });

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    { renderedComments }
                </ul>
            </div>
        );
    }

    const Dishdetails = (props) => {
        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem> <Link to='/menu'> Menu </Link> </BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name} </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3> {props.dish.name} </h3>
                            <hr />
                        </div>
                    </div>
                <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>

                </div>
            );
        }
    }


export default Dishdetails;