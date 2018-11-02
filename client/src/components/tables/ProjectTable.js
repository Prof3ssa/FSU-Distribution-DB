import React, {Component} from 'react';

import {graphql} from 'react-apollo';
import {getProjectsQuery} from '../../queries/queries';
import ReactTable from 'react-table';
import 'react-table/react-table.css'





const columns =[{
    Header: 'Project',
    accessor: 'projectname'
}];






class ProjectTable extends Component {

    
  
    render() {    

       var data = this.props.data
       console.log(data)
    

        return(
                
       <div>

           <ReactTable
            data = {data.projects}
            columns={columns}
            />

       </div>
        
            


        )
    }


}

export default graphql(getProjectsQuery)(ProjectTable);


