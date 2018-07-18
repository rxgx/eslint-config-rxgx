import React from 'react';
import PropTypes from 'prop-types';
import config from './index';

const three = 'THREE';
const [one, two] = [1, 2];
const { env } = config;

export default class Component extends React {
  static propTypes = {
    isDisabled: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.env = env;
  }

  render() {
    const { isDisabled } = this.props;
    return (
      <div className="component">
        <p className="component-name">
          Component <span className="one">{one}</span>{' '}
          <span className="two">{two}</span> {three}
        </p>
        {isDisabled ? (
          <p>
            <span>This is unfortunately disabled!</span>
          </p>
        ) : null}
      </div>
    );
  }
}
