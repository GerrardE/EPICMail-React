import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSent } from '../../actions/getActions';
import PropTypes from 'prop-types';
import SideNav from '../layouts/SideNav';
import { MailField } from '../commons/MailField';

class Sent extends Component {
  componentDidMount = () => {
    const { getSent } = this.props;
    getSent();
  }

  render() {
    console.log(this.props)
    const { dashboard: { sent } } = this.props;
    let sentMails;

    sentMails = sent && sent.retrievedMessages.map((sentMail) => (
      <MailField
        key={sentMail.id}
        classType="container-chat darker"
        email={sentMail.email}
        createdon={sentMail.createdon}
        body={sentMail.subject}
      />
    ))

    return (
      <>
        <SideNav />
        <div id="main">
          <div className="leader">
            <h2 className="lead-title">Sent</h2>
            <p>Welcome!</p>
          </div>
          <div id="sentmails">
            {sentMails}
          </div>
          <MailField
            classType="container-chat darker-new"
            email="EPICMail Team"
            title="Welcome!"
            body="First off, welcome. And thanks for agreeing to use EPICMail. By now you probably know the key ways in which EPICMail differs from traditional webmail services. Cheers!"
          />
        </div>
      </>
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