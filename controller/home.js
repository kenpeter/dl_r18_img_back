

var Home = {
  index: function(req, res){
    let data = {
      'msg': 'msg!'
    };
    res.json(data);
  }
}
module.exports = Home;
