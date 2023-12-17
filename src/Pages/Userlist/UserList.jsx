import React, { useState } from 'react'
import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import { Delete, Edit } from '@mui/icons-material';


import { userRows as rows} from '../../DummyData';
import { useNavigate } from 'react-router-dom';

const UserList = () => {

    const[data, setData]=useState(rows)
    const navigate = useNavigate();
    const handleEdit = (id)=>{
        navigate('/user/' + id)
    }

    const handleDelete= (id)=>{
        setData(data.filter(item=> item.id !=id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { width: 90 , renderCell:(params)=>{
          return(
              <div>
                  <img src={params.row.avatar} alt="" style={{width:"32px", height:"32px", borderRadius:"50%", objectFit:"cover"}}/>
              </div>
          )
        }},
         { field: 'userName', headerName: 'Username', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'transaction', headerName: 'Transaction', width: 160 },
        {field:'action', headerName:'Actions', width: 150, renderCell:(params)=>{
          return(
              <div style={{display:'flex', alignItems:'center'}}>
                 <button style={{border:'none', borderRadius:'10px', padding:'5px 10px', backgroundColor:'#3bb077', color:'white', marginRight:'20px', cursor:'pointer'}}
                 onClick={()=>{
                    console.log("hell"+params.row.id);
                    handleEdit(params.row.id);
                 }}>Edit</button>
                 <Delete style={{color:'red', cursor:'pointer'}} onClick={()=>{
                    handleDelete(params.row.id);
                 }}/>
              </div>
          )
        }}
      ];


  return (
    <div className='userList'>
        <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList