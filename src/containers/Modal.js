import React, { Component } from "react";
import "./modal.css"
import Backdrop from "./backdrop"

class modal extends Component {
    render() {
        return (
            <div>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}>

                </Backdrop>
               {this.props.show ? <div className="modal">
                    {this.props.children}
                </div> : null}

            </div>
        )
    }
}

export default modal;