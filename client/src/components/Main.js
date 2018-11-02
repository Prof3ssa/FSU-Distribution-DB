import React from 'react';

import {Route, Switch} from 'react-router-dom';
import LandingPage from './Landingpage';
import CoatDistribution from './CoatDistribution';
import BikeDistribution from './BikeDistribution';
import TyreDistribution from './TyreDistribution';
import Settings from './Settings';
import Reports from './Reports';


const Main = () => (
    <Switch>
        <Route exact path="/" component ={LandingPage} />
        <Route path ="/LandingPage" component={LandingPage}/>
        <Route path ="/BikeDistribution" component={BikeDistribution}/>
        <Route path ="/CoatDistribution" component={CoatDistribution}/>
        <Route path ="/TyreDistribution" component={TyreDistribution}/>
        <Route path ="/Settings" component={Settings}/>
        <Route path ="/Reports" component={Reports}/>
        
    </Switch>
)

export default  Main;