import React from 'react'

export default function Item(props) {
   const items = props.items
  return (
    <div className='item'>
      <img src={"./img/" + items.img} onClick={() => props.onShowItem(items)}></img>
      <h2>{items.title}</h2>
      <p>{items.desc}</p>
      <b>{items.price}$</b>
      <div className='add-to-card' onClick={() => props.onAdd(items)}>+</div>
    </div>
  )
}
