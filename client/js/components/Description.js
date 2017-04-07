import React from 'react'

const Description = () => {

    return (
      <div className="description-container">
        <div className="description-item">
              <i className="material-icons md-48">search</i>
              <h3 className="description-title">Search for Recipes</h3>
              <p>What's in yo fridge?</p>
        </div>
        <div className="description-item">
          <i className="material-icons md-48">save</i>
          <h3 className="description-title">Save Recipes</h3>
          <p>Love it? Save it for later!</p>
        </div>
        <div className="description-item">
          <i className="material-icons md-48">star</i>
          <h3 className="description-title">Rate Recipes</h3>
          <p>Rate your saved recipes!</p>
        </div>
      </div>
    )
}

export default Description;
