/**
 * Contains the miscellaneous route handlers.
 * @author Chiemeka Ifemegbulem <https://github.com/chiemekaifemegbulem>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
