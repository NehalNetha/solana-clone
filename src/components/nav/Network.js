import React from 'react'

export default function Network() {
  return (
    <div className='network-main-div'>
        <div className='net-first-div'>
            <h4 className='INSPECT'>INSPECT</h4>
            <p>Solscan<span class="material-symbols-outlined">
            south_east
            </span></p>         
            <p>Explorer<span class="material-symbols-outlined">
            south_east
            </span></p>
            <p>Solanabeach<span class="material-symbols-outlined">
            south_east
            </span></p>
            <p>Stake Distribution<span class="material-symbols-outlined">
            south_east
            </span></p>
            </div>
            <div className='status'>
                <h4 className='status'>STATUS</h4>
                <p>Network Status<span class="material-symbols-outlined">
south_east
</span></p>
            <p>Email Alerts<span class="material-symbols-outlined">
south_east
</span></p>
        </div>
        <div className='interact'>
            <h4>INTERACT</h4>
            <p>Environment</p>
            <p>RPC Prviders</p>
        </div>
    </div>
  )
}
