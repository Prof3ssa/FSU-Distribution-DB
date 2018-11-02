import React, {Component} from 'react';
import{ graphql} from 'react-apollo';
import {getProjectQuery} from '../../../queries/queries';


class ProjectDetails extends Component{
    
    displayDetails(){
        console.log(this.props);
        const {project} = this.props.data;
        if(project){
            return(<div>
                <h3>Project: {project.projectname}</h3>
                <h4>IPC: {project.district.districtname}</h4>
                <h5>Bicycles: {project.bikenumber}</h5>
                <h5>Season: {project.distributedyear}</h5>
                
                
            </div>)
        } else {
            return(<div>
                <h5>No Project Selected</h5>
            </div>)
        }

    }

    
    render() {
      
        

        return (
            <div>
                {this.displayDetails()}
            </div>
        )
    }
}

export default graphql(getProjectQuery,{
    options:(props) => {
        return{
            variables: {
                id: props.projectId
            }
        }
    }
})(ProjectDetails);