import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import ModalPortal from './components/Modals/ModalPortal'
import Home from './pages/Home/Home'
import { Search } from './pages/Search/Search'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <ModalPortal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  )
}

export default App
