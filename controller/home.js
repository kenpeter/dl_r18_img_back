var ImageDAO = require('../common/db/models/image');
var imageDAO = new ImageDAO();

var Home = {
  index: function(req, res){
    //console.log(req.query);
    let page = req.query.page;
    let limit = req.query.limit;

    imageDAO.list(page, limit).then((data) => {
      let myData = {
        current_page: parseInt(page),
        last_page: 100,
        next_page_url: 'http://dl_r18_img_back.local/?' + 'page=' + page + '&' + 'limit=' + limit,
        "prev_page_url": 'http://dl_r18_img_back.local/?' + 'page=' + (page-1) + '&' + 'limit=' + limit,
        "data": data,
      };
      res.json({ nested: myData });
      //console.log(data);
    });

  }
}
module.exports = Home;
