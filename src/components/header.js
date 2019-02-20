import React, { Component } from "react";
import { Link } from 'react-router-dom'
import LoginPage from "../containers/loginPage";
import "./header.css";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CreateIcon from '@material-ui/icons/Create';
import DehazeIcon from '@material-ui/icons/Dehaze';
import PersonIcon from '@material-ui/icons/Person';
import Home from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

class headers extends Component {
    state = {
        showModal: false,
        top: false,
        left: false,
        bottom: false,
        right: false,
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    toggleModal = (ev) => {
        this.setState((state) => {
            return {
                ...state,
                showModal: state.showModal ? false : true
            }
        })
    }
    changeHistory = (path) => {
        if (path == 'Login') {
            this.toggleModal();
        } else if (path == 'Create account') {
            this.props.history.replace("/createAccount");
        }
        else if(path == '/home'){
            this.props.history.replace("/home");
        }
        else {
            console.log(path)
            this.props.history.replace("/loggedIn");
        }

    }

    render() {

        const sideList = (
            <div >
                <List>
                    {['Home'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon> <Home /></ListItemIcon>
                            <ListItemText primary={text} onClick={() => this.changeHistory("/home")} />

                        </ListItem>
                    ))}
                </List>
                <Divider />

                {this.props.loggedIn.username ? 
               <div>
                   <ListItem button key={this.props.loggedIn.username}>
                       <ListItemIcon> <PersonIcon /></ListItemIcon>
                       <ListItemText primary={this.props.loggedIn.username} onClick={() => this.changeHistory(this.props.loggedIn.username)} />
                   </ListItem>
                   {
                       
                       
                       }
               </div>
            : 
            <List>
                    {['Login', 'Create account'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{text == "Create account" ? <CreateIcon /> : text == "Login" ? <PersonIcon />: null}</ListItemIcon>
                            <ListItemText primary={text} onClick={() => this.changeHistory(text)} />
                        </ListItem>
                    ))}
                </List>
            }
            </div>
        );
        return (
            <div className="headerIeto">
                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>

                <Button onClick={this.toggleDrawer('left', true)} style={{height:"50px"}}><DehazeIcon/></Button>
                <Typography variant="h2" gutterBottom style={{ color: "white", marginLeft:"10%", display: "inline" }}>
                    Amazon Serverless demo site!
              </Typography>
                <LoginPage history={this.props.history} show={this.state.showModal} toggleModal={this.toggleModal} />
            </div>
        )

    }
}
const mapStateToProps = state => ({
    loggedIn: state.user
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(headers)
