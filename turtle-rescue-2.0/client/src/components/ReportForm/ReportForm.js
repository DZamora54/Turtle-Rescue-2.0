import React from "react";

const ReportForm = props => (
  <form action="https://formspree.io/umassturtlepower@gmail.com" method="POST">
    <label>Name</label>
    <input type="text" name="name" value={props.name} />
    <label>Email</label>
    <input type="email" name="_replyto" value={props.email} />
    <label>Subject</label>
    <input type="text" name="_subject" value={props.subject} />
    {/* <input type="text" name="_gotcha" style="display:none" /> */}
    <div className="input-field col s12">
      <textarea
        id="textarea1"
        className="materialize-textarea"
        value={props.comment}
      />
      <label htmlFor="textarea1">Comment</label>
    </div>
    <input type="submit" value="Send" onClick={props.handleReportFormSubmit} />
  </form>
);

export default ReportForm;
