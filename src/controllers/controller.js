const services = require('../services/services');

const allTarefasController = (req, res) => {
  const all = services.allTarefas();
  res.send(all);
};

const findByIdTarefasController = (req, res) => {
  const tarefaId = req.params.id;
  const chosenTarefa = services.findByIdTarefas(tarefaId);
  res.send(chosenTarefa);
};

const createNewTarefaController = (req, res) => {
  const tarefa = req.body;
  const newTarefa = services.createNewTarefa(tarefa);
  res.send(newTarefa);
};

const updateTarefaController = (req, res) => {
  const tarefaId = req.params.id;
  const editTarefa = req.body;
  const updatedTarefa = services.updateTarefa(tarefaId, editTarefa);
  res.send(updatedTarefa);
};

const deleteTarefasController = (req, res) => {
  const tarefaId = req.params.id;
  services.deleteTarefas(tarefaId);
  res.send({ message: 'Tarefa concluida' });
};

module.exports = {
  allTarefasController,
  findByIdTarefasController,
  createNewTarefaController,
  updateTarefaController,
  deleteTarefasController,
};
