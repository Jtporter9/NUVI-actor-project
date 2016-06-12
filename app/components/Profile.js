import React from 'react'
import UserProfile from './NuviData/UserProfile';
import ActorsComments from './NuviData/ActorsComments';
var helpers = require('../utils/helpers');

class Profile extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    bio: {},
    comments: ['These are fake comments, please feel free to add some to this actor.','React is fun', 'More fun than Angular'],
    likes: 0,
  }
}
componentDidMount(){
this.init(this.props.params.username);
}
componentWillReceiveProps(nextProps){
  this.init(nextProps.params.name);
}
init(name) {
  helpers.getInfo(name)
  .then(function(data) {
    this.setState({
      bio: data.bio,
      likes: data.bio.activity_likes
    })
  }.bind(this))
}
handleSubmitComment(newComment) {
  var newArray = this.state.comments.slice();
  newArray.push(newComment);
  this.setState({
    comments: newArray,
  })
}
handleAddLike() {
  this.setState({
    likes: this.state.likes + 1
  })
}
  render(){
    this.handleAddLike = this.handleAddLike.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
    return (
      <div>
        <div className="row">

          <div className="col-md-4">
            <UserProfile AddLike={this.handleAddLike} name={this.props.params.name} bio={this.state.bio} likes={this.state.likes} />
          </div>
          <div className="col-md-8">
            <ActorsComments AddComment={this.handleSubmitComment} bio={this.state.bio} comments={this.state.comments} name={this.props.params.name} />
          </div>

        </div>
      </div>
    )
  }
}

export default Profile
