import React, {Component} from 'react';

import {getDistrictsQuery, deleteDistrictMutation} from '../../../queries/queries';
import { graphql, compose} from 'react-apollo';

import DistrictDetails from './DistrictDetails';

//add provision to check if district has projects
//if district has projects then cannot delete project


class RemoveDistrict extends Component {

    
    constructor(props){
        super(props);
        this.state = {
            districtid: null,
            
        }
    }

    displayDistricts(){
        var data = this.props.getDistrictsQuery;
        console.log(data);
        if(data.loading){
            return(<option>Loading..</option>)
        } else {
            return data.districts.map(district =>{
                return(<option key={district.id} value ={district.id}>{district.districtname}</option>);
            })
         }
        }

        submitForm(e){
        
            e.preventDefault();
            //console.log(this.state);
            this.props.deleteDistrictMutation({
                variables:{
                    id: this.state.districtid
                },
                refetchQueries: [{query: getDistrictsQuery}]
            });
        }

        onClickIPC(){
            alert('IPC Successfully Deleted');
        }

    render(){
        return(
            <div>
            <h4 align ="center"> Remove District</h4>
            <div className="form-style-5">
                <form  onSubmit={this.submitForm.bind(this)}>
                    <select onChange={(e) => {this.setState({districtid: e.target.value})}} >
                        <option>Choose Project To Delete</option>
                        
                       {this.displayDistricts()}
                        
                    </select>
                    <button type="submitDelete" onClick={this.onClickIPC}>Delete</button>
                </form>

                
                <h4 align="center">District Projects</h4>
                <DistrictDetails districtId = {this.state.districtid}/>
                
               

               
            
            </div>
            </div>

        )
    }
}

export default compose(
    graphql(getDistrictsQuery, {name: "getDistrictsQuery"}),
    graphql(deleteDistrictMutation,{name: "deleteDistrictMutation"}))
    (RemoveDistrict);