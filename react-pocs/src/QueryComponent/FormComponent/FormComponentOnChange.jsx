import react, { useState } from 'react'
import '../FormComponent/form.css'
import { useForm } from 'react-hook-form'
const FormComponentOnChange = () => {
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
    //const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm();
    const [refRecord, setRefRecord] = useState({ refId: '', country: '', amount: '' })
    const [refRecords, setRefRecords] = useState([])
    const [classname, setclassname] = useState()

    const OnChangeAddRefRecord = (e) => {
        console.log('OnChangeAddRefRecord');
        setRefRecord((prevstate) => ({
            ...prevstate, [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (event) => {
        // event.preventDefault();
        console.log('onSubmit');
        // setRefRecords((prevstate) => (
        //     [...prevstate, refRecord]
        // ));
    }

    return (

        < form onSubmit={handleSubmit(onSubmit)} >
            <div>Form On Submit</div>
            {/* <p >
                <label htmlFor="refId" >Ref Id :
                    <input  {...register("refId", { required: true })} type="text" name="refId"
                        value={refRecord.refId} onChange={OnChangeAddRefRecord}   ></input>
                    <br></br></label>
           </p>*/}
            <p>
                <label htmlFor="queryRef" >Query Ref :
                    <input  {...register("queryRef", { required: true })} type="text" name="queryRef"
                    ></input>
                    <br></br></label>
            </p>

            <p>
                <label>Query Type:  <input {...register("queryType", { required: true })} type="text" name="queryType"

                ></input></label>
            </p>
            <p>
                <label>Raised By:  <input {...register("raisedBy", { required: true })} type="text" name="raisedBy"

                ></input></label>
            </p>
            <p>
                <label>Raised On:  <input {...register("status", { required: true })} type="text" name="Status"

                ></input></label>
            </p>


            {/*<p>
                <label>Country:  <input {...register("country", { required: true })} type="text" name="country"

                ></input></label>
            </p>*/}

            {/*<p>
                <label>Country:  <input {...register("country", { required: true })} type="text" name="country"

                ></input></label>
            </p>*/}

            {/* <p>
                <label>Amount : <input {...register("amount", { required: true })} type="text" name="amount"
                ></input></label>
           </p>*/}

            {errors.queryRef && <span style={{ color: "red" }}>Query Ref is required</span>}
            {errors.queryType && <span style={{ color: "red" }}>Query Type is required</span>}
            {errors.raisedBy && <span style={{ color: "red" }}>Raised By is required</span>}
            {errors.raisedOn && <span style={{ color: "red" }}>Raised On is required</span>}
            {errors.status && <span style={{ color: "red" }}>Status is required</span>}


            <input disabled={!isValid} value="Add" type='submit'></input>

        </form >
    )
}

export default FormComponentOnChange;