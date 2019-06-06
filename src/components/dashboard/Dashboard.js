import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUnread, getRead } from '../../actions/getActions';
import PropTypes from 'prop-types';
import SideNav from '../layouts/SideNav';
import { MailField } from '../commons/MailField';

class Dashboard extends Component {
  componentDidMount() {
    const { getRead, getUnread } = this.props
    getRead();
    getUnread();
  }

  render() {
    const { dashboard: { unread, read } } = this.props;
    let unreadMails, readMails;

    unreadMails = unread && unread.retrievedMessages.map(unreadMail => (
      <MailField
        key={unreadMail.id}
        classType="container-chat"
        email={unreadMail.email}
        createdon={unreadMail.createdon}
        body={unreadMail.subject}
      />
    ))

    readMails = read && read.retrievedMessages.map(readMail => (
      <MailField
        key={readMail.id}
        classType="container-chat darker"
        email={readMail.email}
        createdon={readMail.createdon}
        body={readMail.subject}
      />
    ))

    return (
      <React.Fragment>
        <SideNav/>
        <div id="main">
          <div className="leader">
            <h2 className="lead-title">Inbox</h2>
            <p>Welcome!</p>
          </div>
          <div id="unread">
            {unreadMails}
          </div>
          <div id="read">
            {readMails}
          </div>

          <MailField
            classType="container-chat darker-new"
            email="EPICMail Team"
            title="Welcome!"
            body="First off, welcome. And thanks for agreeing to use EPICMail. By now you probably know the key ways in which EPICMail differs from traditional webmail services. Cheers!"
          />
        </div>
      </React.Fragment>
    )
  }
}

Dashboard.propTypes = {
  getRead: PropTypes.func.isRequired,
  getUnread: PropTypes.func.isRequired,
  dashboard: PropTypes.object,
}


const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
  auth: state.auth,
})

export default connect(mapStateToProps, { getUnread, getRead })(withRouter(Dashboard));