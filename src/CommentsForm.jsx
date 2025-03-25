import { useFormik } from "formik";
import { useState } from "react";

const validate = values =>{
    const errors = {};
    if (!values.username) {
      errors.username = "Username cannot be empty";
    }
    return errors;
  };

export default function CommentsForm({ addNewComment }) {
    // let [formData, setformData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5
    // });
    const formik = useFormik({
        initialValues: {
            username:'',
            remarks:'',
            rating:5, 
            },
        validate,
        onSubmit: (values) => {
           alert(JSON.stringify(values,null,2));
        },
    });
    
    // let handleInputChange = (event) => {
    //     setformData((currdata) => {
    //         return{...currdata,
    //         [event.target.name]: event.target.value};
    //     });
    // };

    // let handleSubmit = (event) => {
        
    //     console.log(formData);
    //     addNewComment(formData);  // Passing the formData to the parent component
        
    //     setformData({
    //         username: "",
    //         remarks: "",
    //         rating: 5
    //     });
    // };
    

    return (
        <div>
            <h4>Give a Comment</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    placeholder="username"
                    type="text"
                    value={formik.values.username}
                    id="username"
                    name="username"
                    onChange={formik.handleChange}
                />
               {formik.errors.username ? <p style={{color:"red"}}>{formik.errors.username}</p>:null}
            
                <br />
                <br />

                <label htmlFor="remarks">Remarks</label>
                <textarea
                    id="remarks"
                    name="remarks"
                    value={formik.values.remarks}
                    placeholder="Add a few Remarks"
                    onChange={formik.handleChange}
                />
                <br />
                <br />

                <label htmlFor="rating">Rating</label>
                <input
                    placeholder="rating"
                    type="number"
                    min={1}
                    max={5}
                    id="rating"
                    name="rating"
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                />
                <br />
                <br />
                <button type="submit">Add a Comment</button>
            </form>
        </div>
    );
}
