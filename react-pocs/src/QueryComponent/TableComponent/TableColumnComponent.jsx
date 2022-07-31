import react from 'react';
import QueryInfoDetailsCompnent from '../QueryComponent/QueryInfoDetailsCompnent';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const TableColumnComponent = (props) => {
    const deleteUser = (id) => {

    }
    return (

        <tr>
            {<td> <Link to={`query${props.queryRef}`} >{`query${props.queryRef}`}</Link> </td>}
            <td> {props.queryType} </td>
            <td> {props.raisedBy}</td>
            <td> {props.raisedOn}</td>
            <td> {props.status}</td>
            <td>
                <button onClick={() => { props.OnDeleteHandler(props.id) }}>Delete</button>
            </td>
            <td>
                <button onClick={() => { props.OnEditHandler(props) }}>Edit</button>
            </td>
        </tr>
    )
}
export default TableColumnComponent