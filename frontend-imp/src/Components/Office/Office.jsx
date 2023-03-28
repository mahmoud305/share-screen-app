import React from 'react'
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "../../imges/logo.jpg";
import VisitorsMenu from '../Secartary/visitorsMenu/VisitorsMenu';
function Office() {
  const visitors = useSelector((state) => state.visitors);
  return (
    <div style={{direction:"rtl"}} className={"px-5"}>
    <VisitorsMenu/>
    </div>

  )
}

export default Office