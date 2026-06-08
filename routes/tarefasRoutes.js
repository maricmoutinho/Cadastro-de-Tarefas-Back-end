const express = require("express");

const router = express.Router();

const tarefasController = require(
  "../controllers/tarefasController"
);

router.get(
  "/",
  tarefasController.listar
);

router.post(
  "/",
  tarefasController.criar
);

router.put(
  "/:id",
  tarefasController.editar
);

router.delete(
  "/:id",
  tarefasController.excluir
);

module.exports = router;