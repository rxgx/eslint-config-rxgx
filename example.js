import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import config from './index';

const three = 'THREE';
const [one, two] = [1, 2];
const { env } = config;

export class Application extends React {
  static propTypes = {
    isDisabled: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.env = env;
    this.location = window.document.location;
  }

  componentDidMount() {
    this.getRemoteStuff()
      .catch(error => {
        this.setState({ error });
      })
      .then(data => {
        this.setState({ data });
      });
  }

  async getRemoteStuff() {
    let error;
    const result = await axios
      .get('https://rxgx.com')
      .catch(err => (error = err));
    if (error) return Promise.reject(error);
    return result.data;
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

var element = document.getElementById('application');
var component = React.createElement(Application, {});
ReactDOM.render(component, element);
