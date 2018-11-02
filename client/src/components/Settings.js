import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

import RemoveProject from './tables/forms/RemoveProject';
import RemoveDistrict from './tables/forms/RemoveDistrict';



class Settings extends Component {




    render(){
        return(
            <div>
            <h2 align ="center">Settings</h2>
            <Grid>
                <Cell col={6}> 
                
                <RemoveProject/>
                
                
                </Cell>
                <Cell col={6}> 
                <RemoveDistrict />
                
                
                
                </Cell>
            </Grid>
            
            
            
            
            
            
            </div>
        )
    }
}

export default Settings;