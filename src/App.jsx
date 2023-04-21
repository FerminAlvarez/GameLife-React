import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import SettingsGame from './components/SettingsGame'
import Home from './pages/Home'


function App() {

  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path='/play' element={<SettingsGame />} />

          <Route path='/' element={<Home />} />
        </Routes>
      </>
    </BrowserRouter>


  )
}

export default App
