import React from 'react'

class ActorsComments extends React.Component {
  render(){
    var comments = this.props.comments.map(function(comment, index) {
      return   <li className="list-group-item" key={index}>
        <p>{comment}</p>
              </li>
    })
    return (
      <div>
        <div className="list-group-item"><h4>Comments made to {this.props.bio.actor_name}</h4></div>
          <ul className="list-group">
              {comments}
              <div className="list-group-item">
                <big>Add a new comment below:</big>
                <input type="text" className="form-control btn-block" placeholder="type comment here.."/>
                <button type="submit" className="btn btn-block btn-primary">Send</button>
              </div>
          </ul>
      </div>
    )
  }
}

ActorsComments.propTypes = {
  name: React.PropTypes.string.isRequired,
  comments: React.PropTypes.array.isRequired
}

export default ActorsComments
