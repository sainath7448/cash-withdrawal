import './index.css'

const DenominationItem = props => {
  const {cashDetails, withdrawAmount} = props
  const {totalCash} = cashDetails

  return (
    <ul>
      <p>Your Balance {totalCash} In Rupees</p>
      <p>Withdraw</p>
      <p>CHOOSE SUM (IN RUPEES)</p>
      <li>
        <button type="button" onClick={() => withdrawAmount(50)}>
          50
        </button>
      </li>
      <li>
        <button type="button" onClick={() => withdrawAmount(100)}>
          100
        </button>
      </li>
      <li>
        <button type="button" onClick={() => withdrawAmount(200)}>
          200
        </button>
      </li>
      <li>
        <button type="button" onClick={() => withdrawAmount(500)}>
          500
        </button>
      </li>
    </ul>
  )
}

export default DenominationItem
