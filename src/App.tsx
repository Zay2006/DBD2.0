import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import LiveRedirect from './pages/LiveRedirect'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<LiveRedirect />} />
      </Route>
    </Routes>
  )
}
