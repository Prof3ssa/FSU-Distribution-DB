import React, {Component} from 'react';

import {graphql} from 'react-apollo';
import {getProjectsQuery} from '../../queries/queries';
import ReactTable from 'react-table';
import 'react-table/react-table.css'




/*
const columns =[
    {title:'Project', dataIndex: 'projectname', width:100},
    {title:'Distrbuted', dataIndex: 'bikenumber', width:100},
    {title:'Season', dataIndex: 'distributedyear', width:100},
    //{titel:'Action' ,dataIndex:'', render(){
    //    return <button>Delete</button>
  //  }}
];

const BodyRow = styled.tr`

    &:hover{
        background: palevioletred;
    }

`;

const components = {
    body: {
        row: BodyRow,
    },
};

*/


const columns =[{
    Header: 'Project',
    accessor: 'projectname'
},
{
    Header: 'Distributed',
    accessor: 'bikenumber'
},
{
    Header: 'Season',
    accessor: 'distributedyear'
}];






class BikeTable extends Component {

    
  
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

export default graphql(getProjectsQuery)(BikeTable);


