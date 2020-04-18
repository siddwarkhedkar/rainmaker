import React, { Component } from 'react'
import './Analysis.css'
import PropTypes from 'prop-types'

class Analysis extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className='analysis'>
                <button className='button'> Analysis </button>
            </div>
        )
    }
}

export { Analysis }