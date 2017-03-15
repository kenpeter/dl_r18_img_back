var ImageDAO = require('../common/db/models/image');
var imageDAO = new ImageDAO();

var Home = {
  index: function(req, res){
    //console.log(req.query);
    let page = req.query.page;
    let limit = req.query.limit;

    imageDAO.list(page, limit).then((data) => {
      res.json({ list: data.docs });
      //console.log(data);
    });

  }
}
module.exports = Home;
