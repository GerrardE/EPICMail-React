import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSent } from '../../actions/getActions';
import PropTypes from 'prop-types';
import SideNav from '../layouts/SideNav';
import MailField from '../commons/MailField';
import Loading from '../commons/Loading';

export class Sent extends Component {
  componentDidMount() {
    const { getSent } = this.props;
    getSent();
  }

  render() {
    const { loading, dashboard: { sent } } = this.props;
    let sentMails, dashboardContent;

    sentMails = sent && sent.retrievedMessages.map(sentMail => (
      <MailField
        key={sentMail.id}
        classType="container-chat darker"
        email={sentMail.email}
        createdon={sentMail.createdon}
        body={sentMail.subject}
        onClick={this.onClick}
      />
    ))

    return (
      <div id="main">
        <div className="leader">
          <h2 className="lead-title">Sent</h2>
        </div>
        <div id="sentmails">
          {sentMails}
          <SideNav />
          {dashboardContent}
        </div>
        <MailField
          body='First off, welcome and thanks for agreeing to use EPICMail. By now you probably know the key ways in which EPICMail differs from traditional webmail services. You would find all your sent messages here.'
        />
      </div>
    )
  }
}

Sent.propTypes = {
  getSent: PropTypes.func.isRequired,
  sent: PropTypes.object
}


const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
})

export default connect(mapStateToProps, { getSent })(withRouter(Sent));
