import React from 'react';
import Router from 'react-router';

class SearchBar extends React.Component {
  // mixins: [Router.History]
  getRef(ref){
    this.nameRef = ref;
  }
  handleSubmit(){
    const name = this.nameRef.value;
    this.nameRef.value = '';
    this.props.history.push("/profile/" + name)
  }
  render(){
    return (
      <div className="col-sm-12">
        <form onSubmit={() => this.handleSubmit()}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={(ref) => this.getRef(ref)} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search For Actor</button>
          </div>
        </form>
      </div>
    )
  }
}

SearchBar.PropTypes = {
  history: React.PropTypes.object.isRequired
}

export default SearchBar;
