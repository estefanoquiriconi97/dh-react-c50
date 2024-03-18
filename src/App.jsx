import './assets/css/app.css'
import { Routes, Route } from 'react-router-dom'
import { TopBar } from './components/TopBar'
import { DashboardContent } from './components/DashboardContent'
import { GenresList } from './components/GenresList'
import { LastMovieCard } from './components/LastMovieCard'
import { StatsSection } from './components/StatsSection'
import { Error404 } from './components/Error404'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'

function App() {
  return (
    <div id='wrapper'>
      <Sidebar />
      <div id='content-wrapper' className='d-flex flex-column'>
        <div id='content'>
          <TopBar />
          <div className='container-fluid'>
            <div className='d-sm-flex align-items-center justify-content-between mb-4'>
              <h1 className='h3 mb-0 text-gray-800'>App Dashboard</h1>
            </div>
            <Routes>
              <Route path='/' element={<DashboardContent />} />
              <Route path='/genres' element={<GenresList />} />
              <Route path='/last' element={<LastMovieCard />} />
              <Route path='/stats' element={<StatsSection />} />
              <Route path='*' element={<Error404 />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
