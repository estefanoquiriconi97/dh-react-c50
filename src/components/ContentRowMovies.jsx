import React from 'react'
import { Widget } from './Widget'

export const ContentRowMovies = () => {
  return (
    <>
      <div className='row'>
        <div className='col-md-4 mb-4'>
          <Widget
            titulo='movies in data base'
            cifra={27}
            colorBorde='primary'
            icono='fa-film'
          />
        </div>

        <div className='col-md-4 mb-4'>
          <Widget
            titulo='total awards'
            cifra={79}
            colorBorde='success'
            icono='fa-award'
          />
        </div>
        <div className='col-md-4 mb-4'>
          <Widget
            titulo='actors quantity'
            cifra={49}
            colorBorde='warning'
            icono='fa-user'
          />
        </div>
      </div>
    </>
  )
}
