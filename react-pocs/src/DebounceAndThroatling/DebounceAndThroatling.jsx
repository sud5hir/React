import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

const sendQuery = (query) => console.log(`Querying for ${query}`);
const DebounaceAndThrotaling = () => {
    const [userQuery, setUserQuery] = useState("");
    const delayedQuery = useCallback(
        _.debounce((q) => sendQuery(q), 1000),
        []
    );
    const onChange = (e) => {
        setUserQuery(e.target.value);
        delayedQuery(e.target.value);
    };

    return (
        <div>
            <label>Search Fixed:</label>
            <input onChange={onChange} value={userQuery} />
        </div>
    );
};

export default DebounaceAndThrotaling;