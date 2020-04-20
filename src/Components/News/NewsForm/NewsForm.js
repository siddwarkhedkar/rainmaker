import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem';
import './NewsForm.css'

import category from '../../../sample-data/category.json'
import searchType from '../../../sample-data/searchType.json'

class NewsForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userInput: '',
            searchType: '',
            category: ''
        }
    }

    handleUserInput = (e) => {
        const keyChange = e.key;

        if (keyChange === 'Enter') {
            this.setState({
                userInput: e.target.value.trim()
            })
            console.log(this.state)
        }


    }

    render() {
        return (
            <div>
                <TextField
                    id="outlined-select-category"
                    select
                    label="Select"
                    value={this.props.displayValues.searchType}
                    onChange={this.props.handleSearchTypeChange}
                    helperText="Please select your search type"
                    variant="outlined"
                    fullWidth
                >
                    {searchType.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <div className="margin" />
                <TextField
                    id="outlined-select-category"
                    select
                    label="Select"
                    value={this.props.displayValues.category}
                    onChange={this.props.handleCategoryChange}
                    helperText="Please select your category"
                    variant="outlined"
                    fullWidth
                >
                    {category.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        )
    }
}

export { NewsForm }
