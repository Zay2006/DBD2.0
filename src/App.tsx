import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Books from './pages/Books'
import Contact from './pages/Contact'
import Hire from './pages/Hire'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Programs from './pages/Programs'
import Shop from './pages/Shop'
import StoryDriven from './pages/StoryDriven'
import Work from './pages/Work'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/story-driven" element={<StoryDriven />} />
        <Route path="/books" element={<Books />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/visual-storytelling" element={<Navigate to="/programs" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
