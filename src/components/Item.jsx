import React from 'react'

const Item = (props) => {
    //console.log(props);
    let {greeting}=props

  return (
    <div>
        <h2 class="display-2 text-center mt-5">{greeting}</h2>
    </div>
  )
}

export default Item