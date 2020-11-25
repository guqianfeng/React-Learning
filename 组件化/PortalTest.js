import React, { Component } from 'react';
import {createPortal} from 'react-dom'

class PortalTest extends Component {
  constructor(props) {
    super(props);
    this.node = document.createElement('div');
    document.body.appendChild(this.node);
  }

  componentWillUnmount () {
    document.body.removeChild(this.node);
  }

  render = () => {
    return createPortal((
      <div>
          {this.props.children}
      </div>
      ),this.node);
  }
}
export default PortalTest;