//this is route file

const usercontroller = require('./../controllers/UserController')

module.exports = (router) => {
    router.route('/user')
          .get(usercontroller.getAllUser)
          
    router.route('/user/:id')
          .get(usercontroller.getUser)
    
    router.route('/user')
          .post(usercontroller.addUser)
}