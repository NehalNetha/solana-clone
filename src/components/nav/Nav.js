import React from 'react'
import "./nav.css"


export default function Nav(props) {




  return (
    <div className='main-div'>
        <div className='h-div'> <h1 className='nav-h'>SOLANA</h1></div>
        <div className='nav-div'>
            <ul>
                <li onClick={props.click}>Developers<span class="material-symbols-outlined">expand_more</span></li>
                <li onClick={props.clickNet}>Network<span class="material-symbols-outlined">expand_more</span></li>
                <li style={{marginTop:"7px"}}>Validators</li>
                <li onClick={props.clickCom}>Community<span class="material-symbols-outlined">expand_more</span></li>
                <li style={{marginTop:"7px"}}>Ecosystem</li>

            </ul>
            
        </div>
    </div>
  )
}

