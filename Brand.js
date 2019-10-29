import React, {Component} from 'react';
import Fashion from "./Fashion";

import './App.css';

class Brand extends React.Component{

    render()
    {
        return(
            <div 
            style={{ border: "1px solid brown", margin: "10px 20px",textAlign:"center"  }}>
                <h1 class="title">{this.props.title}</h1>
                
      {this.props.pass.map(t => (
        <Fashion index={t.index} category={t.category} offer={t.offer} />
      ))}
                </div>
            
        );
    }


}


export default Brand;