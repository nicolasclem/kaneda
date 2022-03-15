import React from 'react'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = ({detail}) => {
  return (
    <div>
        
        {(detail.length!==0)?<ItemDetail detail={detail}  />: ''}
    </div>
  )
}

export default ItemDetailContainer