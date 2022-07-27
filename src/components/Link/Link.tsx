import React, { createElement } from 'react';
import clsx from 'clsx';
import filterProps from '@site/src/utils/filter-props';
import { LinkProps } from '@site/src/components/Link/types';

const Link: React.FC<LinkProps> = ({ className, href, target = '_self', children, ...rest }) => {
  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class': false,
    [className]: !!className,
  });

  return createElement(
    'a',
    {
      className: classes,
      href,
      target,
      ...filteredProps,
    },
    children,
  );
};

Link.displayName = 'Link';

export default Link;

/*
<Link href={'https://google.com.ar'} >google.com</Link>
*/
