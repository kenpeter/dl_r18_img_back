var ImageDAO = require('../common/db/models/image');
var imageDAO = new ImageDAO();

var Home = {
  index: function(req, res){
    imageDAO.list().then((data) => {
      //res.json({ list: data });
      console.log(data);
    });

  }
}
module.exports = Home;
