import react from 'react';
import {
    useParams
} from "react-router-dom";

const QueryInfoDetailsCompnent = () => {
    let { id } = useParams();
    return (
        <h3 style={{ textAlign: "center" }} > Welcome to Query Compnent: {id} </h3 >
    )
}
export default QueryInfoDetailsCompnent;
