import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className='header-main-div'>
        <h1 className='header-h'>
            Powerful for developers.
        </h1>
        <h1 className='fast'>
            Fast for everyone
        </h1>
        <div className='header-but'>
            <button className='header-but-1'>
                START BUILDING
            </button>
            <br></br>
            <button className='header-but-2'>
                READ DOCUMENTATION
            </button>
        </div>
        <p className='header-p'>
            Solana is a decentralized built to enable scalable, user-friedly apps for the world
        </p>
    </div>
  )
}
