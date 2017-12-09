import React from "react";
import ReportForm from "../ReportForm/ReportForm";
import "./FormModal.css";

class FormModal extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      modalOpen: false
    };
  }

  handleClick(e) {
    // toggle state
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Report a turtle</button>

        <div
          id="myModal"
          className="modal"
          style={{ display: this.state.modalOpen ? "block" : "none" }}
        >
          <div className="modal-content">
            <span onClick={this.handleClick} className="close">
              &times;
            </span>
            {this.props.children}
            <ReportForm />
          </div>
        </div>
      </div>
    );
  }
}

export default FormModal;
