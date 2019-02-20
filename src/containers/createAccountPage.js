import React, { Component } from "react";

import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';

class createAccountPage extends Component {

    state = {
        showConfirm: false
    }
    clickedWaterPig = () => {
        var poolData = {
            UserPoolId: 'eu-west-2_PwNc0zt16', // Your user pool id here
            ClientId: '7mreja411r0saqsa1rqhju19jf' // Your client id here
        };

        var userPool = new CognitoUserPool(poolData);
        var attributeList = [];

        var dataEmail = {
            Name: 'email',
            Value: this.state.email
        };

        var attributeEmail = new CognitoUserAttribute(dataEmail);
        attributeList.push(attributeEmail);
        userPool.signUp(this.state.usrName, this.state.password, attributeList, null, (err, result) => {
            if (err) {
                console.log("ERROR")
            }
            else if (result) {
                console.log("LYCKAT WTF")
                this.setState((state) => {
                    return {
                        ...state,
                        showConfirm: true
                    }
                })

            }
            else {
                console.log("MAS O MENOS")
            }
        })

    }
    confirm = () => {
        var poolData = {
            UserPoolId: 'eu-west-2_PwNc0zt16', // Your user pool id here
            ClientId: '7mreja411r0saqsa1rqhju19jf' // Your client id here
        };

        var userPool = new CognitoUserPool(poolData);
        var attributeList = [];
        var userData = {
            Username: this.state.usrName,
            Pool: userPool
        };
        var cognitoUser = new CognitoUser(userData);
        cognitoUser.confirmRegistration(this.state.confirm, true, function (err, result) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log('call result: ' + result);
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

    render() {
        return (

            <div>
                CREATE ACCOUNT
                      <br />
                {this.state.showConfirm ? (
                    <div>
                        <input type="text" name="confirm" onChange={this.textChange} placeholder="ConfirmCode" />
                        <button onClick={this.confirm} >Confirm</button>
                    </div>
                ) :
                    <div>
                        <input type="text" onChange={this.textChange} name="usrName" placeholder="Username" />
                        <input type="text" onChange={this.textChange} name="password" placeholder="Password" />
                        <input type="text" onChange={this.textChange} name="email" placeholder="Email" />
                        <button onClick={this.clickedWaterPig}>
                            Create account
                    </button>
                    </div>
                }

            </div>
        )
    }
}

export default createAccountPage;