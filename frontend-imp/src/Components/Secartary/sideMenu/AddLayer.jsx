import React, { useState } from 'react'
import style from "./AddLayer.module.css";
import { Button } from 'react-bootstrap';

import logo from "../../../imges/logo.jpg"
import axios from 'axios';
import { addUserApi } from '../../../Services';
function AddLayer({ setLayerState ,allUsers }) {
    const [user, setUser] = useState({ name: "", rank: "", militaryNumber: 0, img: "" })
    function handleInput(e) {
        let newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }

    const addUser = async () => {
        try {
            if (user.img == "")
                user.img = "../../../imges/logo.jpg";
            else
                user.img = "../../../imges/" + user.img;
            console.log(user.img);
           await addUserApi(user, allUsers);
            // allUsers.push(user);
            setLayerState(false);
            
        } catch (error) {
            console.log("error in adding user FE "+ error);
        }
    }
    return (
        <div className={`${style.layer}`}>
            <div className='w-50 h-50 bg-white '>
                <form action="" className='  h-100 gap-2 p-2 d-flex  align-items-around justify-content-around'>
                    <div style={{ flexBasis: "50%" }} className='w-100  '>
                        <img className='w-100 h-100' src={logo} alt="" />
                    </div>
                    <div style={{ flexBasis: "50%" }} className='bg-warning d-flex flex-column  justify-content-around'>
                        <div style={{ direction: "rtl" }} className='p-3 '>
                            <input name='rank' onChange={handleInput} className='form-control my-2 w-100 ' type="text" placeholder='الرتبة' />
                            <input onChange={handleInput} name='name' className='form-control my-2' type="text" placeholder='الأسم' />
                            <input onChange={handleInput} name='militaryNumber' className='form-control my-2' type="text" placeholder='الرقم العسكرى' />
                            <input onChange={handleInput} name='img' className='form-control my-2' type="text" placeholder='اسم الصورة' />
                        </div>
                        <div className='text-center '>

                            <Button className='btn-success  mx-2 px-5 py-2 my-3' onClick={addUser} > أضافة</Button>
                            <Button className='btn-danger mx-2 px-5 py-2' onClick={() => setLayerState(false)}> ألغاء </Button>
                        </div>
                    </div>
                    {/* <input type="text" placeholder='الرقم العسكرى' className='form-control'/> */}
                </form>
            </div>
        </div>
    )
}

export default AddLayer