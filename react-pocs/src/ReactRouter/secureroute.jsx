import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, NavLink, Switch, Route, Navigate, Prompt } from 'react-router-dom';
import { authentication } from '../Service/authentication';
import QueryComponent from '../QueryComponent/QueryComponent/QueryComponent';
export default function SecuredRoute(props) {
  
        // <Route path={props.path} render={
        //     data => authentication.getLogInStatus() ?
        //         (<props.component {...data}></props.component>) :
        //         (<Navigate  to={{ pathname: '/' }}></Navigate>)
        // }></Route>
        console.log('SecuredRoute');
        debugger;        
        let user = authentication.getLogInStatus();
        console.log(user);
        if (!user) {        
            console.log(user);  
          // user is not authenticated
          return <Navigate to="/" />;
        }
        return  <QueryComponent />;  
}