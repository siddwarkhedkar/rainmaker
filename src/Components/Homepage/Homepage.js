import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Homepage.css'

class Homepage extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className='homepage'>
                <h1>
                    Rainmaker
                </h1>
                <p>
                    When I was wandering in the desert 

                    And was searching for the truth

                    I heard a choir of angels calling out my name

                    I had the feeling that my life would never be the same again

                    I turned my face towards the barren sun

                    And I know of the pain that you feel the same as me

                    And I dream of the rain as it falls upon the leaves
                    
                    And the cracks in our lives like the cracks upon the ground

                    They are sealed and are now washed away

                    You tell me we can start the rain

                    You tell me that we all can change

                    You tell me we can find something to wash the tears away

                    You tell me we can start the rain

                    You tell me that we all can change
                    
                    You tell me we can find something to wash the tears.....
                </p>
            </div>
        )
    }
}

export { Homepage }