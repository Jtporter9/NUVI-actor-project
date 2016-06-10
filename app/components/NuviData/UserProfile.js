import React from 'react'

class UserProfile extends React.Component {
  render(){
    // console.log('BIO', this.props.bio);
    return (
      <div>
        <li className="list-group-item"><h4>{this.props.bio.actor_name}</h4></li>
        <li className="list-group-item"><img src={this.props.bio.actor_avator} className="img-rounded img-responsive"/></li>
        <li className="list-group-item">Username: {this.props.bio.actor_username}</li>
        <li className="list-group-item">Description: {this.props.bio.actor_description}</li>
        <li className="list-group-item">Likes: {this.props.likes}</li>
        <li className="list-group-item">Comments: {this.props.bio.activity_comments}</li>
        <li className="list-group-item">
          <button type="submit" onClick={this.props.AddLike} className="btn btn-block btn-primary">
            Like this actor <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          </button>
        </li>
      </div>
    )
  }
}

UserProfile.propTypes = {
  name: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired,
  AddLike: React.PropTypes.func.isRequired,
}

export default UserProfile
