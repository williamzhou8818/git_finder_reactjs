import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';
// Components 
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';



// Import Pages 
import About from './components/pages/About';

import GithubState from './context/github/GithubState';

import AlertState from './context/alert/AlertState';


import './App.css';

 const App = () =>  {

  // state = {
  //   persons: [
  //     {title: 'Map One', map: false},
  //     {title: 'Map Two', map: false},
  //     {title: 'Map Three', map: false}

  //   ]

  // }

  //  switchNameHander = () => {
  //     this.setState( {
  //       persons: [
  //         {title: 'Map change', map: true},
  //         {title: 'Map Two', map: true},
  //         {title: 'Map Three', map: true}
    
  //       ]
  //     });

  //     console.log(this.state)
  //  }

//  render() {
   
//    return (
//      <div>
//        {this.state.persons.map((p, i) => {
//          return (
//            <ul key={i}> 
//              <li onClick={this.switchNameHander}>{p.title }</li>
             
//            </ul>
//           )
//        })}
//      </div>
//    )
//  }
    return (
      <GithubState> 
        <AlertState >
        <Router>
        <div className='app' >
          <Navbar/>
            <div className='container'>
              <Alert  />
              <Switch>
                <Route exact path='/' render={props => (
                  <Fragment>
                      <Search />

                      <Users  />

                  </Fragment>
                )} 
                />
                <Route exact path='/about'  component={About} />
                <Route exact path='/user/:login' component={User} /> 
              

              </Switch>

            </div>
        </div>
        </Router>
        </AlertState>
        
      </GithubState>

  );
}
  
export default App;
