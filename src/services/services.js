//array das tarefas
tarefas = [
  {
    id: 1,
    nome: 'tarefa demonstrativa',
  },
];

//variavel que mostra todas as tarefas
const allTarefas = () => {
  return tarefas;
};

//variavel que mostra uma tarefa especifica
const findByIdTarefas = (id) => {
  return tarefas.find((tarefa) => (tarefa.id = id));
};

//variavel que cria as tarefas
const createNewTarefa = (newTarefa) => {
  const newId = tarefas.lenght + 1;
  newTarefa.id = newId;
  tarefas.push(newTarefa);
  return newTarefa;
};

//variavel que edita as tarefas
const updateTarefa = (id, tarefaEditada) => {
  tarefaEditada[id] = id;
  const tarefaIndex = tarefas.findIndex((tarefa) => (tarefa.id = id));
  tarefas[tarefaIndex] = tarefaEditada;
  return tarefaEditada;
};

//variavel que deleta as tarefas
const deleteTarefas = (id) => {
  const tarefaDelete = tarefas.findIndex((tarefa) => (tarefa.id = id));
  return tarefas.splice(tarefaDelete, 1);
};

//exportação de dados
module.exports = {
  allTarefas,
  findByIdTarefas,
  createNewTarefa,
  updateTarefa,
  deleteTarefas,
};
