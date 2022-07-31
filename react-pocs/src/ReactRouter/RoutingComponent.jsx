import React, { Fragment,Suspense } from 'react';
import { NavLink, Link, BrowserRouter as Router, Route, Routes, useParams, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Login from '../Service/LoginService';
import QueryComponent from '../QueryComponent/QueryComponent/QueryComponent';
import CounterReactMemo from '../ReactMemo/CounterReactMemo';
import ReactCallback from '../UseCallbackEx/ReactCallback';
import RedeucerRoutingComponent from '../ReduxBasic/RedeucerRoutingComponent';
import PageNotFoundComponent from './PageNotFoundComponent';
import ReactUseRef from '../UseRef/ReactUseRef';
import ProjectComponent from './ProjectComponent';
import SecuredRoute from './secureroute';
import './Routing.css';
const UseMemoComponent = React.lazy(() => import('../ReactMemo/CounterReactMemo'));
const OtherComponent = React.lazy(() => import('../ReduxBasic/ReduxBasic'));

export default function RoutingComponent() {
    return (
        <div>
            <h3>Welcome to Routing Component</h3>
            <Router>
            <Fragment>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Login />} />   
                  
                    {/* <Route path="/Query"    element={<QueryComponent />} />            */}
                    
                    {/* <Route path="/Query">
                        <QueryComponent></QueryComponent>
                    </Route> */}
                    <Route path='/Query'   element={
            <SecuredRoute/>            
          }
        />
                    <Route path='/ReactMemo'element={<CounterReactMemo />} />    
                      
                    <Route path='/UseCallback' element={<ReactCallback />} />    
                      
                    <Route path='/UseRef' element={<ReactUseRef />} />    
                    <Route
            path="UseMemo"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <UseMemoComponent />
              </React.Suspense>
            }
          />
               <Route
            path="BasicRedux"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <OtherComponent />
              </React.Suspense>
            }
          />
                    {/* <Suspense fallback={<div>Loading...</div>}>
                   
                        <Route path='/UseMemo' element={<UseMemoComponent />} />    
                          
                        <Route path='/BasicRedux' element={<OtherComponent />} />  
                   
                                               </Suspense> */}
                    <Route path='/AdvanceRedux' element={<RedeucerRoutingComponent />} />  
                       
                    <Route path='/Project' element={<ProjectComponent />} />                                       
                      
                    <Route path='**'    element={<PageNotFoundComponent />} />  
                      
                 
                </Routes>
                </Fragment>
            </Router>
        </div>    )
}