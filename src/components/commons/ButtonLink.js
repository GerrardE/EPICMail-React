import React from 'react';
import PropTypes from 'prop-types';

export const ButtonLink = ({href, btnClass, btnName}) => {
  return (
    <a href={href} className={btnClass}>{btnName}</a>
  )
}

ButtonLink.propTypes = {
  href: PropTypes.string,
  btnClass: PropTypes.string,
  btnName: PropTypes.string,
}