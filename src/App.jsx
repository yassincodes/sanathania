import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Library from './pages/Library'
import Story from './pages/Story'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/story/:id" element={<Story />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
