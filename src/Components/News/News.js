import React, { Component } from 'react'
import './News.css'
import { NewsList } from './NewsList'
import { NewsForm } from './NewsForm'
import business from '../../sample-data/business.json'
import science from '../../sample-data/science.json'
import entertainment from '../../sample-data/entertainment.json'
import general from '../../sample-data/general.json'
import technology from '../../sample-data/technology.json'
import health from '../../sample-data/health.json'
import sports from '../../sample-data/sports.json'

var newsData = sports;

class News extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInput: '',
            searchType: 'top-headlines',
            category: 'sports'
        }
    }

    handleSearchTypeChange = (e) => {
        const newState = this.state;
        newState.searchType = e.target.value;
        this.setState(newState);
        console.log(this.state);
    };

    handleCategoryChange = (e) => {
        const newState = this.state;
        newState.category = e.target.value;
        this.setState(newState);
        console.log(this.state);
        if (e.target.value === 'business') {
            newsData = business
        } else if (e.target.value === 'science') {
            newsData = science
        } else if (e.target.value === 'entertainment') {
            newsData = entertainment
        } else if (e.target.value === 'general') {
            newsData = general
        } else if (e.target.value === 'technology') {
            newsData = technology
        } else if (e.target.value === 'health') {
            newsData = health
        } else if (e.target.value === 'sports') {
            newsData = sports
        }
    };

    render() {
        return (
            <div className="news">
                <NewsForm handleCategoryChange={this.handleCategoryChange} handleSearchTypeChange={this.handleSearchTypeChange} displayValues={this.state} />
                <NewsList newsData={newsData} />
            </div>
        )
    }
}

export { News }