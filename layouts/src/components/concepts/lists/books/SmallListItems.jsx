import React from 'react'

const SmallBoolListItem = ({book}) => {
  const {name, price} = book;
  return (
    <h2>{name} / {price}</h2>
  )
}

export default SmallBoolListItem
