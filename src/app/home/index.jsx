import React, { useState } from 'react';
import './home.scss';
import DataTable from 'react-data-table-component';
import toast from 'react-hot-toast';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

export default function Home() {
    let initialValue = {
        fname: "",
        lname: "",
        email: "",
        password: "",
        post: "",
    };
    const [userObj, setUserObj] = useState(initialValue);
    const [userList, setUserList] = useState([
        {
            fname: "Umang",
            lname: "Patel",
            email: "umang@gmail.com",
            password: 123,
            post: "MSC",
        },
    ]);
    const columns = [
        {
            name: "First Name",
            selector: (row) => row.fname,
        },
        {
            name: "Last Name",
            selector: (row) => row.lname,
        },
        {
            name: "Email",
            selector: (row) => row.email,
        },
        {
            name: "Password",
            selector: (row) => row.password,
        },
        {
            name: "Post",
            selector: (row) => row.post,
        },
        {
            name: "edit",
            cell: (row, index) => {
                return (
                    <div>
                        <CiEdit
                            style={{ cursor: "pointer" }}
                            size={18}
                            onClick={() => handleEdit(index, row)}
                        />
                    </div>
                );
            },
        },
        {
            name: "delete",
            cell: (row, index) => {
                return (
                    <div>
                        <MdDelete
                            style={{ cursor: "pointer" }}
                            onClick={() => handleDelete(index)}
                        />
                    </div>
                );
            },
        },
    ]
    const handleEdit = (index, row) => {
        setUserObj({ ...row, idx: index });
    };
    const handleDelete = (index) => {
        const updatedList = [...userList];
        updatedList.splice(index, 1);
        setUserList(updatedList);
    };
    const functionOnChange = (e) => {
        setUserObj({ ...userObj, [e.target.name]: e.target.value });
    };
    const validate = () => {
        if (!userObj?.fname) {
            toast.error("Please Enter your first name");
            return false;
        } else if (!userObj.lname) {
            toast.error("Please Enter your last name");
            return false;
        } else if (!userObj.email) {
            toast.error("Please Enter your Email");
            return false;
        } else if (!userObj.email.includes("@")) {
            toast.error("Please Enter valid Email");
            return false;
        } else if (!userObj.password) {
            toast.error("Please Enter your Password");
            return false;
        } else if (userObj.password.length < 8) {
            toast.error("Please Enter minimum 8 letters");
            return false;
        } else if (!userObj.post) {
            toast.error("Please Enter your post");
            return false;
        }
        return true;
    }
    return (
        <div className='user-main'>
            <div className="heading">
                <h1>User Management</h1>
            </div>
            <div className="container">
                <div className="table">
                    <DataTable pagination columns={columns} data={userList} />
                </div>
            </div>
            <div className="container">
                <div className="form">
                    <div className="form-user">
                        <div className="form-item">
                            <label>Fristname</label>
                            <input onChange={(e) => { functionOnChange(e); }} value={userObj?.fname} type="text" name='fname' placeholder='Enter your frist name' />
                        </div>
                        <div className="form-item">
                            <label>Lastname</label>
                            <input onChange={(e) => { functionOnChange(e); }} value={userObj?.lname} type="text" name='lname' placeholder='Enter your last name' />
                        </div>
                        <div className="form-item">
                            <label>Email</label>
                            <input onChange={(e) => { functionOnChange(e); }} value={userObj?.email} type="email" name='email' placeholder='Enter your email' />
                        </div>
                        <div className="form-item">
                            <label>Password</label>
                            <input onChange={(e) => { functionOnChange(e); }} value={userObj?.password} type="password" name='password' placeholder='Enter your password' />
                        </div>
                        <div className="form-item">
                            <label>Post</label>
                            <input onChange={(e) => { functionOnChange(e); }} value={userObj?.post} type="text" name='post' placeholder='Enter your post name' />
                        </div>
                        <div className="form-button">
                            <button
                                onClick={() => {
                                    if (validate()) {
                                        if (userObj.idx !== undefined) {
                                            const updatedList = [...userList];
                                            updatedList[userObj.idx] = userObj;
                                            setUserList(updatedList);
                                        } else {
                                            setUserList([...userList, userObj]);
                                        }
                                        // localStorage.setItem("userdata", JSON.stringify(userList))
                                        setUserObj(initialValue);
                                    }
                                }}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
