import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SideNav from '../layouts/SideNav';
import { Button } from '../commons/Button';
import { postMail } from '../../actions/sendActions';

class SendMail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toEmail: '',
      subject: '',
      message: '',
      status: '',
      errors: ''
    }

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onClick = (e) => {
    if(e.target.name === 'draft') {
      this.setState({ status: e.target.name })
    } else if (e.target.name === 'sent') {
      this.setState({ status: e.target.name })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { toEmail, subject, message, status } = this.state;
    const newEmail = { subject, message, toEmail, status };
    
    this.props.postMail(newEmail, this.props.history)
  }


  render() {
    const { errors } = this.state;

    return (
      <React.Fragment>
        <SideNav />
        <div id="main" className="">
          <h2 className="lead-title">Create Message</h2>
          <p>Welcome!</p>
          <div className="container">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-25">
                  {errors.message && (<span className="alert">{errors.message}</span>)}
                  <label htmlFor="rEmail">Recipient(s) Email</label>
                </div>
                <div className="col-75">
                  <input type="email" id="toEmail" name="toEmail" placeholder="Recipient's email" onChange={this.onChange} value={this.state.toEmail} />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="subject">Subject</label>
                </div>
                <div className="col-75">
                  <input type="text" id="subject" name="subject" placeholder="Email Subject ..." onChange={this.onChange} value={this.state.subject} />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="message">Message</label>
                </div>
                <div className="col-75">
                  <textarea id="message" name="message" placeholder="Write something.." onChange={this.onChange} value={this.state.message}></textarea>
                </div>
              </div>
              <div className="row">
                <span className="btnActions">
                  <Button btnClass="editbtn" btnName="SAVE" name="draft" onClick={this.onClick} type="submit"/>
                  <Button btnClass="viewbtn" btnName="SEND" name="sent" onClick={this.onClick} type="submit"/>
                </span>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
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