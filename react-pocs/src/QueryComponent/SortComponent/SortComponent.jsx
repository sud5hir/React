import react, { useState, useEffect } from 'react'
import '../SortComponent/sort.css'

const SortComponent = (props) => {
    const { queryData } = props;
    const [sortConfig, setSortConfig] = useState("headerSortDown");

    const SortingQuery = (fieldName) => {
        switch (fieldName) {
            case 'Query Reference':
                if (sortConfig === "headerSortDown") {
                    setSortConfig(prevstate => (
                        "headerSortUp")
                    );
                    props.OnSotHanlder((queryData.sort((a, b) => { return b.queryRef - a.queryRef })));
                }
                else {
                    setSortConfig(prevstate => (
                        "headerSortDown")
                    );
                    props.OnSotHanlder((queryData.sort((a, b) => { return a.queryRef - b.queryRef })));
                }
                break;
            case 'Status': {
                if (sortConfig == "headerSortDown") {
                    setSortConfig(prevstate => (
                        "headerSortUp")
                    );
                    props.OnSotHanlder(queryData.sort((a, b) => GetSortOrder(a.status, b.status, "headerSortUp")));

                }
                else {
                    setSortConfig(prevstate => (
                        "headerSortDown")
                    );
                    props.OnSotHanlder(queryData.sort((a, b) => GetSortOrder(a.status, b.status, "headerSortDown")));
                }
            }

                break;
            case 'Raised By':

                if (sortConfig == "headerSortDown") {
                    setSortConfig(prevstate => (
                        "headerSortUp")
                    );
                    props.OnSotHanlder(queryData.sort((a, b) => GetSortOrder(a.raisedBy, b.raisedBy, "headerSortUp")));


                }
                else {
                    setSortConfig(prevstate => (
                        "headerSortDown")
                    );
                    props.OnSotHanlder(queryData.sort((a, b) => GetSortOrder(a.raisedBy, b.raisedBy, "headerSortDown")));
                }
                break;
            case 'Raised On':
                if (sortConfig == "headerSortDown") {
                    setSortConfig(prevstate => (
                        "headerSortUp")
                    );
                    props.OnSotHanlder(queryData.sort((a, b) => GetSortOrder(a.raisedOn, b.raisedOn, "headerSortUp")));

                }
                else {
                    setSortConfig(prevstate => (
                        "headerSortDown")
                    );
                    props.OnSotHanlder(queryData.sort((a, b) => GetSortOrder(a.raisedOn, b.raisedOn, "headerSortDown")));
                }
                break;
            case 'Query Type':
                if (sortConfig == "headerSortDown") {
                    setSortConfig(prevstate => (
                        "headerSortUp")
                    );
                    props.OnSotHanlder(queryData.sort((a, b) => GetSortOrder(a.queryType, b.queryType, "headerSortUp")));

                }
                else {
                    setSortConfig(prevstate => (
                        "headerSortDown")
                    );
                    props.OnSotHanlder(queryData.sort((a, b) => GetSortOrder(a.queryType, b.queryType, "headerSortDown")));
                }
                break;

        }
    }

    const GetSortOrder = (a, b, sortType) => {
        if (sortType === "headerSortDown") {
            var fieldA = a.toUpperCase();
            var fieldB = b.toUpperCase();
            if (fieldA > fieldB) {
                return -1;
            }
            if (fieldA < fieldB) {
                return 1;
            }
            return 0;
        }
        else {
            var fieldA = a.toUpperCase();
            var fieldB = b.toUpperCase();
            if (fieldA < fieldB) {
                return -1;
            }
            if (fieldA > fieldB) {
                return 1;
            }
            return 0;
        }
    }
    return (
        <button type="button" onClick={() => SortingQuery(props.sortingField)} className={sortConfig} >
        </button>
    )
}

export default SortComponent;
