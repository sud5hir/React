import react, { useState, useEffect } from 'react';
import axios from 'axios';
import QueryData from '../QueryComponent/QueryData';
export default function QueryService(props) {

    const { eventType, data, searchParam } = props;

    useEffect(() => {
        getItems();
    }, [])

    useEffect(() => {
        if (eventType === 'Get') {
            getItems();
        }
        if (eventType === 'SearchByParam') {

            getItemsBySearchParams(searchParam)
        }
        if (eventType === 'Post') {
            postItem();
        }
        if (eventType === 'Edit') {

            editItem();
        }
        if (eventType === 'Delete') {
            deleteItem();
        }
    }, [eventType])


    const getItems = () => {
       // props.OnDataLoadHandler(QueryData)
        axios.get(`https://localhost:44365/Query`)
            .then(res => {
                console.log("props.OnDeleteDataHandler", res.data)
                if (props.OnDataLoadHandler != null) {
                    props.OnDataLoadHandler(res.data)
                }
                if (props.OnSearchHandler != null) {
                    props.OnSearchHandler(res.data)
                }
                if (props.OnDeleteDataHandler != null) {
                    props.OnDeleteDataHandler(res.data)
                }

            })
            .catch(err => {

            });
    }

    const getItemsBySearchParams = (searchParam) => {
       // props.OnSearchHandler(QueryData)
        if (searchParam === '') {
            axios.get(`https://localhost:44365/Query`)
                .then(res => {
                    props.OnSearchHandler(res.data)
                })
                .catch(err => {

                });
        }

        else {
            axios.get(`https://localhost:44365/Query` + searchParam)
                .then(res => {
                    props.OnSearchHandler(res.data)
                })
                .catch(err => {

                });
        }
    }

    const postItem = () => {
        let queryPostData = {
            Id: data.id,
            QueryRef: data.queryRef,
            QueryType: data.queryType,
            RaisedBy: data.raisedBy,
            RaisedOn: data.raisedOn,
            Status: data.status
        };
        console.log("postItemData:", data);
        console.log("postItemData - > queryPostData:", queryPostData);
        axios('https://localhost:44365/Query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: queryPostData,
        }).then((data) => {
            console.log('Success:', data);
            props.OnSubmitHandler("Success")
            getItems();

        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    const editItem = () => {
        let queryPostData = {
            QueryRef: data.queryRef,
            QueryType: data.queryType,
            RaisedBy: data.raisedBy,
            RaisedOn: data.raisedOn,
            Status: data.status
        };
        console.log("Edit:", data);
        axios('https://localhost:44365/Query' + data.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            data: queryPostData,
        }).then((data) => {
            console.log('Success:', data);
            props.OnSubmitHandler("Success")
            getItems();
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    const deleteItem = () => {
        console.log(" deleteItem:", data);
        axios('https://localhost:44365/Query' + data.id, {
            method: 'DELETE',
        }).then((data) => {
            console.log('Success:', data);
            getItems();
        }).catch((error) => {
            console.error('Error:', error);
        });
    }
    return null;
}



// else {
//     axios.get(`https://localhost:5001/api/Query/` + searchParam)
//         .then(res => {
//             if (callback != null) {

//                 callback(res.data);
//             }
//         })
//         .catch(err => {
//             if (errorCallback != null) {
//                 errorCallback(err);
//             }
//         });
// }
// break;
// case 'Post':
//     let queryPostData = {
//         QueryRef: data.queryRef,
//         QueryType: data.queryType,
//         RaisedBy: data.raisedBy,
//         RaisedOn: data.raisedOn,
//         Status: data.status
//     };
//     axios('https://localhost:5001/api/Query', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         data: JSON.stringify(queryPostData),
//     }).then((data) => {
//         console.log('Success:', data);
//         if (callback != null) {
//             callback(true);
//         }
//     }).catch((error) => {
//         console.error('Error:', error);
//     });
// fetch('https://localhost:5001/api/Query', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(queryPostData),
// }).then((data) => {
//     console.log('Success:', data);
//     if (callback != null) {
//         callback(true);
//     }
// }).catch((error) => {
//     console.error('Error:', error);
// });

