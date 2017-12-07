import React from "react";
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
            <form
              action="https://formspree.io/umassturtlepower@gmail.com"
              method="POST"
            >
              <label>Name</label>
              <input type="text" name="name" />
              <label>Email</label>
              <input type="email" name="_replyto" />
              <label>Subject</label>
              <input type="text" name="_subject" />
              {/* <input type="text" name="_gotcha" style="display:none" /> */}
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea" />
                <label for="textarea1">Comment</label>
              </div>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormModal;
