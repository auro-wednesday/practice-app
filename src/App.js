import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import About from './About';
import Users from './Users';
  

function App() {
  return (
   
    <Router>
       <div className="App">
         <ul>
           <li>
             <Link to='/'>Home</Link><hr/>
             <Link to='/about'>About</Link><hr/>
             <Link to='/users'>Users</Link>
           </li>
         </ul>

         <Switch>
           <Route path="/about">
             <About/>
           </Route>
           <Route path="/users">
             <Users/>
           </Route>
         </Switch>
       </div>
    </Router>
    
  );
}

export default App;
