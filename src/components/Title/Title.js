import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Title as BaseTitle } from './styles';

export function Title({ className, variant, children, ...props }) {
  const titleClasses = classNames(
    {
      [`is-${variant}`]: true,
    },
    className
  );

  return (
    <BaseTitle className={titleClasses} {...props}>
      {children}
    </BaseTitle>
  );
}

Title.defaultProps = {
  className: '',
  variant: 'white',
};

Title.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['white', 'dark']).isRequired,
};
