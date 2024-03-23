import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-2 px-4 bg-gray-100'>
      <a href='/'>
      <img src='./jetsetgo.webp' alt='logo' width={220} height={80} />
      </a>
      <nav className='m-4'>
        <ul className='flex justify-between gap-16'>
          <li className='cursor-pointer hover:underline active:decoration-2 min-w-fit'>
            <a href='#'>Contact</a>
          </li>
          <li className='cursor-pointer hover:underline active:decoration-2 min-w-fit'>
            <a href='#'>Check-in</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
