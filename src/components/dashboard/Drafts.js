import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDrafts } from '../../actions/getActions';
import PropTypes from 'prop-types';
import SideNav from '../layouts/SideNav';
import { MailField } from '../commons/MailField';

class Drafts extends Component {
  componentDidMount = () => {
    const { getDrafts } = this.props;
    getDrafts();
  }

  render() {
    console.log(this.props)
    const { dashboard: { drafts } } = this.props;
    let draftMails;

    draftMails = drafts && drafts.retrievedMessages.map((draftMail) => (
      <MailField
        key={draftMails.id}
        classType="container-chat darker"
        email={draftMails.email}
        createdon={draftMails.createdon}
        body={draftMails.subject}
      />
    ))

    return (
      <>
        <SideNav />
        <div id="main">
          <div className="leader">
            <h2 className="lead-title">Drafts</h2>
            <p>Welcome!</p>
          </div>
          <div id="draftmails">
            {draftMails}
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

Drafts.propTypes = {
  getDrafts: PropTypes.func.isRequired,
  drafts: PropTypes.object
}


const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
})

export default connect(mapStateToProps, { getDrafts })(withRouter(Drafts));