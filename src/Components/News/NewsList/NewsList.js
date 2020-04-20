import React, { Component } from 'react'
import './NewsList.css'
import { Card, CardActionArea, CardContent, Typography, CardActions, Button } from '@material-ui/core'

class NewsList extends Component {

    render() {
        const newsData = this.props.newsData;
        return (
            <div className="newspage">
                {
                    newsData.map((article, idx) => {
                        return (
                            <Card className="news-list">
                                <CardActionArea>
                                    <section className="featuredImage">
                                        <img src={article.urlToImage} alt="" />
                                    </section>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {article.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {article.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href={article.url} target="_blank">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export { NewsList } 