import React, {Component} from 'react';
import {graphql, compose} from 'react-apollo';
import {getDistrictsQuery, addProjectMutation, getProjectsQuery} from '../../../queries/queries';


//add validation for adding data
//add validation for existing data



class AddBikes extends Component {

    constructor(props){
        super(props);
        this.state ={
            projectname: '',
            bikenumber: null,
            distributedyear: null,
            districtid: ''
        };
    }



    onClickProject(){
        alert('Project Successfully Added');
    }

   displayDistricts(){
       var data = this.props.getDistrictsQuery;
       console.log(data);
       if(data.loading){
           return (<option>Loading..</option>);
       } else {
           return data.districts.map(district => {
               return(<option key = {district.id} value={district.id}> {district.districtname}</option>);
           });
       }
   } 
   
   submitForm(e){
        
    e.preventDefault();
    //console.log(this.state);
    this.props.addProjectMutation({
        variables:{
            projectname: this.state.projectname,
            bikenumber: Number.parseInt(this.state.bikenumber),
            distributedyear: Number.parseInt(this.state.distributedyear),
            districtid: this.state.districtid
        },
        refetchQueries: [{query: getProjectsQuery}]
    });
}

    render(){
        return(
            <div className="form-style-5">
            
            <form onSubmit={this.submitForm.bind(this)}>
                
                <input type="text" placeholder="Project Name"  onChange={(e)=> this.setState({projectname: e.target.value})}/>
            
                <input type="number" placeholder="Number of Bicycles"  onChange={(e)=> this.setState({bikenumber: e.target.value})}/>
             
                <input type="text" placeholder="Season"  onChange={(e)=> this.setState({distributedyear: e.target.value})}/>

                <select  onChange={(e)=> this.setState({districtid: e.target.value})}>
                    <option>Select IPC..</option>
                    {this.displayDistricts()}
                </select>

                <input type="submit" value="Add" onClick={this.onClickProject}/>
                <input type="reset" value="Reset"/>
            </form>

            
             
            </div>
            
        )
    }
}


export default compose(
    graphql(getDistrictsQuery,{name: "getDistrictsQuery"}),
    graphql(addProjectMutation,{name:"addProjectMutation"}))
    (AddBikes);