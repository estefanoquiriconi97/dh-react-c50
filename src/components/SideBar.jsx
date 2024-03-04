import React from 'react'

export const SideBar = () => {
  return (
    <>
      <ul
        className='navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion'
        id='accordionSidebar'
      >
        <a
          class='sidebar-brand d-flex align-items-center justify-content-center'
          href='/'
        >
          <div class='sidebar-brand-icon'>
            <img
              class='w-100'
              src='assets/images/logo-DH.png'
              alt='Digital House'
            />
          </div>
        </a>

        <hr className='sidebar-divider my-0' />

        <li class='nav-item active'>
          <a class='nav-link' href='/'>
            <i class='fas fa-fw fa-tachometer-alt'></i>
            <span>Dashboard - DH movies</span>
          </a>
        </li>

        <hr className='sidebar-divider' />

        <div className='sidebar-heading'>Actions</div>

        <li className='nav-item'>
          <a className='nav-link collapsed' href='/'>
            <i class='fas fa-fw fa-folder'></i>
            <span>Pages</span>
          </a>
        </li>

        <li className='nav-item'>
          <a className='nav-link' href='/'>
            <i className='fas fa-fw fa-chart-area'></i>
            <span>Charts</span>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/'>
            <i className='fas fa-fw fa-table'></i>
            <span>Tables</span>
          </a>
        </li>
        <hr className='sidebar-divider d-none d-md-block' />
      </ul>
    </>
  )
}
