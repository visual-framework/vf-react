const React = require('react');

exports.VfCard = ({ card_title, variant, newTheme, card_image, card_text, card_image__alt }) => {
  return React.createElement('div', { 'data-testid': 'vf-card' }, 'Mock VF Card');
};
