import React from 'react';
import config from './index';

const three = 'THREE';
const [one, two] = [1, 2];
const { env } = config;

export default class Component extends React {
  constructor(props) {
    super(props);
    this.env = env;
  }

  render() {
    return (
      <div className="component">
        <p className="component-name">
          Component <span className="one">{one}</span>{' '}
          <span className="two">{two}</span> {three}
        </p>
      </div>
    );
  }
}
