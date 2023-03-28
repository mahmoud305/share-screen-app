import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { getUsersAction } from '../../RTK/userSlice/UserSlice';
import { getAllUsers } from '../../Services';
import UserCard from '../UserCard/UserCard';
import SideMenu from './sideMenu/SideMenu';
import VisitorsMenu from './visitorsMenu/VisitorsMenu';

function Secartary() {
  const BaseUrl = "http://localhost:5000";
  const [allUsers, setAllUsers] = useState([]);
  
 
 


  useEffect(() => {
    getAllUsers(setAllUsers);
  }, [])

  return (
    <div className="container-fluid mt-5">
      <div className="row mt-5">
      <SideMenu allUsers={allUsers}   ></SideMenu>
      <VisitorsMenu/>
      </div>
    </div>
  )
}

export default Secartary