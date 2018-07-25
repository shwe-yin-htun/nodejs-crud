//this is route file

const postcontroller = require('./../controllers/Postcontroller')

module.exports = (router) => {
    router.route('/post')
          .get(postcontroller.getAllPost)
          
    router.route('/post/:id')
          .get(postcontroller.getPost)
    
    router.route('/post')
          .post(postcontroller.addPost)
}