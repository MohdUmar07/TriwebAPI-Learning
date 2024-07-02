import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Homepage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:3002/")
            .then((res) => {
                console.log(res);
                setUser(res.data.data);
            })
            .catch((err) => console.log(err))
    }, [flag]);
    const deleteHandler = (_id) => {
        console.log("Id", _id);
        let payload = {
            _id,
        };
        axios.delete("http://localhost:3002/", { data: payload })
            .then((res) => setFlag(!flag))
            .catch((err) => console.log(err))
    };

    console.log("User", user);
    return (
        <div className="container">
            <header className="header">
                <div className="header-title">Homepage</div>
            </header>

            <div className="table-container">
                <table className="module-section">
                    <thead>
                        <tr>
                            <th className="table-header">Id</th>
                            <th className="table-header">UserName</th>
                            <th className="table-header">Mobile</th>
                            <th className="table-header">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user && user.map((post) => (
                            <tr key={post._id}>
                                <td className="table-data">{post._id}</td>
                                <td className="table-data">{post.userName}</td>
                                <td className="table-data">{post.mobile}</td>
                                <td className="table-data delete-cell" onClick={() => deleteHandler(post._id)}>Delete</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="button-group">
                <button className="button" onClick={() => navigate("/add-user")}>Add User</button>
                <button className="button" onClick={() => navigate("/edit-user")}>Edit User</button>
            </div>
        </div>

    );
}

export default Homepage
