import React from 'react'
import PropTypes from 'prop-types';

export const Widget = ({ titulo, cifra, colorBorde, icono }) => {
  return (
    <>
      <div className={`card border-left-${colorBorde} shadow h-100 py-2`}>
        <div className='card-body'>
          <div className='row no-gutters align-items-center'>
            <div className='col mr-2'>
              <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                {titulo}
              </div>
              <div className='h5 mb-0 font-weight-bold text-gray-800'>
                {cifra}
              </div>
            </div>
            <div className='col-auto'>
              <i className={`fas ${icono} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Widget.propTypes = {
    titulo : PropTypes.string.isRequired,
    colorBorde : PropTypes.string.isRequired,
    cifra : PropTypes.number.isRequired,
    icono : PropTypes.string.isRequired,
};