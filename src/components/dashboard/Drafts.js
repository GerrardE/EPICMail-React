import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDrafts } from '../../actions/getActions';
import SideNav from '../layouts/SideNav';
import MailField from '../commons/MailField';

export class Drafts extends Component {
  componentDidMount() {
    const { getDrafts } = this.props;
    getDrafts();
  }

  render() {
    const { dashboard: { draft } } = this.props;
    let draftMails;

    draftMails = draft && draft.retrievedMessages.map((draftMail) => (
      <MailField
        key={draftMail.id}
        classType="container-chat darker"
        email={draftMail.email}
        createdon={draftMail.createdon}
        body={draftMail.subject}
      />
    ))

    return (
      <div id="main">
        <SideNav />
        <div className="leader">
          <h2 className="lead-title">Drafts</h2>
          <p></p>
        </div>
        <div id="draftmails">
          {draftMails}
          <MailField
            body='First off, welcome. And thanks for agreeing to use EPICMail. By now you probably know the key ways in which EPICMail differs from traditional webmail services. You would find all your draft messages here.'
          />
        </div>
      </div>
    )
  }
}

Drafts.propTypes = {
  getDrafts: PropTypes.func.isRequired,
  draft: PropTypes.object
}


const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
})

export default connect(mapStateToProps, { getDrafts })(withRouter(Drafts));
