import React, { useState } from 'react'

export default function Categories(props) {
   let [categories, setCategories] = useState([
      {
         id: 'all',
         name: 'All Categories'
      },
      {
         id: 'chairs',
         name: 'Chairs'
      },
      {
         id: 'tables',
         name: 'Tables'
      },
      {
         id: 'sofas',
         name: 'Sofas'
      },
      {
         id: 'lights',
         name: 'Lights'
      }
   ])
   return (
      <div className='categories'>
         {categories.map(el => (
            <div key={el.id} onClick={() => props.chooseCategory(el.id)}>{el.name}</div>
         ))}
      </div>
  )
}
