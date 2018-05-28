import React from 'react'

class Modal extends React.Component {
  closeModal () {
    if (this.props.onClose) this.props.onClose()
  }

  render () {
    if (!this.props.visible) return null
    return (
      <div className='Modal-wrapper'>
        <section className='Modal'>
          <span className='Close' onClick={() => this.closeModal()}>
            <svg
              className='Close__icon'
              enableBackground='new 0 0 100 100'
              id='Layer_1'
              version='1.1'
              viewBox='0 0 100 100'
            >
              <polygon
                fill='#ccc'
                points='77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2   51.5,51.1 79.6,23 '
              />
            </svg>
          </span>

          {this.props.children}

        </section>
        <div className='Modal-overlay' onClick={() => this.closeModal()} />
      </div>
    )
  }
}

export default Modal
