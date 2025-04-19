import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Watch from './pages/watch-list/watch'
import Detail from './pages/detail/detail'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import { useDispatch } from 'react-redux'
import { getWatchList } from './redux/actions/listActions'

const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{dispatch(getWatchList())},[])
  return (
    <BrowserRouter>
    <div className='flex flex-col h-screen p-5 md:p-10 lg:px-15 xl:px-20'>
      <Header/>
      <div className='flex-1 '>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<Detail/>}/>
        <Route path='/watch-list' element={<Watch/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route/>
        <Route/>
      </Routes>
      </div>
      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App