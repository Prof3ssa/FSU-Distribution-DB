import React, {Component} from 'react';
import{ graphql, compose} from 'react-apollo';

import {getDistrictsQuery, addDistrictMutation} from '../../../queries/queries';

// add provision to refuse already added districts
// add "District Added message"
// 
class AddDistrict extends Component {

    constructor(props){
        super(props);
        this.state = {
            districtname: '',
        
        };
    }

    onClickDistrict(){
        alert('IPC Added Successfully');
    }

    submitForm(e){
        
        e.preventDefault();
            console.log(this.state);
            this.props.addDistrictMutation({
                    variables:{
                        districtname: this.state.districtname,
                    },
                    refetchQueries: [{query: getDistrictsQuery}]
                });
            }   


    render(){
        return(
        
            <div className="form-style-5">
            <form onSubmit={this.submitForm.bind(this)}>
            <fieldset>
            
            <input type="text"  placeholder="IPC" onChange={(e=> this.setState({districtname: e.target.value}))}/>
            </fieldset>
            <input type="submit" value="Add" onClick ={this.onClickDistrict}/>
            <input type="reset" value="Reset" />
            </form>
            </div>
       
         
            
        )
    }
}

export default compose(
    graphql(addDistrictMutation,{ name:"addDistrictMutation"}),
    graphql(getDistrictsQuery,{name: "getDistrictsQuery"}))(AddDistrict);