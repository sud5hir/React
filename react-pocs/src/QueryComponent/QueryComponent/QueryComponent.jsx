import react, { useState, useEffect } from 'react';
import QueryData from './QueryData';
import TableComponent from '../TableComponent/TableComponent';
import SearchComponent from '../SearchComponent/SearchComponent';
import FormComponentOnSubmit from '../FormComponent/FormComponentOnSubmit';

const QueryComponent = () => {
    const [queryData, SetQueryData] = useState([])

    const [originalQueryQueryData, SetOriginalQueryData] = useState([])

    const [
        isShowTableOnceQueryDataLoaded, SetShowTableOnceQueryDataLoaded] = useState(false)

    const [editData, SetEditData] = useState({})

    // useEffect(() => {
    //     GetItems();
    //     //  SetShowTableOnceQueryDataLoaded(true)
    // }, [])

    // const GetItems = () => {
    //     console.log("GetItems");
    //     let items = QueryService('Get');
    //     console.log(items);
    //     SetShowTableOnceQueryDataLoaded(true)
    //     // console.log("items", items);
    //     //  OnDataLoadHandler(items);
    // }

    let columnNames = [];

    const OnDataLoadHandler = (e) => {

        console.log("QueryComponent: OnDataLoadHandler", e);

        if (e != null && e.length > 0) {
            SetShowTableOnceQueryDataLoaded(true)
            SetOriginalQueryData(e);
            SetQueryData(e);
        }
    }

    if (QueryData.length > 0) {
        if (columnNames.length == 0) {
            columnNames = Object.keys(QueryData[0]);
        }
    }

    const OnSearchedHandler = (e) => {
        console.log("isArray", Array.isArray(e));
        if (e != null && Array.isArray(e)) {
            SetQueryData(e);
        }
        else if (e != null) {
            SetQueryData([e]);
        }
    }

    const OnFormSubmissionHandler = (e) => {
        if (e === true) {
            // QueryApiList(OnLoadDataCalllback, null, 'Get', '');
        }
    }

    const OnEditHandler = (e) => {
        SetEditData(e);
    }

    return (
        <div>
            <FormComponentOnSubmit editData={editData} OnDataLoadHandler={OnDataLoadHandler}  ></FormComponentOnSubmit>
            {isShowTableOnceQueryDataLoaded && <SearchComponent queryData={queryData} orinalQueryData={originalQueryQueryData} OnSearchedHandler={OnSearchedHandler} ></SearchComponent>}
            {isShowTableOnceQueryDataLoaded && <TableComponent OnEditHandler={OnEditHandler} queryData={queryData}  ></TableComponent>}
        </div>
    )
}

export default QueryComponent;

