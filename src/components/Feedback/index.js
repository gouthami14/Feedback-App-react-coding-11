// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {changeFeedback: true}

  showResults = () => {
    this.setState({
      changeFeedback: false,
    })
  }

  render() {
    const {changeFeedback} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="app-container">
        {changeFeedback ? (
          <div className="card-container">
            <h1 className="emojis-heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="list-container">
              {emojis.map(eachItem => (
                <li key={eachItem.id} className="list-card">
                  <button
                    className="button"
                    type="button"
                    onClick={this.showResults}
                  >
                    <img
                      src={eachItem.imageUrl}
                      alt={eachItem.name}
                      className="img-card"
                    />
                    <span className="name-card">{eachItem.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="card-container">
            <img src={loveEmojiUrl} className="img-card" alt="love emoji" />
            <h1 className="head-card">Thank you!</h1>
            <p className="text-card">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
