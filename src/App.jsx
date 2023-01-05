import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'
import Nav from './components/Nav'
// import './App.css'

const App = () => {

  return (
    <div className="App font-sans flex">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/ticket' element={<TicketPage />} />
          <Route path='/ticket/:id' element={<TicketPage editMode={true} />} />
        </Routes>        
      </BrowserRouter>
    </div>
  )
}

export default App
