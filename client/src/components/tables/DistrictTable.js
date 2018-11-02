import React, {Component} from 'react';

import {graphql} from 'react-apollo';
import {getDistrictsQuery} from '../../queries/queries';
import ReactTable from 'react-table';
import 'react-table/react-table.css'






const columns =[{
    Header: 'IPC',
    accessor: 'districtname'
}];






class DistrictTable extends Component {

    
  
    render() {    

       var data = this.props.data
       console.log(data)
    

        return(
                
       <div>

           <ReactTable
            data = {data.districts}
            columns={columns}
            />

       </div>
        
            


        )
    }


}

export default graphql(getDistrictsQuery)(DistrictTable);


