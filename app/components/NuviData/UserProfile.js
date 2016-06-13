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
      </div>
    )
  }
}

UserProfile.propTypes = {
  name: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired,
}

export default UserProfile
