import React from 'react'
import UserProfile from './NuviData/UserProfile';
import ActorsComments from './NuviData/ActorsComments';
// import getActorInfo from '../utils/helpers';
var helpers = require('../utils/helpers');

class Profile extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    bio: {},
    comments: ['React is fun', 'More fun than Angular'],
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
  this.setState({
    comments: comments.push(newComment), //most likely not right :)
  })
}
handleAddLike() {
  this.setState({
    likes: this.state.likes + 1
  })
}
  render(){
    this.handleAddLike = this.handleAddLike.bind(this);
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
