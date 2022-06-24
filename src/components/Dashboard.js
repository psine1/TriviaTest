import React, { Component } from "react";
import Modal from './Modal.js';


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
        </Modal>
        <button className="signUp-btn" type="button" onClick={this.showModal}>
          Sign Up
        </button>
      </div>
    );
  }


}

export default Dashboard