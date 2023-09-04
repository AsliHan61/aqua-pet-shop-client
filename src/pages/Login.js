import React from 'react';

function Login () {

    return (
        
        <form className="form" onSubmit={handleSubmit}>
            
            <div className="row">

            <div className="col">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange}/>
            </div>

            <div className="col">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" value={formData.password} onChange={handleChange}/>
            </div>

        <button type="submit">Login </button>
        <button type="submit">Register New User</button>
        
        </form>
        
        
);
};



export default Login;