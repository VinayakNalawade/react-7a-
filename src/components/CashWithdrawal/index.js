// Write your code here
import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithdraw = object => {
    this.setState(prevState => ({balance: prevState.balance - object.value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="mainContainer">
        <div className="card">
          <div className="toprow">
            <h1 className="profilepic">S</h1>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balancerow">
            <p className="balancetext">Your Balance</p>
            <div className="balanceContainer">
              <p className="balance">{balance}</p>
              <p className="currency">In Rupees</p>
            </div>
          </div>
          <p className="withdrawheading">Withdraw</p>
          <p className="withdrawpara">CHOOSE SUM (IN RUPEES)</p>
          <ul className="sumContainer">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                object={each}
                onWithdraw={this.onWithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
