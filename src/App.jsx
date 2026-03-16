import { Navigate, Route, Routes } from 'react-router-dom'
import { HeroPage } from './pages/HeroPage.jsx'
import { PortfolioPage } from './pages/PortfolioPage.jsx'
import { ServicesTestimonialsPage } from './pages/ServicesTestimonialsPage.jsx'
import { ContactPage } from './pages/ContactPage.jsx'
import { ScrollManager } from './ScrollManager.jsx'

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesTestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
