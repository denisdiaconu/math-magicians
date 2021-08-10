import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <button className={this.props.Addclass}>{this.props.buttonName}</button>
    );
  }
}
