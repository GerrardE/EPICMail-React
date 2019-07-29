import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SideNav from '../layouts/SideNav';
import { Button } from '../commons/Button';
import postMail from '../../actions/sendActions';
import emailRegex from '../../validations/helpers'

export class SendMail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toEmail: '',
      subject: '',
      message: '',
      status: '',
      errors: {}
    }
  }

  onClick = (e) => {
    if (e.target.name === 'draft') {
      this.setState({ status: e.target.name })
    } else if (e.target.name === 'sent') {
      this.setState({ status: e.target.name })
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    const { errors } = this.state;
    const { name, value } = e.target;
    const trimVal = value.trim();

    switch (name) {
      case "toEmail":
        errors.toEmail =
          emailRegex.test(trimVal) && trimVal.length > 0
            ? ""
            : "Invalid email address";
        break;
      case "subject":
        errors.subject =
          (trimVal.length < 6 && trimVal.length > 0) || trimVal.length === 0
            ? "A minimum of 6 characters is required"
            : "";
        break;
      case "message":
        errors.message =
          (trimVal.length < 6 && trimVal.length > 0) || trimVal.length === 0
            ? "A minimum of 6 characters is required"
            : "";
        break;
    }

    this.setState({
      [e.target.name]: e.target.value,
      errors
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { toEmail, subject, message, status } = this.state;
    const newEmail = { subject, message, toEmail, status };

    this.props.postMail(newEmail);
    this.clearInput()
  }

  clearInput = () => {
    this.setState({
      toEmail: '',
      subject: '',
      message: '',
      status: '',
      errors: {}
    })
  }

  render() {
    const { toEmail, subject, message, errors } = this.state;

    return (
      <Fragment>
        <SideNav />
        <div id="main" className="">
          <h2 className="lead-title">Create Message</h2>
          <br></br>
          <div className="container">
            <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="rEmail">Recipient(s) Email</label>
                </div>
                <div className="col-75">
                  {errors.toEmail && (<span className="alert">{errors.toEmail}</span>)}
                  <input type="email" id="toEmail" name="toEmail" placeholder="Recipient's email" onChange={this.onChange} value={toEmail} />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="subject">Subject</label>
                </div>
                <div className="col-75">
                  {errors.subject && (<span className="alert">{errors.subject}</span>)}
                  <input type="text" name="subject" placeholder="Email Subject ..." onChange={this.onChange} value={subject} />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="message">Message</label>
                </div>
                <div className="col-75">
                  {errors.message && (<span className="alert">{errors.message}</span>)}
                  <textarea name="message" id="message" placeholder="Write something..." onChange={this.onChange} value={message}></textarea>
                </div>
              </div>
              <div className="row">
                <span className="btnActions">
                  <Button btnClass="editbtn" btnName="SAVE" name="draft" onClick={this.onClick} type="submit" />
                  <Button btnClass="viewbtn" btnName="SEND" name="sent" onClick={this.onClick} type="submit" />
                </span>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    )
  }
}

SendMail.propTypes = {
  postMail: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  errors: state.errors
})

export default connect(mapStateToProps, { postMail })(withRouter(SendMail));
