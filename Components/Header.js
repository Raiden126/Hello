import React, { useContext } from 'react'
import Nav from './Nav'
import { MyContext } from '@/Helper/Context'

const Header = () => {
  const user = useContext(MyContext)
  return (
    <div className='bg-green-900'>
      {user}
    </div>
  )
}

export default Header
