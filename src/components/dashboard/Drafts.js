import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDrafts } from '../../actions/getActions';
import SideNav from '../layouts/SideNav';
import MailField from '../commons/MailField';
import Loader from '../commons/Loading';

export class Drafts extends Component {
  componentDidMount() {
    const { getDrafts } = this.props;
    getDrafts();
  }

  render() {
    const { loading, dashboard: { draft } } = this.props;
    let draftMails, dashboardContent;

    draftMails = draft && draft.retrievedMessages.map((draftMail) => (
      <MailField
        key={draftMail.id}
        classType="container-chat darker"
        email={draftMail.email}
        createdon={draftMail.createdon}
        body={draftMail.subject}
      />
    ))

    if (draft === null || loading) {
      dashboardContent = <Loader />
    } else {
      dashboardContent =
        <div id="main">
          <div className="leader">
            <h2 className="lead-title">Drafts</h2>
            <p></p>
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
    }

    return (
      <Fragment>
        <SideNav />
        {dashboardContent}
      </Fragment>
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
