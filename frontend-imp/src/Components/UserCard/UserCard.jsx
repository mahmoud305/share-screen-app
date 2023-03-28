import React from 'react'
import logo from "../../imges/logo.jpg";
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addVisitor } from '../../RTK/userSlice/UserSlice';
import { AddColorObjectAction, addObject } from '../../RTK/colorSlice/ColorSlice';
import { addVisitorApi } from "../../Services";
function UserCard({ visitor }) {// recive the user then distruct it 
const dispatch = useDispatch();

  const handleclick = () => {
    addVisitorApi(visitor);
    dispatch(addVisitor(visitor));
    dispatch(AddColorObjectAction())
  }
  return (
    <div className=' border border-2' style={{ width: "20rem", direction: "ltr" }}>
      <div className="row p-2">
        <div className="col-5 ">
          <img  className='w-100 h-100' src={visitor.img} alt="aaaaaaa" />
        </div>
        <div className="col-7 my-auto text-center">
          <h6 >{visitor.rank}/ {visitor.name}</h6>
          <p>{visitor.militaryNumber}</p>
          <div className='d-flex flex-col'>
            <Button className='btn-danger m-2'> مسح  </Button>
            <Button onClick={handleclick} className='btn-primary m-2'> اضافة   </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard