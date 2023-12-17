import React from 'react'
import './user.css'
import { CalendarMonth, Call, Email, FileUpload, PermIdentity, Place } from '@mui/icons-material'
import { Navigate, useNavigate } from 'react-router-dom'
const User = () => {
    const navigate = useNavigate();
    const handleCreate = ()=>{
        navigate('/newUser')
    }

  return (
    <div className='user'>
        <div className="userTitleContainer">
            <span className="userTitle">Edit User</span>
            <button className="userAddButton" onClick={
                handleCreate
            }>Create</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" className="userShowImg" />
                    <div className="userShowUserTitle">
                    <span className="userShowUsername">Anna Callum</span> 
                    <span className="userShowJobTitle">Software Developer</span>
                    </div>
                         
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                <PermIdentity className='userShowIcon'/>
                <span className="userShowInfoTitle">
                    Anna99
                </span>
                </div>
                <div className="userShowInfo">
                <CalendarMonth className='userShowIcon'/>
                <span className="userShowInfoTitle">
                    12.10.99
                </span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                <Call className='userShowIcon'/>
                <span className="userShowInfoTitle">
                    +91 9090909090
                </span>
                </div>
                <div className="userShowInfo">
                <Email className='userShowIcon'/>
                <span className="userShowInfoTitle">
                    annacallum@gmail.com
                </span>
                </div>
                <div className="userShowInfo">
                <Place className='userShowIcon'/>
                <span className="userShowInfoTitle">
                    Gujarat, India
                </span>
                </div>

                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">
                    Edit
                </span>
                <form action="" className="userUpdateForm">
                    
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder='Anna99' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder='Anna Callum' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                            <label>Birth Date</label>
                            <input type="text" placeholder='12.10.99' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder='+91 9090909090' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="email" placeholder='annacallum@gmail.com' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder='Gujarat, India' className='userUpdateInput'/>
                            </div>
                        
                        </div>
                    <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" className='userUpdateImg'/>
                        <label htmlFor="fileupload">
                            <FileUpload className='userUpdateIcon'/>
                            </label>    
                        <input type="file" id="fileupload" style={{display:"none"}}/>
                    </div>
                    <button className="userUpdateButton">
                        Update
                    </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User