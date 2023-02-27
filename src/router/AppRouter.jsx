import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Navbar } from '../ui/components/Navbar'

import { HomePage } from '../parkings/pages/HomePage'
import { AboutPage } from '../parkings/pages/AboutPage'
import { ParkingPage } from '../parkings/pages/ParkingPage'

export const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='parking' element={<ParkingPage />} />
        </Routes>
    
    </>
  )
}
