import React from 'react'

const Description = () => {

    return (
      <div className="gradient-container">
        <div className="description-item">
              <i className="material-icons md-48">lightbulb_outline</i>
              <h3>Search for Recipes</h3>
              <p>What's on hand?</p>
        </div>
        <div className="description-item">
          <i className="material-icons md-48">alarm</i>
          <h3>Save Recipes</h3>
          <p>Love it? Save it for later!</p>
        </div>
        <div className="description-item">
          <i className="material-icons md-48">thumb_up</i>
          <h3>Facebook Login</h3>
          <p>Hopefully you can do this!</p>
        </div>
      </div>
    )
}

export default Description;
