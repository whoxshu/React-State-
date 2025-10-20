import { useState } from "react";
import { useFormik } from 'formik';

 const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Username cannot be empty ';
   } 
 
   return errors;
 };

export default function CommentsForm( addNewComment ) {
    // let [formData , setFormData] = useState({
    //     username : "",
    //     remarks : "" ,
    //     rating : 3
    // });

       const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       rating: 5,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    // let handleInputChange = (event) => {
    //  setFormData((currData) => {
    //     return {...currData , [event.target.name] : event.target.value };
    //  });
    // }

    // let handleSubmit = (event) => {
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //     username : "",
    //     remarks : "" ,
    //     rating : 3
    //     });

    // }

    return(
    <div>
        <h4>Give a comment !</h4>
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="username">Username</label>
            <input
             placeholder="Username"
              type="text"
               value={formik.values.username} 
              onChange={formik.handleChange}
               id="username" 
               name="username"/>

       {formik.errors.username? <div>{formik.errors.username}</div> : null}
            <br /><br />

        <label htmlFor="remarks">Remarks</label>
            <textarea
             value={formik.values.remarks} name="remarks" id="remarks"
             onChange={formik.handleChange}
              placeholder="Add Remarks" ></textarea>
            <br /><br />

        <label htmlFor="rating">Rating</label>
            <input
             placeholder="rating"
              type="number"
               min={1} 
               max={5}  
               value={formik.values.rating} 
             onChange={formik.handleChange}
               id="rating"
               name="rating"/>
            <br /><br />


            <button type="submit">Add Comment</button>
        </form>
    </div>)
}