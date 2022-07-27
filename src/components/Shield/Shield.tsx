import React, { createElement } from 'react';
import clsx from 'clsx';
import filterProps from '@site/src/utils/filter-props';

import { ShieldProps } from '@site/src/components/Shield/types';

const Shield: React.FC<ShieldProps> = ({
  className,
  alt,
  urlShield = null,
  shieldArgs = {},
  ...rest
}) => {
  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class': false,
    [className]: !!className,
  });

  const baseUrl = 'https://img.shields.io/static/v1.svg';
  const shieldParams = Object.keys(shieldArgs)
    .map((key) => key + '=' + shieldArgs[key])
    .join('&');
  const src = urlShield !== null ? urlShield : `${baseUrl}?${shieldParams}`;

  return createElement(
    'img',
    {
      className: classes,
      alt,
      src,
      ...filteredProps,
    },
    null,
  );
};

Shield.displayName = 'Shield';

export default Shield;

/*
<Shield shieldArgs={{
style: 'flat',
label: 'Node',
message: 'v14.15.4',
labelColor: '339933',
color: '757575',
logoColor: 'FFFFFF',
logo: 'Node.js'
}} alt="Node.js"/>

<Shield urlShield="https://img.shields.io/github/v/tag/rudemex/nestjs-starter?label=release" alt="Release"/>
*/
