import React, {Component} from 'react';
import AddBikes from './tables/forms/AddBikes';
import AddDistrict from './tables/forms/AddDistrict';

import {Grid, Cell} from 'react-mdl';
import DistrictTable from './tables/DistrictTable';
import ProjectsTable from './tables/ProjectTable';

class BikeDistribution extends Component {
    render(){
        return(
            <div>
            <div align ="center">
                <h1>Bicycle Distribution</h1>
            </div>
            
                <Grid>
                    <Cell col={6}>
                        <h3>Projects</h3>
                        <ProjectsTable />

                    </Cell>
                    <Cell col={6}>
                        <h3>Districts </h3>
                        <DistrictTable />
                         

                        

                    </Cell>
                    <Cell col={6}>
                    <h3 align = "center"> Add Distribution</h3>

                    <AddBikes />
                    
                    
                    </Cell>
                    <Cell col={6}>
                    <h3 align = "center"> Add IPCs</h3>

                    <AddDistrict />
                    
                    
                    </Cell>
                </Grid>
                </div>
            
        )
    }
}

export default BikeDistribution;