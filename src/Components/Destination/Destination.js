import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import map from '../../images/Map.png';
import rideData from '../Data/Data';

const Destination = (props) => {
    
    const {id} = useParams();
    const history = useHistory();
    return (

        <div className="d-flex"   style={{backgroundColor:'lightBlue'}} >
            <div style={{width: '450px',height: '320px',marginLeft:"150px",marginTop:"150px",borderRadius:'10px' ,backgroundColor:"aquamarine"}}>
                <Form style={{width: '430px' , marginLeft:'10px',marginTop:'10px'}} >
                    <Form.Group controlId="formBasicStart">
                        <Form.Label>Pick Form</Form.Label>
                        <Form.Control type="text" name="startForm" placeholder="Dhaka" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEnd">
                        <Form.Label>Pick To</Form.Label>
                        <Form.Control type="text" name="journyEnd" placeholder="Barishal" />
                    </Form.Group>
                    <Form.Group controlId="selectDate">
                    <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Set your Date" />
                    </Form.Group>
                    
                </Form>
                <Button onClick={()=>history.push(`/finalDestination/${id}`)} style={{width: '430px' , marginLeft:'10px'}}  variant="primary">Search</Button>
                 
                    
            </div>
            <div>
                <img style={{height: '600px', marginLeft:"200px" , marginTop:"50px"}}src={map} alt=""/>
            </div>
        </div>
    );
};   

export default Destination;