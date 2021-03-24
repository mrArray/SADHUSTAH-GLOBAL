import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import RegisterProject from './RegisterProject';
import Home from './Home';
import AllProjects from './AllProjects';
import Dashboard from './Dashboard';
import AssignTask from './AssignTask';
import Alltasks from './Alltasks';








const  Content = () => {


    
    return (
       <Switch>
  

  <Route exact path="/" component={Home}/>
           <Route  path="/Home" component={Home}/> 

          <Route exact path="/" component={Register}/>
           <Route  path="/Register" component={Register}/> 

           <Route exact path="/" component={Login}/>
           <Route  path="/Login" component={Login}/> 

           

           <Route exact path="/" component={RegisterProject}/>
           <Route  path="/RegisterProject" component={RegisterProject}/>

           <Route exact path="/" component={AllProjects}/>
           <Route  path="/allProjects" component={AllProjects}/>

           <Route exact path="/" component={Dashboard}/>
           <Route  path="/Dashboard" component={Dashboard}/>

           <Route exact path="/" component={AssignTask}/>
           <Route  path="/AssignTask" component={AssignTask}/>

           <Route exact path="/" component={Alltasks}/>
           <Route  path="/Alltasks" component={Alltasks}/>


       </Switch>

       
    )
}


export default Content;