const graphql = require('graphql');
const _= require('lodash');
const Project = require('../models/project');
const District = require('../models/district');

const { GraphQLObjectType,
    GraphQLString, 
    GraphQLID, 
    GraphQLInt, 
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull } = graphql;

    /*
    var districts = [
        {id: 1, districtname: "Kasungu"},
        {id: 2, districtname: "Balaka"},
        {id: 3, districtname: "Ntcheu"},
        {id: 4, districtname: "Nthisi"}
        
    ];

    var projectdist = [

        {projectname: "CTA", bikenumber: 30, distributedyear: 2015, id:1, distrcitid: 1},
        {projectname: "CORDAID",bikenumber: 60, distributedyear: 2017, id:2, districtid: 2},
        {projectname: "CORDAID",bikenumber: 31, distributedyear: 2018, id:3, districtid: 3},
        {projectname: "YASMI",bikenumber: 51, distributedyear: 2018, id:4, districtid: 3},
        {projectname: "GO",bikenumber: 151, distributedyear: 2018, id:5, districtid: 3},
        {projectname: "INVC",bikenumber: 444, distributedyear: 2016, id:6, districtid: 2},
        {projectname: "INVC",bikenumber: 78, distributedyear: 2013, id:7, districtid: 4},
        {projectname: "CA",bikenumber: 3, distributedyear: 2012, id:8, districtid: 3},
        {projectname: "CA",bikenumber: 400, distributedyear: 2010,id:9, districtid: 1}
    
    ]; 
*/

    const DistrictType = new GraphQLObjectType({

        name: 'District',
        fields: () =>({
            
            id: {type: GraphQLID},
            districtname: {type: GraphQLString},

            projects :{
                type: new GraphQLList(ProjectType),
                resolve(parent,args){
                  
                    //return _.filter(projectdist, {districtid: parent.id});
                    return Project.find({districtid:parent.id});
                    
                }
            }
         
        })
    });

    const ProjectType = new GraphQLObjectType({

        name: 'Project',
        fields: () => ({

            id: {type: GraphQLID},
            projectname: {type: GraphQLString},
            bikenumber: {type: GraphQLInt},
            distributedyear: {type: GraphQLInt},
            districtid: {type: GraphQLID},

            districts : {
                type: new GraphQLList(DistrictType),
                resolve(parent,args){
                    
                    //return _.find(districts, {id: parent.districtid});
                    return District.findById(parent.districtid);
            }

         
        },
             
            district : {
                type: DistrictType,
                resolve(parent,args){
                    return District.findById(parent.districtid);
                }
            }


        })
    });

    const RootQuery = new GraphQLObjectType({
        name : 'RootQueryType',
        fields: {
            district: {
                type: DistrictType,
                args: {id: {type: GraphQLID}},
                resolve(parent,args){

                    return District.findById(args.id);
                    //return _.find(districts, {id: Number.parseInt(args.id)});
                }
             },

            project: {
                type: ProjectType,
                args: {id: {type: GraphQLID}},
                resolve(parent, args){
                    
                    return Project.findById(args.id);
                    //return _.find(projectdist, {id: Number.parseInt(args.id)});
                }
            },

            projects: {
                type: new GraphQLList(ProjectType),
                resolve(parent,args){
                    //return projectdist
                    return Project.find({});
                }
            },

            districts: {
                type: new GraphQLList(DistrictType),
                resolve(parent,args){
                    //return districts
                    return District.find({});
                    
                }
            }



        }
    });

    const Mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            addDistrict:{
                type: DistrictType,
                args: {
                    districtname: {type: new GraphQLNonNull(GraphQLString)}
                       },
                       resolve(parent,args){
                       let district = new District({
                           districtname: args.districtname
                       });
                          return district.save()
                    }
            },

            addProject: {
                type: ProjectType,
                args: {
                    projectname: {type: new GraphQLNonNull(GraphQLString)},
                    bikenumber: {type: GraphQLInt},
                    distributedyear: {type: GraphQLInt},
                    districtid: {type: new GraphQLNonNull(GraphQLID)}
                },

                resolve(parent,args){
                    let project = new Project({
                        projectname: args.projectname,
                        bikenumber: args.bikenumber,
                        distributedyear: args.distributedyear,
                        districtid: args.districtid
                    });
                        return project.save();
                }
            },

            deleteProject: {
                type: ProjectType,
                args: {
                    id: { type: GraphQLID}
                 
                },
                    resolve(parent, args){
                        return Project.findByIdAndDelete(args.id);
                    }

               
              },

              deleteDistrict: {
                  type: DistrictType,
                  args: {
                      id: {type: GraphQLID}
                  },
                  resolve(parents,args){
                      return District.findByIdAndDelete(args.id);
                  }
              }

            
        }

    })


    


    


    module.exports = new GraphQLSchema({

        query: RootQuery,
        mutation: Mutation
    
    });
    