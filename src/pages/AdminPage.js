// import { Link } from "react-router-dom"
// import { useState, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../context/auth.context";
// import avatarImage from '../assets/default-avatar.png';

const AdminPage = props => {
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
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"> </input>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"> </input>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"> </input>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"> </input>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"> </input>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"> </input>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"> </input>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
        
</div>
);
};

export default AdminPage;
