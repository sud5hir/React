import react from 'react';
import './Routing.css';
import ProjectDetailsComponent from './ProjectDetailsComponent';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams,
    useMatch ,
    useHistory, Redirect
} from "react-router-dom";

export default function ProjectComponent(props) {

    let { path, url } = useMatch ();

    const goBack = () => {
        props.history.push('/');// go back to specific paghe
        //props.history.goBack();// exactly prvious page
    }

    return (
        <div>
            <h3>Welcome to Project Compnent:</h3>
            {props.match.url}
            {url}
            <br></br>
            {props.match.path}
            {path}
            <div className="div1">
                <Link to={`${props.match.url}/angular`}>angular</Link>
                <Link to={`${props.match.url}/react`}>react</Link>
                <Link to={`${url}/mvc core`}>mvc core</Link>
                <button onClick={goBack} >Go Back</button>
            </div>
            <Routes>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${props.match.path}/:id`} element={<ProjectDetailsComponent/>} >
                </Route>
            </Routes>
        </div>
    )
}