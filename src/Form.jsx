import { useState } from "react";

export default function Form(){
     let [formData ,setFormData ] = useState({
        fullName :"",
        username: "",
           password:"",
     });
   

   
     //  let handleNameChange = (event) =>{
     //   setFullName(event.target.value);
     //};

      //let handleUserame = (event) =>{
        //setUsername(event.target.value);
     //};

let handleInputChange = (event) => {
    setFormData( (currData) => {
        return{ ...currData,
            [event.target.name] : event.target.value };
    });
};  

let handleSubmit = (event) => {
    event.preventDefault();
   // console.log(formData);
    setFormData({
         fullName :"",
        username: "",
        password:"",
    })
};
    return(
       
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
  <input
   type="text" 
  placeholder="Enter Your Name " 
  value={formData.fullName} 
  onChange={handleInputChange} 
  id="fullName"
  name="fullName"
   />
  <br />
  <br />

  <label htmlFor="username">User Name</label>
  <input
   type="text" 
  placeholder="Enter User Name " 
  value = {formData.username}
  onChange={handleInputChange} 
  id="username" 
  name="username"
  />

  
  <label htmlFor="password">Password</label>
  <input
   type="text" 
  placeholder="Enter Password " 
  value={formData.password}
  onChange={handleInputChange} 
  id="password"
  name="password"
   />
         <button>Submit</button>
        </form>
    )  
}