import React, { Component } from "react";
import { connect } from 'react-redux'
import { changeUsr,addTokenToredux } from "../actions/undex";
import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js';
import Modal from "../containers/Modal";

class loginPage extends Component {
    state = {
        visible:true
    }
    componentDidMount() {
        console.log(this)
    }
    login = () => {
        var authenticationData = {
            Username: this.state.usrName,
            Password: this.state.password,
        };

        var poolData = {
            UserPoolId: 'eu-west-2_PwNc0zt16', // Your user pool id here
            ClientId: '7mreja411r0saqsa1rqhju19jf' // Your client id here
        };
        var authenticationDetails = new AuthenticationDetails(authenticationData);
        var userPool = new CognitoUserPool(poolData);
        var userData = {
            Username: this.state.usrName,
            Pool: userPool
        };
        var cognitoUser = new CognitoUser(userData);
        this.props.toggleTodo(cognitoUser);
       
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
            
                this.props.addIdToken(result.getIdToken().getJwtToken())
                this.props.toggleModal();
                this.props.history.push("/loggedIn");
            },

            onFailure: (err) => {
                alert(err.message || JSON.stringify(err));
            },
        });

    }

    textChange = (ev) => {
        let value = ev.target.value;
        let name = ev.target.name;
        this.setState((state) => {
            return {
                ...state, [name]: value
            }
        })
    }
   
    closeModal = (ev) =>{
        this.setState( (state) =>{
            return {
                ...state,
                visible : state.visible ? false : true
            }
        })
    }

    render() {
        return (
                <Modal show={this.props.show} modalClosed={this.props.toggleModal}>
                    <h1>Loginpage</h1>
                    <input type="text" onChange={this.textChange} name="usrName" placeholder="Username" />
                    <br />
                    <input type="text" onChange={this.textChange} name="password" placeholder="Password" />
                    <br />
                    <button onClick={this.login}>
                        Login
                 </button>
                </Modal>
        )
    }
}
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

    toggleTodo: usr => dispatch(changeUsr(usr)),
    addIdToken: token => dispatch(addTokenToredux(token))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(loginPage)