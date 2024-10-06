import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Components/HomePage'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <div className='App'>
    <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App

