import react, { useEffect, useState, useCallback } from 'react';
import './search.css';
import _ from "lodash";
import SpinnerComponent from '../SpinnerComponent/SpinnerComponent'
//import { QueryApiList } from '../QueryServiceComponent/QueryApiComponent'
import QueryService from '../QueryServiceComponent/QueryServiceComponent';
const SearchComponent = (props) => {
    const [eventType, setEventType] = useState('')
    const { queryData, orinalQueryData } = props
    const [isLoadingSpinner, SetLoadingSpinner] = useState(false);
    const [searchedQueryText, SetSearchedQueryText] = useState('');

    const delayedQuery = useCallback(
        _.debounce((q) => SearchQuery(q), 500),
        []
    );

    const OnChangeSearch = (e) => {
        SetLoadingSpinner(true)
        SetSearchedQueryText(e.target.value);
        // SearchQuery(e.target.value);
        // delayedQuery(e.target.value);
    }

    const OnClickSearch = () => {
        SetLoadingSpinner(true)
        SearchQuery(searchedQueryText);
        // delayedQuery(searchedQueryText);
    }

    const SearchQuery = (e) => {
        setEventType('SearchByParam');
        SetLoadingSpinner(false)
    }
    const OnSearchHandler = (e) => {
        setEventType('');
        if (e != null) {
            props.OnSearchedHandler(e);
        }
    }
    return (
        < section >
            {<QueryService searchParam={searchedQueryText} eventType={eventType} OnSearchHandler={OnSearchHandler} ></QueryService>}
            < div className='divSearch' >
                <input value={searchedQueryText} type="text" name="text" placeholder="Search..." onChange={OnChangeSearch}></input>
                <button className="Searchbutton" type="submit"><i class="fa fa-search" onClick={() => OnClickSearch()} ></i></button>
            </div >
            <div>
                {isLoadingSpinner && <SpinnerComponent></SpinnerComponent>}
            </div>
        </section >
    )
}
export default SearchComponent;
