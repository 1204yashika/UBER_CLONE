import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import CaptainLogin from './pages/CaptainLogin'
import CaptainRegister from './pages/CaptainRegister'
import Home from './pages/Home'
import UserProtector from './pages/UserProtector'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainLogout from './pages/CaptainLogout'
import CaptainProtector from './pages/CaptainProtector'


const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/login' element={<UserLogin />} />
            <Route path='/signup' element={<UserRegister />} />
            <Route path='/captainLogin' element={<CaptainLogin />} />
            <Route path='/captainSignup' element={<CaptainRegister />} />
            <Route path='/home' element={
              <UserProtector>
                <Home />
              </UserProtector>
            } />
            <Route path='/users/logout' element={
              <UserProtector>
                <UserLogout />
              </UserProtector>
              }/>
            <Route path='/captainHome' element={
              <CaptainProtector>
                <CaptainHome />
              </CaptainProtector>
            } />
            <Route path='/captain/logout' element={
              <CaptainProtector>
                <CaptainLogout />
              </CaptainProtector>
              }/>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
