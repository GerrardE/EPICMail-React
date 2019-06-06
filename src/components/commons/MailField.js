import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLink } from './Button';

export const MailField = ({ id, classType, email, createdon, title, body }) => {
  return (
    <div key={id} className={classType}>
      <div className="top">
        <span className="title">{email}</span>
        <span className="time-right">{createdon}</span>
      </div>
      <p className="lead">{title}</p>
      <p className="para">{body}</p>
      <ButtonLink
        linkClass="viewbtn"
        linkName="VIEW"
      />
      <ButtonLink
        linkClass="deletebtn"
        linkName="DELETE"
      />
    </div>
  )
}

MailField.propTypes = {
  id: PropTypes.string,
  classType: PropTypes.string,
  email: PropTypes.string,
  createdon: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  btnName: PropTypes.string,
}
