import {gql} from 'apollo-boost';

const getDistrictsQuery = gql`
   
{
    districts{
      districtname
      id
      projects{
          projectname
          distributedyear
      }
    }
  }

`
const getProjectsQuery = gql`
   
    {
      projects{
        projectname
        bikenumber
        distributedyear
        districtid
        id
        
      }
    }

`

const addProjectMutation = gql`

mutation($projectname: String!, $bikenumber: Int, $distributedyear: Int $districtid: ID!){
    addProject(projectname:$projectname,bikenumber:$bikenumber,distributedyear:$distributedyear,districtid:$districtid){
        projectname
        bikenumber
        distributedyear
        districtid
    }
}

`

const addDistrictMutation = gql`

mutation($districtname: String!){
    addDistrict(districtname:$districtname){
      districtname
    }
  }
  
`
const getDistrictQuery = gql`

  query($id: ID!){
    district(id: $id) {
        id
        districtname
         projects {
             id
             projectname
      }
    }
  }

`

const getProjectQuery = gql`

    query($id: ID){
        project(id:$id){
            id
            projectname
            bikenumber
            distributedyear
            district{
                districtname
                
            }
        }

    }

`

const deleteProjectMuattion =gql`

mutation($id: ID!){
    deleteProject(id:$id){
      id
  
    }
  }

`

const deleteDistrictMutation =gql`

mutation($id: ID!){
    deleteDistrict(id:$id){
        id
    }
}

`


export {getDistrictsQuery,getDistrictQuery, getProjectsQuery, getProjectQuery, addProjectMutation, addDistrictMutation, deleteProjectMuattion, deleteDistrictMutation};