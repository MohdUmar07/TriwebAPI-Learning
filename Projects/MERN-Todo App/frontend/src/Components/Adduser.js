import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Adduser = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [mobile, setMobile] = useState("");
    console.log("username and mobile", userName, mobile);

    const addUserHandler = () => {
        let payload = {
            userName,
            mobile,
        }
        axios.post("http://localhost:3002/", payload)
            .then((res) => {
                console.log(res);
                setUserName("")
                setMobile("");
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className="container">
            <header className="header">
                <div className="header-title">Add User</div>
            </header>
            <div className="form-container">
                <div className="form-group">
                    <label className="form-label">User Name</label>
                    <input type="text" className="form-input" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label">Mobile</label>
                    <input type="text" className="form-input" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>
                <button className="button" onClick={addUserHandler}>Add User</button>
            </div>
            <div className="button-group">
                    <button className="button" onClick={() => navigate("/")}>Homepage</button>
                    <button className="button" onClick={() => navigate("/edit-user")}>Edit User</button>
            </div>
        </div>

    );
}

export default Adduser
