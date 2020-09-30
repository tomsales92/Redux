import React from 'react';
import{Route, Switch} from "react-router-dom";

import Home from './pages/Home';
import Reservas from './pages/Reservas';

const Routes = () =>{
    return(
         <>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/reservas" component={Reservas}/>
            </Switch>
         </>
     );
    
}

export default Routes;