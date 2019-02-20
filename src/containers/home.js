import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class home extends Component {
    render() {

        return (
            <div>
                <Card >
                    <CardActionArea>
                        <CardMedia image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                What?
          </Typography>
                            <Typography component="p">
                                This (SPA) page is constructed for demo purposes only to demonstrate amazon Serverless sullotions.
          </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <a href="https://en.wikipedia.org/wiki/Serverless_computing">Learn more</a>
                    </CardActions>
                </Card>
                <Card >
                    <CardActionArea>
                        <CardMedia image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                What parts is serverless?
          </Typography>
                            <Typography component="p">
                                This site is hosted on AWS S3.
                                Its API is AWS API gateway.
                                All users and its credentials is handled with AWS cognito.
                                All backend is handled with AWS lambda.
                                Only registered users are allowed to get data from API etc.
          </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                   
                    </CardActions>
                </Card>

            </div>

        )
    }
}

export default home;


/***
 *
 *  <div>
                <h3>Why?</h3>
                This page is constructed for demo purposes only to demonstrate amazon Serverless sullotions.
                This page is hosted in a serverless manner.
                Its API is hosted in a serverless manner.
                Same goes for users and its credentials, lambda functions etc.


            </div>
 */