import React from 'react'
import { Widget } from './Widget'

export const ContentRowMovies = () => {
  return (
    <div className='row'>
      <Widget
        title='movies in data base'
        quantity={27}
        borderColor='primary'
        icon='fa-film'
      />
      <Widget
        title='total awards'
        quantity={79}
        borderColor='success'
        icon='fa-award'
      />
      <Widget
        title='actors quantity'
        quantity={49}
        borderColor='warning'
        icon='fa-user'
      />
    </div>
  )
}
