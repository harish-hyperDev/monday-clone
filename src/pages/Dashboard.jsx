import React from 'react'
import TicketCard from '../components/TicketCard'

const Dashboard = () => {
  return (
    <div className="bg-black border border-black">
      <h1>My Projects</h1>
      <div className=''>
        <TicketCard />
      </div>
    </div>
  )
}

export default Dashboard