import React from 'react'

class ActorsComments extends React.Component {
  handleSubmit(){
    const newComment = this.commentRef.value;
    this.commentRef.value = '';
    this.props.AddComment(newComment);
  }
  setRef(ref){
    this.commentRef = ref;
  }
  render(){
    var comments = this.props.comments.map(function(comment, index) {
      return   <li className="list-group-item" key={index}>
        <p>{comment}</p></li>
    })
    return (
      <div>
        <div className="list-group-item"><h4>Comment on activity made by: <br/> {this.props.bio.actor_name}</h4></div>
          <ul className="list-group">
            <li className="list-group-item">Please feel free to add some comments to this actor's activity.</li>
              {comments}
              <div className="list-group-item">
                <big>Add a new comment below:</big>
                <form action="">
                  <input type="text" className="form-control btn-block" placeholder="type comment here.." ref={(ref) => this.setRef(ref)}/>
                  <button type="submit" className="btn btn-block btn-primary" onClick={this.handleSubmit.bind(this)}>Send</button>
                </form>
              </div>
          </ul>
      </div>
    )
  }
}

ActorsComments.propTypes = {
  name: React.PropTypes.string.isRequired,
  comments: React.PropTypes.array.isRequired,
  AddComment: React.PropTypes.func.isRequired
}

export default ActorsComments
