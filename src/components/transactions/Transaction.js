import React from "react"
import "./transaction.css"

export default function Transaction(){
    return(
        <div>
        <div className="transaction-main-div">
            <div className="main-one">
                <div className="transac-1">
                <h5 className="trans-h">
                        transactions per second</h5>
                        <p className="sec">3,345</p>
                </div>
                
                <div className="transac-3">
                <h5 className="trans-h">
                        Total Transaction</h5>
                        <p className="tot">34,343,534,334</p>
                </div>
            </div>
            <div className="main-two">

            <div className="transac-4">
                <h5 className="trans-h">
                        Validators Node</h5>
                        <p className="validator">1743</p>
                </div>
            <div className="transac-2">
                <h5 className="trans-h">
                        Avg. Cost transactions per second</h5>
                        <p className="avg">$0.00000032</p>
                </div>
                
            </div>
            </div>
                <div className="transaction-second-main-div">
                    <div className="transac-join">
                        <h5 className="join-h5">
                            Join the fastest growing ecosystem
                        </h5>

                    </div>
                    <div className="explore">
                        <p className="solana-explore">Solana is the fastest blockchain in the world and test growing ecosystem in crypto with thousands of projects spanning DeFI, NFTs,Web3 and more.</p>
                        <button className="explore-button">EXPLORE THE ECOSYSTEM</button>
                    </div>

                </div>
            </div>
            
            
    )
}