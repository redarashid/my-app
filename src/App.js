import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import NavBar from './Components/NavBar'
import AboutPages from './Pages/AboutPages'
import ServicesPage from './Pages/ServicesPage'
import ContactPage from './Pages/ContactPage'

const App = () => {
  return (
    <div className='App'>
    <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pages/about' element={<AboutPages />} />
        <Route path='/pages/services' element={<ServicesPage />} />
        <Route path='/pages/contact' element={<ContactPage/>} />
      </Routes>
    </div>
  )
}

export default App

