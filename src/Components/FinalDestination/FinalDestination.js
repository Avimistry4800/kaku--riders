import React, { useEffect, useState } from 'react';
import rideData1 from '../Data/Data';
import map from '../../images/Map.png';
import './FinalDestination.css';
import { useParams } from 'react-router';



const FinalDestination = () => {

  
  const {id} = useParams();
  
    

     const vehicle = rideData1.find(ride => ride.id == id);
     console.log(vehicle);
     const { name, quantity, img, price} = vehicle;
    return (
        <div className="d-flex" style={{backgroundColor:'lightBlue'}}>
            
        <div className="ride-details">
            <div className='divStyle'>
                <h4> Dhaka</h4>
                <h4> Barishal</h4>
            </div>
            <div className="ride">
              <p><img style={{height: '40px'}} src={img} alt=""/><span style={{marginLeft: '20px'}}> vehicle: {name}</span> <span style={{marginLeft: '20px'}}> Seat  Book: {quantity}</span> <span style={{marginLeft: '20px'}}> Cost:{price}</span></p>  
            </div>
            <div className="ride">
              <p><img style={{height: '40px'}} src={img} alt=""/><span style={{marginLeft: '20px'}}> vehicle: {name}</span> <span style={{marginLeft: '20px'}}> Seat Book: {quantity}</span> <span style={{marginLeft: '20px'}}> Cost:{price}</span></p>  
            </div>
            <div className="ride">
              <p><img style={{height: '40px'}} src={img} alt=""/><span style={{marginLeft: '20px'}}> vehicle: {name}</span> <span style={{marginLeft: '20px'}}> Seat Book: {quantity}</span> <span style={{marginLeft: '20px'}}> Cost:{price}</span></p>  
            </div>
          
            
        </div>
        <div>
            <img style={{height: '600px', marginLeft:"200px" , marginTop:"50px"}}src={map} alt=""/>
        </div>
    </div>
    );
};

export default FinalDestination;