import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0
    }

    this.handleDepositClick = this.handleDepositClick.bind(this)
    this.handleWithdrawClick = this.handleWithdrawClick.bind(this)
  }

  handleDepositClick(e) {
    e.preventDefault();
    if (isNaN(this.refs.amount.value)) {
      console.log("Not a number");
    } else if (-(this.refs.amount.value)) {
      this.refs.amount.value = 0
      console.log('Can\'t deposit negatives!')
    } else {
      let amount = +this.refs.amount.value;
      let newBalance = this.state.balance + amount;
      this.setState({
        balance: newBalance
      })
      this.refs.amount.value = '';
    }
  }

  handleWithdrawClick(e) {
    e.preventDefault()
    if (isNaN(this.refs.amount.value)) {
      console.log('Not a number!')
    } else if (-(this.refs.amount.value)) {
      this.refs.amount.value = 0
      console.log('Can\'t deposit negatives!')
    } else {
      let amount = +this.refs.amount.value
      let newBalance = this.state.balance - amount
      this.setState ({
        balance: newBalance
      })
      this.refs.amount.value = ''
    }
  }

  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawClick} />
      </div>
    )
  }
}
