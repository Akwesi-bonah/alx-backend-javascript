class AppController {
  static getHomepage(request, response) {
    response.status(200);
    response.send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
