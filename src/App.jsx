import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SettingsGame from './components/Game/SettingsGame'
import Home from './pages/Home'
import Explore from './pages/Explore'
import PostView from './pages/PostView'
import { AuthContextProvider } from './context/AuthContext'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/play' element={<SettingsGame />} />

          <Route path='/explore' element={<Explore />} />
          
          <Route path='/play/:id' element={<PostView />} />
        </Routes>
        <Footer />
        </div>
      </AuthContextProvider>
    </BrowserRouter>


  )
}

export default App
