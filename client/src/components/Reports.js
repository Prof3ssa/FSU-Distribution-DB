import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Reports extends Component {
    render(){
        return(
            <div>
                <div align ="center">
                <h1>Reports</h1>
            </div>
            <div>
                <Grid>
                    <Cell col={6}>
                    <h3>Project Distribution</h3>

                    </Cell>

                    <Cell col={6}>
                    <h3>Distribution Overtime</h3>

                    </Cell>
               
              



                </Grid>
            </div>




            </div>
            
        )
    }
}

export default Reports;