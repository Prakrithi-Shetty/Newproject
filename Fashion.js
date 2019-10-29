import React, {Component} from 'react';

import './App.css';

class Fashion extends React.Component{

    render()
    {
        return(
             <div class="print">
                 <div>
               {this.props.index}
                
              {this.props.category}
                 
                 </div>
                 <div>
            
                {this.props.offer}
                 <input type="checkbox"></input>
                 
                 </div>
                 
             </div>
        );
    }


}


export default Fashion;