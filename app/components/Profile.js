import React from 'react'
import UserProfile from './NuviData/UserProfile';
import ActorsComments from './NuviData/ActorsComments';
import ActivityInfo from './NuviData/ActivityInfo'
const helpers = require('../utils/helpers');

class Profile extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    bio: {},
    comments: [],
    likes: 0,
    commentsCount: 0,
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
      likes: data.bio.activity_likes,
      commentsCount: data.bio.activity_comments,
    })
  }.bind(this))
}
handleSubmitComment(newComment) {
  var newArray = this.state.comments.slice();
  newArray.push(newComment);
  this.setState({
    comments: newArray,
    // commentsCount: this.state.commentsCount + 1
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
            <UserProfile
              name={this.props.params.name}
              bio={this.state.bio} />
          </div>

          <div className="col-md-4">
            <ActivityInfo
               commentsCount={this.state.commentsCount}
                AddLike={this.handleAddLike}
                likes={this.state.likes}
                bio={this.state.bio} />
          </div>

          <div className="col-md-4">
            <ActorsComments
              AddComment={this.handleSubmitComment}
              bio={this.state.bio}
              comments={this.state.comments}
              name={this.props.params.name}
              likes={this.state.likes} />
          </div>

        </div>
      </div>
    )
  }
}

export default Profile
