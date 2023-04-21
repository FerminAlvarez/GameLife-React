import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import SettingsGame from './components/SettingsGame'
import Home from './pages/Home'
import Explore from './pages/Explore'
import { AuthContextProvider } from './context/AuthContext'


function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/play' element={<SettingsGame />} />

          <Route path='/explore' element={<Explore />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>


  )
}

export default App
