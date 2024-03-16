import React from 'react'
import logoDh from '../assets/imagenes/logo-DH.png'

import { Routes, Route, Link } from 'react-router-dom'
import { ContentWrapper } from './ContentWrapper'
import { GenresInDb } from './GenresInDb'
import { LastMovieInDb } from './LastMovieInDb'
import { ContentRowMovies } from './ContentRowMovies'
import { Error404 } from './Error404'

export const SideBar = () => {
  return (
    <>
      <ul
        className='navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion'
        id='accordionSidebar'
      >
        <Link
          className='sidebar-brand d-flex align-items-center justify-content-center'
          to='/'
        >
          <div className='sidebar-brand-icon'>
            <img className='w-100' src={logoDh} alt='Digital House' />
          </div>
        </Link>

        <hr className='sidebar-divider my-0' />

        <li className='nav-item active'>
          <Link className='nav-link' to='/'>
            <i className='fas fa-fw fa-tachometer-alt'></i>
            <span>Dashboard - DH movies</span>
          </Link>
        </li>

        <hr className='sidebar-divider' />

        <div className='sidebar-heading'>Actions</div>

        <li className='nav-item'>
          <Link className='nav-link collapsed' to='/genres'>
            <i className='fas fa-fw fa-folder'></i>
            <span>Genres</span>
          </Link>
        </li>

        <li className='nav-item'>
          <Link className='nav-link' to='/last'>
            <i className='fas fa-fw fa-chart-area'></i>
            <span>Last Movie</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/stats'>
            <i className='fas fa-fw fa-table'></i>
            <span>Movie Stats</span>
          </Link>
        </li>
        <hr className='sidebar-divider d-none d-md-block' />
      </ul>

      <Routes>
        <Route path='/' element={<ContentWrapper />} />
        <Route path='/genres' element={<GenresInDb />} />
        <Route path='/last' element={<LastMovieInDb />} />
        <Route path='/stats' element={<ContentRowMovies />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}
