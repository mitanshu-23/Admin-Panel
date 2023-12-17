import'./newUser.css'

const NewUser = () => {
  return (
    <div className='newUser'>
        <span className="newUserTitle">New User</span>
        <form className="newUserForm">
          <div className="newUserItem">
            <label >Username</label>
            <input type="text" placeholder='Jon' className='newUserItemInput'/>
          </div>
          <div className="newUserItem">
            <label >Fullname</label>
            <input type="text" placeholder='Jon Snow' className='newUserItemInput'/>
          </div>
          <div className="newUserItem">
            <label >Email</label>
            <input type="email" placeholder='jon@gmail.com' className='newUserItemInput'/>
          </div>
          <div className="newUserItem">
            <label >Password</label>
            <input type="password" placeholder='password' className='newUserItemInput'/>
          </div>
          <div className="newUserItem">
            <label >Phone</label>
            <input type="text" placeholder='+91 9898989898' className='newUserItemInput'/>
          </div>
          <div className="newUserItem">
            <label >Address</label>
            <input type="text" placeholder='Gujarat, India' className='newUserItemInput'/>
          </div>

          <div className="newUserItem">
            <label >Gender</label>
            <div className="newUserGender">
            <input type="radio" name='gender' id='male' value='Male' className='newUserItemGenderInput'/>
            <label for="male">Male</label>
            <input type="radio" name='gender' id='female' value='Female' className='newUserItemGenderInput'/>
            <label for="female">Female</label>
            <input type="radio" name='gender' id='other' value='Other' className='newUserItemGenderInput'/>
            <label for="other">Other</label>
            </div>
          </div>

          <div className="newUserItem">
            <label>Active</label>
            <select name="active" id="active" className="newUserSelect">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <button className="newUserButton">Create</button>
        </form>
    </div>
  )
}

export default NewUser