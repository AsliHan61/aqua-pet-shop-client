import { Link } from "react-router-dom"
import { useState, useContext } from "react";
import axios from "axios";
// import { AuthContext } from "../context/auth.context";
// import avatarImage from '../assets/default-avatar.png';

const AdminPage = (props) => {
    // const [showUpload, setShowUpload] = useState(false);
    // const [image, setImage] = useState("");
    // const { user, setUser, isLoggedIn, logOutUser } = useContext(AuthContext);
    

    // const handleFileUpload = (e) => {
     
    //     const uploadData = new FormData();
    //     uploadData.append("image", e.target.files[0]);
     
    //     axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData)
    //       .then(response => {
            
    //         setImage(response.data.image);
    //       })
    //       .catch(err => console.log("Error while uploading the file: ", err));
    //   };

    //   const handleSubmit = (e) => {
    //     e.preventDefault();

    //     axios.put(`${process.env.REACT_APP_API_URL}/api/users`, {...user, image})
    //         .then((response)=> {
    //             setUser(response.data.updatedUser);
    //             setImage("")
    //         })
    //         .catch(err => console.error(err))
    //   }
  return (
<div className="homePageContainer">
<form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"> </input>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"> </input>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"> </input>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"> </input>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"> </input>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"> </input>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"> </input>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
        
</div>
);
};

export default AdminPage;
