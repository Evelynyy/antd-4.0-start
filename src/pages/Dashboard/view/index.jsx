import React, { Component } from 'react';

import { Button } from 'antd';

import './index.less';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = () => {
    this.props.history.push('/table');
  };
  render() {
    return (
      <div className="dashboard">
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
          commodi explicabo eaque dolorum? Nihil vero perspiciatis corporis
          sint, soluta neque at vitae minima adipisci quibusdam perferendis sed
          nesciunt unde ut.
        </div>
        <Button type="primary" onClick={this.handleClick}>
          Click Me ~
        </Button>
      </div>
    );
  }
}
export default Dashboard;
