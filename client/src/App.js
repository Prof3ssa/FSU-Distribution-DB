import React, { Component } from 'react';

import './App.css';

import {Layout, Header, Navigation, Content, Drawer} from 'react-mdl'
import {Link } from 'react-router-dom';
import Main from './components/Main';



import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';


const client = new ApolloClient({
  uri:'http://localhost:1080/graphql'
})




class App extends Component {
  render() {
    return (
      
      <ApolloProvider client={client}>
    <div className="big-content">
    
    <Layout>
      <Header className="header-color" title ="FSU" scroll>
        <Navigation>
          <Link to="/BikeDistribution">Bike Distribution</Link>
          <Link to="/CoatDistribution">Coat Distribution</Link>
          <Link to="/TyreDistribution">Tyre Distribution</Link>
          <Link to="/Reports">Reports</Link>
        </Navigation>
      </Header>
      <Drawer title="Menu">
        <Navigation>
          <Link to="/LandingPage">Home</Link>
          <Link to="/BikeDistribution">All Projects</Link>
          <Link to="/CoatDistribution">District IPC's</Link>
          <Link to="/TyreDistribution">Distribution Charts</Link>
          <Link to="/Settings">Settings</Link>
          
          
        </Navigation>
      </Drawer>
      <Content>
        <div className ="Page-Content"/>
        <Main />
      </Content>
    </Layout>
     
  
    
      
        

    </div>
    </ApolloProvider>
    
    );
  }
}

export default App;
