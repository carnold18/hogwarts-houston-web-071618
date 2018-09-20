import React, { Component } from "react";

export default class Hog extends Component {

 state = {
     infoState: false
 }

 render() {
   const {name, specialty, greased, medal, ratio} = this.props.hog;

   const { infoState } = this.state

   const getHogImage = name => {
     console.log(name);
     const formattedName = name.split(" ").join("_").toLowerCase();

     const pigPics = require(`../hog-imgs/${formattedName}.jpg`);
     return pigPics;
   }

   const displayDetails = () => {
       this.setState({ 
           infoState: !this.state.infoState })
   }

   return (
     <div className="ui card">
       <div className="content">
         <h4>Name: {name}</h4>
         <img src={getHogImage(name)} />
         <button onClick= {displayDetails}>Show Details!</button>
         {infoState ? (
            <div>
                <p>Specialty: {specialty}</p>
                <p>Greased: {greased}</p>
                <p>
                Weight as a ratio of hog to LG - 24.7 Cu. Ft. French
                Door Refrigerator with Thru-the-Door Ice and Water: {ratio}
                </p>
                <p>Medal: {medal}</p>
            </div>
         ) : null}
       </div>
     </div>
   );
 }
}