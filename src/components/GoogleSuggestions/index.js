import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  searchFilteredResult = event => {
    console.log(event.target.value)
  }

  buttonOnClick = buttonId => {
    console.log(`button id ${buttonId}`)
  }

  render() {
    const {suggestionsList} = this.props

    return (
      <div className="main-bg-container">
        <div className="content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="lens-and-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              onChange={this.searchFilteredResult}
            />
          </div>
          <ul className="suggestion-container">
            {suggestionsList.map(eachObject => (
              <SuggestionItem
                eachObject={eachObject}
                onClick={this.buttonOnClick}
                key={eachObject.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
