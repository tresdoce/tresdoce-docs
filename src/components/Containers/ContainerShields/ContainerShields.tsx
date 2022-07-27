import React, { createElement } from 'react';
import clsx from 'clsx';
import filterProps from '@site/src/utils/filter-props';
import useFrontMatter from '@theme/useFrontMatter';

import {
  ContainerShieldsProps,
  ShieldsFrontMatter,
} from '@site/src/components/Containers/ContainerShields/types';

import Shield from '@site/src/components/Shield';
import Link from '@site/src/components/Link';

const ContainerShields: React.FC<ContainerShieldsProps> = ({ className, ...rest }) => {
  const { shields } = useFrontMatter<ShieldsFrontMatter>();
  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class': false,
    [className]: !!className,
  });

  const shieldsArr = shields.map((shield) => {
    const breakLine = shield?.break ? <br key={`br-${shield.name}`} /> : null;
    const ShieldComponent = (
      <Shield key={`shield-${shield.name}`} urlShield={shield.src} alt={`${shield.name}`} />
    );
    return shield?.link
      ? [
          <Link
            key={`link-${shield.name}`}
            href={shield.link}
            target={`${shield.target}`}
            children={ShieldComponent}
          />,
          breakLine,
          ' ',
        ]
      : [ShieldComponent, breakLine, ' '];
  });

  return createElement(
    'div',
    {
      className: classes,
      ...filteredProps,
    },
    shieldsArr,
  );
};

ContainerShields.displayName = 'ContainerShields';

export default ContainerShields;
