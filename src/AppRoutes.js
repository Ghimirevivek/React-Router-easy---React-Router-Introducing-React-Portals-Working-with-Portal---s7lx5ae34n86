import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Index } from './pages/Index'
import { NotFound } from './pages/NotFound'
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/Index" element={<Index />} />
      <Route path="/NotFound" element={<NotFound />} />
    </Routes>
  )
}
