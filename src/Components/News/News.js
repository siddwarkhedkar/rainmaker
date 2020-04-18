import React, { Component } from 'react'
import './News.css'
import PropTypes from 'prop-types'

class News extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className='news'>
                <button className='button'> News </button>
            </div>
        )
    }
}

export { News }