import React from 'react';
import{BrowserRouter as Router,Route, Switch, Link} from "react-router-dom";
 
import CustomerList from './components/CustomerList';
import EditCustomer from './components/EditCustomer';
import CreateCustomer from './components/CreateCustomer';

 

const App: React.FC = () => {
  return (
    <div className="App">
       <Router>
           

     
       <Switch>
         <Route path={'/'} exact   component={CreateCustomer}/>
        <Route path="/edit-customer/:name/:address/:key" exact   component={EditCustomer}/>
        <Route path="/customer-list"  exact  component={CustomerList}/>

       </Switch>
     </Router>
    
    </div>
  );
}

export default App;
