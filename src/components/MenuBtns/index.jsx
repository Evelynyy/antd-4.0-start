import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Button } from 'antd';

import './index.less';

class MenuButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goToLoginPage = () => {
    this.props.history.push('/login');
  };
  goToDashboardPage = () => {
    this.props.history.push('/dashboard');
  };
  goToTablePage = () => {
    this.props.history.push('/table');
  };
  goToRegisterPage = () => {
    this.props.history.push('/register');
  };

  render() {
    return (
      <div className="menu-buttons">
        <Button type="primary" onClick={this.goToLoginPage}>
          Login
        </Button>{' '}
        <Button type="primary" onClick={this.goToDashboardPage}>
          Dashboard
        </Button>
        <Button type="primary" onClick={this.goToTablePage}>
          Table
        </Button>
        <Button type="primary" onClick={this.goToRegisterPage}>
          Register
        </Button>
      </div>
    );
  }
}
export default withRouter(MenuButtons);
