import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

const initialAmount = {
  cash: 2000,
}

class CashWithdrawal extends Component {
  state = {
    totalCash: initialAmount.cash,
  }

  withdrawAmount = amount => {
    this.setState(({totalCash: prevTotalCash}) => ({
      totalCash: prevTotalCash - amount,
    }))
  }

  render() {
    const {totalCash} = this.state

    return (
      <li>
        <h1>Sara Williams</h1>

        <DenominationItem
          cashDetails={{totalCash}}
          withdrawAmount={this.withdrawAmount}
        />
      </li>
    )
  }
}

export default CashWithdrawal
