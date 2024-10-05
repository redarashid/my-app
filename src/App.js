import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <div className='App'>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App


