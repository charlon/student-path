import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Plan from './Plan'
import Courses from './Courses'
import Register from './Register'
import Track from './Track'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/plan' component={Plan}/>
      <Route path='/courses' component={Courses}/>
      <Route path='/register' component={Register}/>
      <Route path='/track' component={Track}/>
    </Switch>
  </main>
)

export default Main