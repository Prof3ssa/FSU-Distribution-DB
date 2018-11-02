import React, {Component} from 'react';
import{ graphql, compose} from 'react-apollo';

import {getProjectsQuery, deleteProjectMuattion} from '../../../queries/queries';
import ProjectDetails from './ProjectDetails';

// add provision to refuse already added districts
// add "District Added message"
// 

class RemoveProject extends Component {

    constructor(props){
        super(props);
        this.state = {
            selected: null,
            
        }
    }

    displayProjects(){
        var data = this.props.getProjectsQuery;
        if(data.loading){
            return(<option>Loading Projects ..</option>)
        } else {
            return data.projects.map(project => {
                return(
                    
                      <option key ={project.id} value={project.id}>{project.projectname}</option>
                    
                );
            })
        }
    }
    
    submitForm(e){
        
        e.preventDefault();
        //console.log(this.state);
        this.props.deleteProjectMuattion({
            variables:{
                id: this.state.selected
            },
            refetchQueries: [{query: getProjectsQuery}]
        });
    }

    onClickProject(){
        alert('Project Successfully Deleted');
    }

    render(){
        
        return(
            
                <div>
                <h4 align ="center"> Remove Project</h4>
                <div className="form-style-5">
                    <form  onSubmit={this.submitForm.bind(this)}>
                        <select onChange={(e) => {this.setState({selected: e.target.value})}} >
                            <option>Choose Project To Delete</option>
                            
                            {this.displayProjects()}
                            
                        </select>
                        <button type="submitDelete" onClick={this.onClickProject}>Delete</button>
                    </form>

                    
                    <h4 align="center">Project Details</h4>
                    <ProjectDetails projectId ={this.state.selected}/>
                   

                   
                
                </div>
                </div>
                
       
         
            
        )
       
    }
}

export default compose(
    graphql(getProjectsQuery,{name:"getProjectsQuery"}),
    graphql(deleteProjectMuattion,{name:"deleteProjectMuattion"}))
    (RemoveProject);