import React from 'react'
import "./dropdown.css"
export default function Community() {
  return (
    <div className='com-main-div'>
        <div className='com-first-div'>
            <div className='community'>
                <h4 className='heading'>COMMUNITY</h4>
                <p>Home</p>
                <p>Events</p>
                <p>Breakpoint</p>
                <p>Branding</p>
            </div>
            <div className='collective'>
                <div className='button-div'>
                <h4 className='heading-col'>COLLECTIVE</h4>
                <p className='button-p'>HELP SOLANA GROW</p>

                </div>
           
            <p className='join'>Join the Collective</p>
            </div>
        </div>
        <div className='com-second-div'>
        <h4 className='heading'>CONTENT</h4>
        <p>News</p>
        <p>Podcast</p>
        <p>Youtube</p>
        <p>Newsletter</p>

        </div>
        <div className='com-third-div'>
        <h4 className='heading'>SOCIALS</h4>
        <p>Twitter</p>
        <p>Discord</p>
        <p>Reddit</p>
        <p>Telegram</p>
    
        </div>
    </div>
  )
}
