import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import ModalPortal from './components/Modals/ModalPortal'
import Home from './pages/Home/Home'
import { Search } from './pages/Search/Search'
import { Detail } from './pages/Detail/Detail'
import { NotFound } from './pages/NotFound/NotFound'

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
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/tv/:id" element={<Detail />} />
        <Route path="*" exact={true} element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
