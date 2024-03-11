import React from 'react'
import { TopBar } from './TopBar'
import { ContentRowTop } from './ContentRowTop'
import { Footer } from './Footer'

export const ContentWrapper = () => {
  return (
    <div>
      <div id='content-wrapper' className='d-flex flex-column'>
        <div id='content'>
          <TopBar />
          <ContentRowTop />
          <Footer />
        </div>
      </div>
    </div>
  )
}
