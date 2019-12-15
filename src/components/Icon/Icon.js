import React from 'react';
import classNames from 'classnames';

export function Icon({ className, name, ...props }) {
  return <i className={classNames(name, className)} {...props}></i>;
}
