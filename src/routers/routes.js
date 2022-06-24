const route = require('express').Router;
const controllers = require('../controllers/controller');

route.get('/todas-tarefas', controllers.allTarefasController);
route.get('/tarefas/:id', controllers.findByIdTarefasController);
route.post('/create', controllers.createNewTarefaController);
route.put('/update/:id', controllers.updateTarefaController);
route.delete('/delete/:id', controllers.deleteTarefasController);

module.exports = route;
