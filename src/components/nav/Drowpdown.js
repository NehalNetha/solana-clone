import React from 'react'
import "./dropdown.css"

export default function Dropdown() {
  return (
    <div className="dropdown-main-div">
        <div className="first-div"> 
            <h1 className='res' style={{color:'gray'}}>RESOURCES</h1>
            <div className='first-div-child'>
                <div>
                <div><h3>GETTING STARTED</h3><p>Developer resources</p></div>
                <div><h3>NFTS</h3><p>Mint, sell, trade NFTs at sclae</p></div>
                <div><h3>DEFI</h3><p>Low feels, Low latency, Capital effeciency</p></div>
                <div><h3>GAMING</h3><p>bleh, bleh, bleh</p></div>
                <div><h3>PAYMETNS</h3><p>bleh, bleh, bleh, bleh</p></div>
                <div><h3>DAOS</h3><p>bleh, bleh, ble, bleh</p></div>
                </div>
            </div>
        </div>
        <div className='second-div'>
            <div className='learning'>
                <h1 className='learn' style={{color:'gray'}}>LEARNING</h1>
                
                <div className='ul-div'>
                    <p>Solana CookBook</p>
                    <p>SolDev</p>
                    <p>Solana Docs</p>
                    <p>Metaplex Docs</p>
                </div>
                
            </div>
            <div className='careers'>
                <div className='car-div'>
                    <h1 className='car'>CAREERS</h1>
                    <p>WERE HIRING</p>
                </div>
                <p>See available positions</p>
            </div>
        </div>
        <div className='third-div'>
            <h1 className='guides' style={{color:'gray'}}>GUIDES & TUTORIALS</h1>
            <p>Figment learn</p>
            <p>Questbook x superlearn</p>
            <p>Intro to Building Solana Programs</p>
            <p>Intro to Anchor Framework</p>
            <p>A guide to Full Stack Development On Solana</p>
            <p>Intro TO Solana Blockchain Concepts</p>
        </div>
    </div>
  )
}
