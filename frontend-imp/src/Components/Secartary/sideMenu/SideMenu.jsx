import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import UserCard from '../../UserCard/UserCard'
import AddLayer from './AddLayer'

function SideMenu({allUsers}) {
    const [layerState, setLayerState] = useState(false);
  return (
    <>
    <div className="col-3 border border-2 " style={{      }}>
    <div className='text-end my-2'> 
    <Button className='btn-primary' onClick={ ()=> setLayerState(true)}> اضافة جديد</Button>
    {
    layerState && <div> <AddLayer allUsers={allUsers} setLayerState={setLayerState}/>  </div>
    }
    </div>
    <div style={{ direction: "rtl", maxHeight: "80vh",   overflowY: "scroll" }}>
        
    {allUsers.map((user) => {
        return <UserCard key={user.militaryNumber} visitor={user} />
    })}
    </div>
  </div>
    </>
  )
}

export default SideMenu