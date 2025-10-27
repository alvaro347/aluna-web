import { Routes, Route } from 'react-router-dom'
import { NavBar } from '@/components/NavBar/NavBar'
import { Footer } from '@/components/Footer/Footer'
import HomePage from '@/pages/HomePage'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
