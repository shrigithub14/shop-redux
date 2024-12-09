import React from 'react'
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {remove} from "../redux/slices/CasrtSlice"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cartitem = ({item,itemIndex}) => {
    const dispatch = useDispatch();

    const removeFromCart= ()=>{
        dispatch(remove(item.id));
        toast.success("item remove")
    }
  return (
    <div>
      <div> 

        <div>
          <img src={item.image}/>
        </div>
        <div>
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
            <div>
                <p>{item.price}</p>
                <div onClick={removeFromCart}>
                <MdDeleteSweep  />
                </div> 
            </div>
        </div>

      </div> 
    </div>
  )
}

export default Cartitem
