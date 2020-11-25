import { Input, Button } from 'antd';
import React, { Component } from 'react';

function createForm (Comp) {
  return class extends Component {

    constructor (props) {
      super(props)
      this.state = {}
      this.options = {}
    }

    validteFields = (cb) => {
      let rets = Object.keys(this.options).map(field => this.validateField(field))
      let ret = rets.every(v => v);
      cb(ret, this.state)
    }

    validateField = field => {
      const {rules} = this.options[field];
      let flag = rules.some(rule => {
        if (rule.required) {
          if (!this.state[field]) {
            this.setState({
              [field + 'Message']: rule.message
            })
            return false;
          }
        }
        return true;
      })
      if (flag) {
        this.setState({
          [field + 'Message']: ''
        })
      }
      return flag;
    }

    handleChange = e => {
      const {name, value} = e.target;
      // console.log(name, value)
      this.setState({
        [name]: value
      }, () => {
        this.validateField(name)
      })
    }

    getFieldDecorator = (field, option) => {
      this.options[field] = option
      return InputComp => {
        return (
          <div>
            {React.cloneElement(InputComp, {
              name: field,
              value: this.state[field] || '',
              onChange: this.handleChange
            })}
            {this.state[field + 'Message'] && (
              <p style={{color: 'red'}}>{this.state[field + 'Message']}</p>
            )}
          </div>
        )
      }
    }

    render () {
      return (
        <Comp 
          {...this.props}
          validteFields={this.validteFields}
          getFieldDecorator={this.getFieldDecorator}
        />
      )
    }
  }
}

@createForm
class FormTest extends Component {
  onLogin = () => {
    this.props.validteFields((validate, state) => {
      if (validate) {
        console.log('登录', state)
      } else {
        alert('校验失败')
      }
    });
  }
  render () {
    const {getFieldDecorator} = this.props;
    return (
      <div>
        {getFieldDecorator('username', {
          rules: [{required: true, message: '请输入用户名'}]
        })(<Input/>)}
        {getFieldDecorator('password', {
          rules: [{required: true, message: '请输入密码'}]
        })(<Input type="password"/>)}
        <Button onClick={this.onLogin}>Login</Button>
      </div>
    );
  }
}

export default FormTest;