import { Route, Routes } from 'react-router-dom'

import Landing from '@/pages/Landing.jsx'
import BrandKit from '@/pages/BrandKit.jsx'
import NotFound from '@/pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* Jamoa uchun: logotip, ikonka va rang ro'yxati bitta sahifada. */}
      <Route path="/brand" element={<BrandKit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
