import react, { useState, useEffect } from 'react';
import './Table.css';
import QueryInfoDetailsCompnent from '../QueryComponent/QueryInfoDetailsCompnent';
import { NavLink, Link, BrowserRouter as Router, Route, Routes, useParams, Redirect } from 'react-router-dom';
import TableColumnComponent from './TableColumnComponent';
import SortComponent from '../SortComponent/SortComponent';
import QueryService from '../QueryServiceComponent/QueryServiceComponent';
const MAX_CHAR = 32;
const regex = /^[A-Za-z0-9 ]+$/;
const TableComponent = (props) => {
    const { queryData } = props;
    const [queryDataForTable, setQueryDataForTable] = useState(queryData);
    const [eventType, setEventType] = useState('')
    const [deleteId, setDeleteId] = useState({ id: '', queryRef: '', queryType: '', raisedBy: '', raisedOn: '', status: '' })

    useEffect(() => {
        console.log("TableComponent");
        console.log(queryData);
        setQueryDataForTable((Array.from(queryData)));
    }, [queryData])

    const isValidQueryRef = (query) =>
        query != undefined && query.queryRef != undefined && regex.test(query.queryRef) && query.queryRef.length <= MAX_CHAR;

    const OnSotHanlder = (e) => {
        setQueryDataForTable((Array.from(e)));
    }
    const OnDeleteHandler = (e) => {
        setEventType('Delete')
        setDeleteId({ 'id': e })
    }
    const OnEditHandler = (e) => {
        props.OnEditHandler(e);
    }

    const OnDeleteDataHandler = (e) => {
        setEventType('')
        console.log("OnDeleteDataHandler", e)
        setQueryDataForTable((Array.from(e)));
    }
    return (
        <section>
            <div>
                {< QueryService data={deleteId} eventType={eventType} OnDeleteDataHandler={OnDeleteDataHandler}   ></QueryService>}
                {/* <Router> */}
                    <table >
                        <tr>
                            <th >Query Reference
                                <SortComponent OnSotHanlder={OnSotHanlder} queryData={queryDataForTable} sortingField="Query Reference"></SortComponent>
                            </th>
                            <th >Query Type
                                <SortComponent OnSotHanlder={OnSotHanlder} queryData={queryDataForTable} sortingField="Query Type"></SortComponent>
                            </th>
                            <th>Raised By
                                <SortComponent OnSotHanlder={OnSotHanlder} queryData={queryDataForTable} sortingField="Raised By"></SortComponent>
                            </th>
                            <th>Raised On
                                <SortComponent OnSotHanlder={OnSotHanlder} queryData={queryDataForTable} sortingField="Raised On"></SortComponent>
                            </th>
                            <th>Status
                                <SortComponent OnSotHanlder={OnSotHanlder} queryData={queryDataForTable} sortingField="Status"></SortComponent>
                            </th>
                        </tr>
                        {queryDataForTable.filter(isValidQueryRef).map((query, index) => (
                            < TableColumnComponent OnDeleteHandler={OnDeleteHandler} OnEditHandler={OnEditHandler} queryRef={query.queryRef} queryType={query.queryType} raisedBy={query.raisedBy} raisedOn={query.raisedOn} status={query.status} id={query.id} >
                            </TableColumnComponent>
                        ))}
                    </table>

                    <Routes>
                 <Route exact path='/:id'     element={<QueryInfoDetailsCompnent />} />    
             
                    </Routes>
                {/* </Router> */}
                {/* {IsDataLoaded && <QueryApiComponent OnLoadDataHanlder={OnLoadData}></QueryApiComponent>} */}
            </div>
        </section>);
}
export default TableComponent;