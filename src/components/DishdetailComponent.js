import React, { Component, useState } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem , Button, Modal, ModalHeader, ModalBody,Row,Col, FormGroup, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm,  Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const vide = (len) => (val) => val &&(val.length > len);

class CommentForm extends Component {

    constructor (props){
        super(props);
        this.state={
            isModalOpen: false,
            isNavOpen: false
        }
        this.toggleModal= this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render(){

        return(

            <>
                <Button outline onClick={this.toggleModal} outline color="primary" ><span className="fa fa-pencil fa-lg"> </span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating" className="form-control m-1">Rating
                                    <option>5</option>
                                    <option>4</option>
                                    <option>3</option>
                                    <option>2</option>
                                    <option>1</option>
                                    <option>0</option>
                                </Control.select>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="yourname"> Name </Label>

                                <Control.text model=".yourname" id="yourname" name="yourname" placeholder="Your Name"
                                              className="form-control" validators={{
                                    minLength: minLength(2),
                                    maxLength: maxLength(15)
                                }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{

                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}/>

                            </FormGroup>
                            <FormGroup >
                                <Label htmlFor="comment"> Comment </Label>
                                <Control.text model=".comment" id="comment" name="comment" rows="6"
                                              placeholder="Tell Us What You Think"
                                              className="form-control"
                                              validators={{
                                                  vide: vide(0)
                                              }}
                                />
                                <Errors className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages = {{
                                            vide: 'Dont forget to comment'
                                        }}
                                />

                            </FormGroup>
                            <Button type="submit" className="form" value="submit"
                                    color="primary"> <span className="fa fa-pencil fa-lg"> </span> Submit </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

function RenderDish({dish}) {
    if (dish != null){

        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle><h1>{dish.name}</h1></CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>

        );
    }
    else {
        return(
            <div>

            </div>
        );
    }
}
function RenderComments({comments, addComment, dishId}){
        if (comments != null)
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comments.id}>
                                    <p>{comments.comment}</p>
                                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: '2-digit'
                                    }).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                    <CommentForm dishId={dishId} addComment={addComment}/>
                </div>
            );
        else
            return(
                <div> </div>
            );
}

const Dishdetails =(props)=>{

    if(props.dish!=null)
    {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link> </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row  ">
                    <div className="col-12 col-md-5 m-1">
                        <Card>

                            <RenderDish dish={props.dish} />


                        </Card>
                    </div>
                    <div  className="col-12 col-md-5 m-1">

                        <RenderComments comments={props.comments}
                            addComment={props.addComment}
                            dishId={props.dish.id}/>

                    </div>




                </div>
            </div>


        );

    }
    else{
        return(
            <div> </div>
        );
    }



}


export default Dishdetails;