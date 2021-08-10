import React, { Component } from 'react';

import './add-item-panel.css';

export default class AddItemPanel extends Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({ label: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdd(this.state.label);
    this.setState({ label: '' });
  };

  render() {
    return (
      <form className="add-item-panel" onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="New todo?"
          className="form-control"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button
          type="submit"
          className="btn btn-primary btn-sm float-right add-item-panel__btn"
        >
          <i className="fa fa-arrow-right"></i>
        </button>
      </form>
    );
  }
}
