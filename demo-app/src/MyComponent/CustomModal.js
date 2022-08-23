import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
export default class CustomModal extends Component {
  render() {
    return (
      <div >
        {/* model start */}
        <Modal  show={this.props.show} >
        <div class="modal-header">
          <div class="modal-title h4">Modal heading</div>
          <button type="button" class="btn-close" onClick={this.props.closeButton}></button>
          </div>
          {/* <Modal.Header closeButton >
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        </Modal>
        {/* model end */}
      </div>
    )
  }
}
