import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "../../../imges/logo.jpg";
import { deleteVisitorAction, getUsersAction, reinitializeVisitorsList, removeVisitor } from '../../../RTK/userSlice/UserSlice';
import { changeColorAction, changeEnter, changeWaiting, deleteColorObjectAction, deleteObject, enterAll, getColorsAction, waitAll } from '../../../RTK/colorSlice/ColorSlice';
import axios from 'axios';
import { getVisitors } from '../../../Services';


function VisitorsMenu() {
  const [visitors, setVisitors] = useState([]);
  const VisitorsList = useSelector((state) => state.visitors);
  const colors = useSelector((state) => state.colors);
  // const [color, setColor] = useState("");
  const dispatch = useDispatch();
  
  
  const handleRemove = (index, id) => {
    dispatch(deleteVisitorAction(id));
    dispatch(deleteColorObjectAction(index));
    
  }
  const handleChange=(index,type)=>{
    type=="enter" ? dispatch(changeEnter(index)) :dispatch(changeWaiting(index)) ;
     
    dispatch(changeColorAction({colors,index,type:"enter"}));
  }

  const updateComponent =()=>{
    dispatch(getUsersAction());
    dispatch(getColorsAction());
  }



useEffect( ()=>{
  const refresh= setInterval(updateComponent,5000000);
  return ()=> clearInterval(refresh);
  
  },[] )


  return (
    <div className="col-9" style={{ direction: "rtl" }}>
      <h3 className='' > قائمة الأنتظار :</h3>
      <Button className='btn-primary m-2' onClick={() => dispatch(enterAll())}> دخول الجميع </Button>
      <Button className='btn-warning m-2' onClick={() => dispatch(waitAll())}> إنتظار الجميع </Button>
      <div className="d-flex flex-wrap justify-content-around  border border-2 overflow-auto">
        {
          VisitorsList.map((visitor, i) => {
            return <Card key={visitor.militaryNumber} className={'my-2'} style={{ minWidth: "13rem", textAlign: "center", width: '15rem' }}>
              <Card.Img style={{ height: "250px" }} variant="top" src={visitor.img} />
              <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title>{visitor.rank}/ {visitor.name}</Card.Title>
                <div className='border border-4 my-2 '>
                  <Button className='my-2 px-5' style={{ background: `${(colors[i])?.enter}` }}  onClick={() => handleChange(i,"enter") } >دخول</Button>
                  <Button className='my-2 px-5' style={{ background: `${(colors[i])?.wait}` }} onClick={() => handleChange(i,"wait") }>انتظار</Button>
                  <Button className='my-2 px-5' onClick={() => handleRemove(i, visitor.militaryNumber)} variant="danger">مغادرة</Button>
                </div>
              </Card.Body>
            </Card>
          })
        }

        {/* style={{ background: `${(colors[i]).enter}` }} */}
        {/* style={{ background: `${(colors[i]).wait}` }} */}
      </div>
    </div>
  )
}

export default VisitorsMenu