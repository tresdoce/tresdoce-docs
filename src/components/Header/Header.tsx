import React, { createElement } from 'react';
import clsx from 'clsx';
import filterProps from '@site/src/utils/filter-props';
import { HeaderProps } from '@site/src/components/Header/types';
import * as Styles from '@site/src/components/Header/styles';

const Header: React.FC<HeaderProps> = ({ className, children, ...rest }) => {
  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class': false,
    [className]: !!className,
  });

  const element = Styles['Header'];
  return createElement(
    element,
    {
      className: classes,
      ...filteredProps,
    },
    children,
  );
};

Header.displayName = 'Header';

export default Header;
