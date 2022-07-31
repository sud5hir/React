import react from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';

export default function NestedRouter() {
    return (
        <diV>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/ContactUS">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/Membership">Membership</Link>
                        </li>
                    </ul>
                    <hr></hr>

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/About">
                            <About></About>
                        </Route>
                        <Route path="/ContactUS">
                            <ContactUs></ContactUs>
                        </Route>
                        <Route path="/Membership">
                            <Membership></Membership>
                        </Route>
                    </Switch>
                </div>

            </Router>
        </diV>
    )
}

function Home() {
    return (<h1> this is the my Home page </h1>)
}

function About() {
    return (<h1> this is the my About page </h1>)
}

function ContactUs() {
    return (<h1> this is the my ContactUs page </h1>)
}
function Membership() {

    let { path, url } = useRouteMatch();

    return (
        <div>
            <ul>
                <li >
                    <Link to={`${url}/gold`}>gold</Link>
                </li>
                <li >
                    <Link to={`${url}/platnium`}>platnium</Link>
                </li>
                <li >
                    <Link to={`${url}/silver`}>silver</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h3> Select one membership</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    )
}

function Topic() {

    let { topicId } = useParams();

    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}
function Gold() {
    return (<h1> this is the my Gold page </h1>)
}