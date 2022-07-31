import React from 'react'
import { NavLink, Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className="div1">

            <div> <Link to='/'>Login</Link></div>
            <div><NavLink activeClassName="testClass" to='/Query'>Query</NavLink></div>
            <div><NavLink activeClassName="testClass" to='/ReactMemo'>ReactMemo</NavLink></div>
            <div><NavLink activeClassName="testClass" to='/UseMemo'>UseMemo</NavLink></div>
            <div><NavLink activeClassName="testClass" to='/UseCallback'>UseCallback</NavLink></div>
            <div><NavLink activeClassName="testClass" to='/UseRef'>UseRef</NavLink></div>
            <div><NavLink activeClassName="testClass" to='/BasicRedux'>BasicRedux</NavLink></div>
            <div><NavLink activeClassName="testClass" to='/AdvanceRedux'>AdvanceRedux</NavLink></div>
            <div><NavLink activeClassName="testClass" to='/Project'>Project</NavLink></div>
        </div>
    )
}

export default Navbar