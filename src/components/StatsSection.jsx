import React from 'react'
import { StatWidget } from './StatWidget'

export const StatsSection = () => {
  return (
    <div className='row'>
      <div className='col-md-4 mb-4'>
        <StatWidget
          title='movies in data base'
          quantity={27}
          borderColor='primary'
          icon='fa-film'
        />
      </div>
      <div className='col-md-4 mb-4'>
        <StatWidget
          title='total awards'
          quantity={79}
          borderColor='success'
          icon='fa-award'
        />
      </div>
      <div className='col-md-4 mb-4'>
        <StatWidget
          title='actors quantity'
          quantity={49}
          borderColor='warning'
          icon='fa-user'
        />
      </div>
    </div>
  )
}
