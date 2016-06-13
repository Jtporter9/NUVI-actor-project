import React from 'react'
import { VictoryPie, VictoryGroup, VictoryBar, VictoryAnimation } from "victory";


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
    const chartData = {
      likes: this.props.bio.activity_likes + 1,
      comments: this.props.bio.activity_comments + 1,
      shares: this.props.bio.activity_shares + 1,
    };
    return (
      <div>
        <h4>Bar Chart for Activity</h4>
        <div className="list-group-item">
          <VictoryGroup
            height={200}
            width={300}
            offset={20}
            >
            <VictoryBar
              colorScale={"qualitative"}
              data={[
                {x: 1, y: chartData.likes},
                {x: 2, y: chartData.comments},
                {x: 3, y: chartData.shares},
              ]}
            />
          </VictoryGroup>
          <div style={{textAlign:"center",position:"relative",bottom:"25px"}}>
            <div className="col-md-4">Likes</div>
            <div className="col-md-4">Comments</div>
            <div className="col-md-4">Shares</div>
          </div>

        </div>
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
