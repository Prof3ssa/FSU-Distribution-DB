import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class CoatDistribution extends Component {
    render(){
        return(
            <div>
                <div align ="center">
                <h1>Dustcoat Distribution</h1>
            </div>
            <div>
                <Grid>
                    <Cell col={6}>
                    <h3>Projects</h3>

                    </Cell>
                    <Cell col={6}>
                    <h3>Districts</h3>

                    </Cell>
               
              



                </Grid>
            </div>




            </div>
            
        )
    }
}

export default CoatDistribution;