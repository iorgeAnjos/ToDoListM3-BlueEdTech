listas = [
  {
    id: 1,
    tarefa: 'tarefa demonstrativa 1',
  },
  {
    id: 2,
    tarefa: 'tarefa demonstrativa 2',
  },
];

const findAllTarefasServices = () => {
  return listas;
};

const findByIdTarefasServices = (Id) => {
  return listas.find((tarefa) => tarefa.id == Id);
};

const createTarefaServices = (newTarefa) => {
  const newId = listas.length + 1;
  newTarefa.id = newId;
  listas.push(newTarefa);
  return newTarefa;
};

const updateTarefaServices = (id, tarefaEdited) => {
  tarefaEdited['id'] = id;
  const tarefaIndex = listas.findIndex((tarefa) => tarefa.id == id);
  listas[tarefaIndex] = tarefaEdited;
  return tarefaEdited;
};

const deleteTarefaServices = (id) => {
  const tarefaIndex = listas.findIndex((tarefa) => tarefa.id == id);
  return listas.splice(tarefaIndex, 1);
};

module.exports = {
  findAllTarefasServices,
  findByIdTarefasServices,
  createTarefaServices,
  updateTarefaServices,
  deleteTarefaServices,
};
