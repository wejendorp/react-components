// https://github.com/styleguidist/react-styleguidist/blob/master/src/client/rsg-components/ComponentsList/ComponentsListRenderer.js

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Link from 'rsg-components/Link';
import Styled from 'rsg-components/Styled';
import { getHash } from 'react-styleguidist/lib/client/utils/handleHash';

const styles = ({ color, fontFamily, fontSize, space, mq }) => ({
  list: {
    margin: 0,
    paddingLeft: space[2]
  },
  item: {
    color: color.base,
    display: 'block',
    margin: [[space[1], 0, space[1], 0]],
    fontFamily: fontFamily.base,
    fontSize: fontSize.base,
    listStyle: 'none',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  isChild: {
    [mq.small]: {
      display: 'inline-block',
      margin: [[0, space[1], 0, 0]]
    }
  },
  heading: {
    color: color.base,
    marginTop: space[1],
    fontFamily: fontFamily.base,
    fontWeight: 'bold'
  },
  isSelected: {
    fontWeight: 'bold'
  }
});

export function ComponentsListRenderer({ classes, items }, { config }) {
  const { pagePerSection } = config;
  items = items.filter(item => item.visibleName);

  if (!items.length) {
    return null;
  }

  // Match selected component in both basic routing and pagePerSection routing.
  const { hash, pathname } = window.location;
  const windowHash = pathname + (pagePerSection ? hash : getHash(hash));
  return (
    <ul className={classes.list}>
      {items.map(
        ({ heading, visibleName, href, content, shouldOpenInNewTab }) => {
          const isItemSelected = windowHash === href;
          return (
            <li
              className={cx(classes.item, {
                [classes.isChild]:
                  (!content || !content.props.items.length) &&
                  !shouldOpenInNewTab,
                [classes.isSelected]: isItemSelected
              })}
              key={href}
            >
              <Link
                className={cx(heading && classes.heading, classes.link)}
                href={href}
                target={shouldOpenInNewTab ? '_blank' : undefined}
              >
                {visibleName}
              </Link>
              {content}
            </li>
          );
        }
      )}
    </ul>
  );
}

ComponentsListRenderer.propTypes = {
  items: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

ComponentsListRenderer.contextTypes = {
  config: PropTypes.object.isRequired
};

export default Styled(styles)(ComponentsListRenderer);
