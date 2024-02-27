// eslint-disable-next-line import/extensions
import AppController from '../controllers/Appcontroller';
import StudentsController from '../controllers/StudentsController';

const linkRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default linkRoutes;
module.exports = linkRoutes;
