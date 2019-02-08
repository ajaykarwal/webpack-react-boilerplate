import React from 'react';
import PropTypes from 'prop-types';

const SayHello = ({ title }) => (
  <div>{title}</div>
);

SayHello.propTypes = {
  title: PropTypes.string,
};

export default SayHello;