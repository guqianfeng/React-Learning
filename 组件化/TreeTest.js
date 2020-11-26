import FormItemInput from "antd/lib/form/FormItemInput";
import React, { Component } from "react";

const treeData = {
  title: "总览",
  key: "big-title",
  children: [
    {
      title: "0-0",
      key: "0-0",
      children: [
        {
          title: "0-0-0",
          key: "0-0-0",
          children: [
            { title: "0-0-0-0", key: "0-0-0-0" },
            { title: "0-0-0-1", key: "0-0-0-1" },
            { title: "0-0-0-2", key: "0-0-0-2" },
          ],
        },
        {
          title: "0-0-1",
          key: "0-0-1",
          children: [
            { title: "0-0-1-0", key: "0-0-1-0" },
            { title: "0-0-1-1", key: "0-0-1-1" },
            { title: "0-0-1-2", key: "0-0-1-2" },
          ],
        },
        {
          title: "0-0-2",
          key: "0-0-2",
        },
      ],
    },
    {
      title: "0-1",
      key: "0-1",
      children: [
        { title: "0-1-0-0", key: "0-1-0-0" },
        { title: "0-1-0-1", key: "0-1-0-1" },
        { title: "0-1-0-2", key: "0-1-0-2" },
      ],
    },
    {
      title: "0-2",
      key: "0-2",
    },
  ],
};

class TreeNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  get isFolder() {
    return this.props.treeData.children && this.props.treeData.children.length;
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <ul>
        <li>
          <div style={{cursor: 'pointer'}} onClick={this.toggle}>
            {this.props.treeData.title}
            <span>
              {this.isFolder ? (this.state.isOpen ? " -" : " +") : null}
            </span>
          </div>
          {this.isFolder ? (
            <div style={{ display: this.state.isOpen ? "block" : "none" }}>
              {this.props.treeData.children.map((item) => (
                <TreeNode treeData={item} key={item.key} />
              ))}
            </div>
          ) : null}
        </li>
      </ul>
    );
  }
}

class TreeTest extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Tree Demo</h1>
        <TreeNode treeData={treeData} />
      </div>
    );
  }
}

export default TreeTest;
