import React from 'react'
import { FaTrash } from "react-icons/fa";

export default function Orders(props) {
  const items = props.item
  const onDelete  = props.onDelete
  return (
    <div className='item'>
      <img src={"./img/" + items.img}></img>
      <h2>{items.title}</h2>
      <b>{items.price}$</b>
      <FaTrash className='delete-icon' onClick={() => onDelete (items.id)}/>
    </div>
  )
}
