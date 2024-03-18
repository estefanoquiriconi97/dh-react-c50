import React from 'react'
import { GenresList } from './GenresList'
import { StatsSection } from './StatsSection'
import { LastMovieCard } from './LastMovieCard'

export const DashboardContent = () => {
  return (
    <>
      <StatsSection />
      <div className='row'>
        <div className='col-lg-6 mb-4'>
          <LastMovieCard />
        </div>
        <div className='col-lg-6 mb-4'>
          <GenresList />
        </div>
      </div>
    </>
  )
}
