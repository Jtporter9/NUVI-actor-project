import React from 'react'

class ActivityInfo extends React.Component {
  render(){
    return (
      <div>
        <li className="list-group-item">
          <h4>Activity Info</h4>
            <i class="fa fa-long-arrow-down" aria-hidden="true"></i>
            (scroll down for more data)
        </li>
        <li className="list-group-item">Provider: {this.props.bio.provider}</li>
        <li className="list-group-item">Date: {this.props.bio.activity_date}</li>
        <li className="list-group-item">Message: {this.props.bio.activity_message}</li>
        <li className="list-group-item">Shares: {this.props.bio.activity_shares}</li>
        <li className="list-group-item">Likes: {this.props.likes}
          <button type="submit" onClick={this.props.AddLike} className="btn btn-block btn-primary">
            Like this actor <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          </button>
        </li>
        <li className="list-group-item">Comments: {this.props.commentsCount}</li>
        <li className="list-group-item">Sentiment: {this.props.bio.activity_sentiment}</li>
        <li className="list-group-item">
          Image with message: (if avaliable)
            <img className="img-rounded img-responsive" style={{border:"1px solid black",}} src={this.props.bio.activity_message} alt=""/>
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
