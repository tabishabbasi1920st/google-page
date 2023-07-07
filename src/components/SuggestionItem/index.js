import './index.css'

const SuggestionItem = props => {
  const {eachObject, onClick} = props
  const {id, suggestion} = eachObject

  const onButtonClick = () => {
    onClick(id)
  }

  return (
    <li className="suggestion-item">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="suggestion icon"
        className="suggestion-icon"
        onClick={onButtonClick}
      />
    </li>
  )
}

export default SuggestionItem
