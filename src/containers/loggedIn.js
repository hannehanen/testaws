import React, { Component } from "react";
import { connect } from 'react-redux'
import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
class loggedIn extends Component {
    state = {
        oldpsw: "",
        newpsw: "",
        profileInfo: ""
    }

    componentDidMount() {
        console.log("DID MOUNT")
        if (this.props.loggedIn.name) {
            this.props.history.push("/login")
        }

        let token = this.props.IDTOKEN

        var headers = {
            'Authorization': token,
            "Content-type": 'application/json'
        }
        axios.get("https://d67id48gk0.execute-api.eu-north-1.amazonaws.com/lek/patrik-first-endpoint", { headers: headers }).then(data => {
            let obj = data.data;
            this.setState((state) => {
                return {
                    ...state,
                    profileInfo: obj.profileInfo
                }
            });
        }).catch(err => {
            console.log(err)
        })

    }

    changePass = () => {
        this.props.loggedIn.changePassword(this.state.oldpsw, this.state.newpsw, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(result)
            }
        });
    }
    textInptChange = (ev) => {
        let name = ev.target.name;
        let value = ev.target.value;
        this.setState((state) => {
            return {
                ...state, [name]: value
            }
        });

    }
    sendData = () => {
        let token = this.props.IDTOKEN

        var headers = {
            'Authorization': token,
            "Content-type": 'application/json'
        }
        axios.post("https://d67id48gk0.execute-api.eu-north-1.amazonaws.com/lek/patrik-first-endpoint", { 'info': this.state.profileInfo }, { headers: headers }).then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    }
    infoChange = (ev) => {
       
        let val = ev.target.value;
        this.setState((state) => {
            return {
                ...state,
                profileInfo: val
            }
        })
    }
    render() {
        let usr = this.props.loggedIn
        return (
            <div>
                <Typography variant="h3" gutterBottom>
                    Välkommen {usr.username}!
                </Typography>
                <Card >
                    <CardActionArea>
                        <CardMedia image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Change Password
                            </Typography>
                            <Typography component="p">
                                <input type="text" name="oldpsw" onChange={this.textInptChange} placeholder="Current password" />
                                <br></br>

                                <input type="text" name="newpsw" onChange={this.textInptChange} placeholder="New password" />
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {this.state.newpsw.length > 4 && this.state.oldpsw.length > 4 ? <button onClick={this.changePass}>Change</button> : null}
                    </CardActions>
                </Card>
                <Card >
                    <CardActionArea>
                        <CardMedia image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Profile Info
                            </Typography>
                            <Typography component="p">
                                <TextField margin="normal" onChange={this.infoChange} helperText="Spread the word around" variant="outlined" rowsMax="4" multiline value={this.state.profileInfo} />
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <button onClick={this.sendData}>Update profileInfo</button>
                    </CardActions>
                </Card>


            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.user,
    IDTOKEN: state.ID_TOKEN
})

const mapDispatchToProps = dispatch => ({


})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(loggedIn)