import React from "react";
// import axios from 'axios';
import {Route} from 'react-router-dom';
import Form from './form'
import Home from './homepage'

const App = () => {


  return (
  <div>
    <Route exact path = '/'>
      <Home/>
    </Route>
    <Route exact path = '/pizza'>
      <Form/>
    </Route>
  </div>
  );
};
export default App;
