import React from 'react'

class ActivityInfo extends React.Component {
  render(){
    return (
      <div>
        <li className="list-group-item"><h4>Activity Info</h4></li>
        <li className="list-group-item">Provider: {this.props.bio.provider}</li>
        <li className="list-group-item">Date: {this.props.bio.activity_date}</li>
        <li className="list-group-item">Message: {this.props.activity_message}</li>
        <li className="list-group-item">Shares: {this.props.bio.activity_shares}</li>
        <li className="list-group-item">Sentiment: {this.props.bio.activity_sentiment}</li>
        <li className="list-group-item">Likes: {this.props.likes}</li>
        <li className="list-group-item">Comments: {this.props.commentsCount}</li>
        <li className="list-group-item">
          <button type="submit" onClick={this.props.AddLike} className="btn btn-block btn-primary">
            Like this actor <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          </button>
        </li>
      </div>
    )
  }
}

ActivityInfo.propTypes = {
  bio: React.PropTypes.object.isRequired,
  AddLike: React.PropTypes.func.isRequired,
  commentsCount: React.PropTypes.number.isRequired,
}

export default ActivityInfo
