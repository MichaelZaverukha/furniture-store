import React from 'react'
import Item from './Item'
export default function Items(props) {
   const items = props.items
  return (
    <main>
      {items.map(el => (
         <Item key={el.id} items={el} onAdd={props.onAdd} onShowItem={props.onShowItem}/>
      ))}
    </main>
  )
}
