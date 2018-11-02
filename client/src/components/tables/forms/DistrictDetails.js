import React, {Component} from 'react';
import{ graphql} from 'react-apollo';
import {getDistrictQuery} from '../../../queries/queries';



class DistrictDetails extends Component{

    displayProjects(){
        console.log(this.props);
        const {district} = this.props.data;
        if(district){
            return(<div>
                <h3>IPC: {district.districtname}</h3>
                <h6>Projects: </h6>
                <ul>{district.projects.map(district =>{
                    return <li>{district.projectname}</li>
                })}</ul>
                </div>
                );
        } else {
            return(<h5>No IPC Selected</h5>)
        }
    }
    
    


    
    render() {
      
        

        return (
            <div>
                
              {this.displayProjects()}
            </div>
        )
    }
}

export default graphql(getDistrictQuery,{
    options:(props) => {
        return{
            variables: {
                id: props.districtId
            }
        }
    }
})(DistrictDetails);