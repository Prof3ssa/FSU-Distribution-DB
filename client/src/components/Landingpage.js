import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

import BikeTable from './tables/BikeTable';


class LandingPage extends Component {
    render(){
        return(
            <div style ={{width:'100%' , margin: 'auto'}}>
                
                <Grid className="landing-grid">
            
                <Cell col={12}>
            
                <div className="banner-text">
                <h1> FSU Distribution Database</h1>
              

                </div>
                
                
                </Cell>
                
                </Grid>

                <Grid>
                    <Cell col={4}>
                    <div className="banner-text">
                        <h3>Bike Distribution</h3>
                        </div>
                        <div className="table-class">
                        <BikeTable />
                        </div>
                       
                        
                        
                        
                       
                     
                    
                    </Cell>

                    <Cell col={4}>
                    <div className="banner-text">
                        <h3>Coat Distribution</h3>
                        </div>
                        
                    
                        


                    </Cell>
                    <Cell col={4}>
                    <div className="banner-text">
                        <h3>Tyre Distribution</h3>
                        </div>
                        
                    
                        


                    </Cell>

                </Grid>
            
            </div>
        )
    }
}

export default LandingPage;