const tarefas = require("../models/tarefasModel");

exports.listar = (req, res) => {
  res.json(tarefas);
};

exports.criar = (req, res) => {
  const novaTarefa = {
    id: Date.now(),
    titulo: req.body.titulo
  };

  tarefas.push(novaTarefa);

  res.status(201).json(novaTarefa);
};

exports.editar = (req, res) => {
  const { id } = req.params;
  const { titulo } = req.body;

  const tarefa = tarefas.find(
    t => t.id == id
  );

  if (!tarefa) {
    return res.status(404).json({
      mensagem: "Tarefa não encontrada"
    });
  }

  tarefa.titulo = titulo;

  res.json(tarefa);
};

exports.excluir = (req, res) => {
  const { id } = req.params;

  const index = tarefas.findIndex(
    t => t.id == id
  );

  if (index === -1) {
    return res.status(404).json({
      mensagem: "Tarefa não encontrada"
    });
  }

  tarefas.splice(index, 1);

  res.json({
    mensagem: "Tarefa excluída"
  });
};