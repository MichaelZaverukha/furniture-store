import React from 'react'

export default function ShowFullItem(props) {
  const items = props.item
  return (
    <div className='fullItem'>
      <div>
         <img src={"./img/" + items.img} onClick={() => props.onShowItem(items)}></img>
         <h2>{items.title}</h2>
         <p>{items.desc}</p>
         <b>{items.price}$</b>
         <div className='add-to-card' onClick={() => props.onAdd(items)}>+</div>
      </div>
    </div>
  )
}
