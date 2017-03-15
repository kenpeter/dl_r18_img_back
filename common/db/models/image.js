var mongoosePaginate = require('mongoose-paginate');

// mongodb, which is the mongoose instance
var mongodb = require('../connect');

// https://stackoverflow.com/questions/20832126/missingschemaerror-schema-hasnt-been-registered-for-model-user
require('./category');

// mongoose schema, used as new Schema
var Schema = mongodb.mongoose.Schema;

// var promise
// requre
// es6 promise, other promise lib
var Promise = require('es6-promise').Promise;

var ImageSchema = new Schema({
  fileName : String,
  filePath : String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now }
});

//
ImageSchema.plugin(mongoosePaginate);

// constructor
var ImageDAO = function(){};
var Image = mongodb.mongoose.model('Image', ImageSchema);

// empty func, prototype
ImageDAO.prototype =  {
  constructor: ImageDAO,

  save: function(obj){
    // return new promise
    // func
    // resolve, reject
    return new Promise(function(resolve, reject){
      // var instace
      // new Aritcle, obj
      // obj from above
      var instance = new Image(obj);
      // instance
      // .save
      // func, err
      instance.save(function(err){
        // err
        if(err) return reject(err);
        // resolve
        resolve();
      });
    });
  }, // end save

  list: function(page = 1, limit = 100){
    return new Promise(function(resolve, reject){
      let options = {
        page: parseInt(page),
        limit: parseInt(limit),
        sort:{
          createdDate: -1 //Sort by Date Added DESC
        }
      };

      Image
        .paginate({}, options)
        .then(function(res) {
          resolve && resolve(res);
        });

      /*
      Image
        .find({})
        .exec()
        .then(function(res) {
          resolve && resolve(res);
        });
      */  
    });
  },

  delete: function(query) {
    // return new promise
    // func, resolve, reject
    return new Promise(function(resolve, reject){
      // article
      // .remove
      // query, what is query
      // func, err, data
      Image.remove(query, function(err, data){
        // if err, return, reject, err
        if(err) return reject(err)
        // resolve data
        resolve(data);
      });
    });
  },
};

// module
// .exports
// article dao
module.exports = ImageDAO;
