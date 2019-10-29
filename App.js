import React, {Component} from 'react';

import './App.css';
import Brand from "./Brand";
import offer from "./images/offer.jpg"


const fashion = [
  {category : "Female-Clothes" , offer:"50% off",index:"1."},
  {category  :"Male-Clothes", offer:"70% off",index:"2."}, 
  {category : "Kids-Clothes",offer:"80% off",index:"3."}
];



const brand =[ 
  {category:"PUMA",offer:"50% off",index:"1."},
  {category:"ADIDAS",offer:"50% off",index:"2."}
];

 const Watch=[
   {category:"FASTRACK",offer:"50% off",index:"1."},
 {category:"SONATA",offer:"50% off",index:"2."},
 {category:"TITAN",offer:"50% off",index:"3."}
];



class App extends React.Component{
  
  render(){
    return(
      <div class="mainpage">
      <img   class="image" src ={offer} alt="hers is the offer"/>
    
        
        <Brand  title={"FASHION"}  pass={fashion} />
        <Brand title={"SHOES"} pass={brand}/>
        <Brand title={"WATCH"} pass={Watch}/>



      </div>
    );
  }
}

export default App;
