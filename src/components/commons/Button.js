import React from 'react';
import PropTypes from 'prop-types';

export const ButtonLink = ({
  href, linkClass, linkName, onClick
}) => (
  <a href={href} className={linkClass} onClick={onClick}>{linkName}</a>
);

export const Button = ({
  value, btnClass, btnName, type, onClick, name
}) => (
  <button value={value} type={type} className={btnClass} onClick={onClick} name={name}>{btnName}</button>
);

ButtonLink.propTypes = {
  href: PropTypes.string,
  linkClass: PropTypes.string,
  linkName: PropTypes.string,
  onClick: PropTypes.func
};

Button.propTypes = {
  btnClass: PropTypes.string,
  btnName: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func
};
