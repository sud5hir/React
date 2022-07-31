import react from 'react';
import {   
    useParams, 
} from "react-router-dom";
export default function ProjectDetailsComponent(props) {

    let { id } = useParams();

    return (
        <div className="div1">
            <h3>Welcome to {props.match.params.id} projects</h3>
        </div>
    );
}