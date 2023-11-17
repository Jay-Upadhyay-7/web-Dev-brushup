import React from 'react'

const Header = (props) => {
  return (
    <div className='h-8 bg-green-500 flex items-center justify-between'>
      <h2>{props.user} hihi</h2>
      <div className='flex gap-8'>
        <h4>hello</h4>
        <h4>hi</h4>

      </div>
    </div>
  )
}

export default Header
