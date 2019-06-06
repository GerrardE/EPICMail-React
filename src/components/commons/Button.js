import React from 'react';
import PropTypes from 'prop-types';

export const ButtonLink = ({href, linkClass, linkName}) => {
  return (
    <a href={href} className={linkClass}>{linkName}</a>
  )
}

export const Button = ({btnClass, btnName, type, onClick, name}) => {
  return (
    <button type={type} className={btnClass} onClick={onClick} name={name}>{btnName}</button>
  )
}

ButtonLink.propTypes = {
  href: PropTypes.string,
  linkClass: PropTypes.string,
  linkName: PropTypes.string,
}

Button.propTypes = {
  btnClass: PropTypes.string,
  btnName: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired
}