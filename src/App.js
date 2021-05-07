import logo from './logo.svg';
import './App.css';
import Contact from './Contact'
import Dashboard from './Dashboard'
import Header from './Header'
import Home from './Home'
import Profile from './Profile'
import Login from './Login2'
import SignUp from './SignUp'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
function App() {
  return (
   <Router>
     <div className="App">
       <Header>
       </Header>
       <Switch>

         <Route exact path="/">
          <Home/>
         </Route>

         <Route exact path="/Profile">
          <Profile/>
         </Route>

         <Route exact path="/Profile/Login2">
          <Login/>
         </Route>

         <Route exact path="/Profile/SignUp">
          <SignUp/>
         </Route>

         <Route  path="/Contact">
          <Contact/>
          </Route>

          <Route exact path="/Profile/Login/Dashboard">
          <Dashboard/>
         </Route>
       </Switch>
     </div>
   </Router>

  );
}

export default App;
