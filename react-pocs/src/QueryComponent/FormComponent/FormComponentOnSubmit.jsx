import react, { useState, useEffect } from 'react'
import '../FormComponent/form.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import QueryService from '../QueryServiceComponent/QueryServiceComponent';
import SpinnerComponent from '../SpinnerComponent/SpinnerComponent';
const FormComponentOnSubmit = (props) => {
    const { editData } = props;
    //const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm();
    const [refRecord, setRefRecord] = useState(editData)
    const [eventType, setEventType] = useState('Get')
    const [isLoadingSpinner, SetLoadingSpinner] = useState(false);
    useEffect(() => {
        setRefRecord(editData)
    }, [editData])
    
    const OnChangeAddRefRecord = (e) => {
        console.log('OnChangeAddRefRecord');
        setRefRecord((prevstate) => ({
            ...prevstate, [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (data, e) => {
        console.log("onSubmit");
        console.log(e);
        console.log(props.editData.id);
        SetLoadingSpinner(true)
        e.target.reset();
        if (props.editData.id != null) {
            console.log(props.editData.id);
            setEventType('Edit');
        }
        else {
            setEventType('Post');
        }
        //     setRefRecord(data);
        // postItem(data);
    }

    const OnDataLoadHandler = (e) => {
        console.log(e);
        props.OnDataLoadHandler(e);
        setEventType('');
    }

    const OnSubmitHandler = (e) => {
        SetLoadingSpinner(false)
        console.log("OnSubmitHandler");
        if (e === "Success") {
            setEventType('');
        }
        setRefRecord((prevstate) => (
            { queryRef: '', queryType: '', raisedBy: '', raisedOn: '', status: '' }
        ))
    }

    return (
        <div>
            {<QueryService data={refRecord} OnSubmitHandler={OnSubmitHandler} eventType={eventType} OnDataLoadHandler={OnDataLoadHandler} ></QueryService>}
            <div id="content">

                <div class="titlebox">Query Form:</div>

                <form onSubmit={handleSubmit(onSubmit)}  >
                    <p>
                        <label htmlFor="queryRef" >Query Ref :
                            <input  {...register("queryRef", { required: true })} type="text" name="queryRef" value={refRecord.queryRef} onChange={OnChangeAddRefRecord}
                            ></input>
                        </label>            </p>
                    <p>
                        <label>Query Type :
                            <select  {...register("queryType", { required: true })} name="queryType" value={refRecord.queryType} onChange={OnChangeAddRefRecord}  >
                                <option>General Query</option>
                                <option>Transactional Query</option>
                            </select>
                        </label>
                    </p>
                    <p>
                        <label>Raised By :  <input {...register("raisedBy", { required: true })} type="text" name="raisedBy" value={refRecord.raisedBy} onChange={OnChangeAddRefRecord}

                        ></input></label>
                    </p>
                    <p>
                        <label>Raised On :  <input {...register("raisedOn", { required: true })} type="text" name="raisedOn" value={refRecord.raisedOn} onChange={OnChangeAddRefRecord}

                        ></input></label>
                    </p>
                    <p>
                        <label> Status :  <input {...register("status", { required: true })} type="text" name="status" value={refRecord.status} onChange={OnChangeAddRefRecord}

                        ></input></label>
                    </p>

                    {/* <p>
                    <label>   Query Comment :
                        <textarea {...register("comment", { required: true })} name="comment"></textarea>
                    </label>
                </p> */}
                    <br></br>

                    <div >
                        {errors.queryRef && <span style={{ color: "red" }}>QueryRef is required</span>}

                        {errors.queryType && <span style={{ color: "red" }}>QueryType is required</span>}
                        {errors.raisedBy && <span style={{ color: "red" }}>Raised By is required</span>}
                        {errors.raisedOn && <span style={{ color: "red" }}>Raised On is required</span>}
                        {errors.status && <span style={{ color: "red" }}>Status is required</span>}
                    </div>
                    <div>
                        <input value={props.editData.id ? 'Update' : 'Create'} type='submit'></input>

                    </div>
                </form>
                <div>
                    {isLoadingSpinner && <SpinnerComponent></SpinnerComponent>}
                </div>
            </div>
        </div>
    )
}
// const postItem = (data) => {
//     let queryPostData = {
//         QueryRef: data.queryRef,
//         QueryType: data.queryType,
//         RaisedBy: data.raisedBy,
//         RaisedOn: data.raisedOn,
//         Status: data.status
//     };
//     console.log("postItemData:", data);
//     axios('https://localhost:5001/api/Query', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         data: queryPostData,
//     }).then((data) => {
//         console.log('Success:', data);
//         setEventType('Get');
//     }).catch((error) => {
//         console.error('Error:', error);
//     });
// }


export default FormComponentOnSubmit;





