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
                Analysis
            </div>
        )
    }
}

export { Analysis }