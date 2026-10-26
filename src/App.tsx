import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Books from './pages/Books'
import Classes from './pages/Classes'
import CommercialPhotography from './pages/CommercialPhotography'
import Contact from './pages/Contact'
import DocuTrailers from './pages/DocuTrailers'
import FamilyPhotography from './pages/FamilyPhotography'
import Filmmaking from './pages/Filmmaking'
import Home from './pages/Home'
import MyJourney from './pages/MyJourney'
import NotFound from './pages/NotFound'
import Packages from './pages/Packages'
import Shop from './pages/Shop'
import StoryDriven from './pages/StoryDriven'
import Testimonials from './pages/Testimonials'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/my-journey" element={<MyJourney />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/story-driven" element={<StoryDriven />} />
        <Route path="/books" element={<Books />} />
        <Route path="/filmmaking" element={<Filmmaking />} />
        <Route path="/documentary-trailers" element={<DocuTrailers />} />
        <Route path="/family-photography" element={<FamilyPhotography />} />
        <Route path="/commercial-photography" element={<CommercialPhotography />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<Navigate to="/my-journey" replace />} />
        <Route path="/work" element={<Navigate to="/family-photography" replace />} />
        <Route path="/hire" element={<Navigate to="/commercial-photography" replace />} />
        <Route path="/programs" element={<Navigate to="/classes" replace />} />
        <Route path="/visual-storytelling" element={<Navigate to="/classes" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
