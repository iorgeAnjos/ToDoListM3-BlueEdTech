const tarefasServices = require('../services/lista.service');

const findAllTarefasController = (req, res) => {
  const tarefas = tarefasServices.findAllTarefasServices();
  res.send(tarefas);
};

const findByIdTarefasController = (req, res) => {
  const paramId = req.params.id;
  const escolhaTarefa = tarefasServices.findByIdTarefasServices(paramId);
  res.send(escolhaTarefa);
};

const createTarefaController = (req, res) => {
  const tarefa = req.body;
  const newTarefa = tarefasServices.createTarefaServices(tarefa);
  res.send(newTarefa);
};

const updateTarefaController = (req, res) => {
  const idParam = Number(req.params.id);
  const tarefaEdit = req.body;
  const updatedTarefa = tarefasServices.updateTarefaServices(
    idParam,
    tarefaEdit,
  );
  res.send(updatedTarefa);
};

const deleteTarefaController = (req, res) => {
  const idParam = req.params.id;
  tarefasServices.deleteTarefaServices(idParam);
  res.send({ message: 'Tarefa excluida com êxito' });
};

module.exports = {
  findAllTarefasController,
  findByIdTarefasController,
  createTarefaController,
  updateTarefaController,
  deleteTarefaController,
};
