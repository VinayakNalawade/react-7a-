import './index.css'

const DenominationItem = props => {
  const {object, onWithdraw} = props

  const withdraw = () => {
    onWithdraw(object)
  }

  return (
    <li className="li">
      <button type="button" className="button" onClick={withdraw}>
        {object.value}
      </button>
    </li>
  )
}

export default DenominationItem
