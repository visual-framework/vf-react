const React = require('react');

exports.VfButton = ({ children, ...props }) => {
  return React.createElement('button', { 'data-testid': 'vf-button' }, 'Mock VF Button');
};
