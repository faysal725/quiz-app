import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gray-300 p-4 flex flex-col items-center justify-center text-xs'>
        <ul className='flex justify-center gap-3'>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>About</li>
        </ul>
        <div>
            <p className='text-xl'>Copyright © All rights reserved.</p>
        </div>
    </footer>
  )
}
