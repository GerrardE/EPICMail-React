import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

export const MailField = ({
  id, classType, email, createdon, title, body, onClick
}) => (
    <div key={id} className={classType}>
      <div className="top">
        <span className="title">{email}</span>
        <span className="time-right">{createdon}</span>
      </div>
      <p className="lead">{title}</p>
      <p className="para">{body}</p>
      {/* <Button
        linkClass="viewbtn"
        btnName="VIEW"
        value={id}
        onClick={onClick}
      />
      <Button
        linkClass="deletebtn"
        btnName="DELETE"
      /> */}
    </div>
  );

MailField.propTypes = {
  id: PropTypes.number,
  classType: PropTypes.string,
  email: PropTypes.string,
  createdon: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  btnName: PropTypes.string,
};

MailField.defaultProps = {
  classType: "container-chat darker-new",
  email: "EPICMail Team",
};

export default MailField;
