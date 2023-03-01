import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Navbar } from '../ui/components/Navbar'

import { HomePage } from '../parkings/pages/HomePage'
import { AboutPage } from '../parkings/pages/AboutPage'
import { BiblioPage } from '../parkings/pages/BiblioPage'

export const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='bibliotecas' element={<BiblioPage />} />
            <Route path='contacto' element={<AboutPage />} />
        </Routes>
    
    </>
  )
}
