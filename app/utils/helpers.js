import axios from 'axios'

function getActorInfo(name) {
  return axios.get('https://nuvi-challenge.herokuapp.com/activities/' + name)
    // .then(function(response){
    //   // console.log(response.data);
    //   // console.log(response.status);
    // });
}

var helpers = {
  getInfo: function(name) {
    return axios.all([getActorInfo(name), getActorInfo(name)])
    .then(function(arr) {
      return {
        bio: arr[0].data,
        comments: arr[1].data,
      }
    });
  }
};

module.exports = helpers;
