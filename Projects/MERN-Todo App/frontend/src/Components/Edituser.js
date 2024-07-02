import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Edituser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [flag, setFlag] = useState(false);
    const editHandler = (e, _id, key) => {
        const editedData = user.find((item) => item._id === _id);
        let payload = { ...editedData, [key]: e.target.innerHTML }

        axios.put("http://localhost:3002/", payload)
            .then((res) => {
                setUser(editedData);
                setFlag(!flag)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        axios
            .get("http://localhost:3002/")
            .then((res) => {
                console.log(res);
                setUser(res.data.data);
            })
            .catch((err) => console.log(err))
    }, [flag]);


    return (
        <div className="container">
            <header className="header">
                <div className="header-title">Edit User</div>
            </header>

            <div className="table-container">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th className="table-header">Id</th>
                            <th className="table-header">UserName</th>
                            <th className="table-header">Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.length > 0 ? user.map((post) => (
                            <tr key={post._id}>
                                <td className="table-data">{post._id}</td>
                                <td className="editable-cell" contentEditable suppressContentEditableWarning onBlur={(e) => editHandler(e, post._id, "userName")}>
                                    {post.userName}
                                </td>
                                <td className="editable-cell" contentEditable suppressContentEditableWarning onBlur={(e) => editHandler(e, post._id, "mobile")}>
                                    {post.mobile}
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="3" className="table-data">Data not found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="button-group">
                <button className="button" onClick={() => navigate("/")}>Homepage</button>
                <button className="button" onClick={() => navigate("/add-user")}>Add User</button>
            </div>
        </div>


    );
}

export default Edituser
