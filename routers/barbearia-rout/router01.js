
  const  { Router} =  require("express");
  const routs = Router()
  const dadosCtrl = require("../../controllers/barbearia-controll/controllbarb")
  
  
  
  
  routs.get("/alunos",dadosCtrl.getAllDados);
  routs.post("/alunos",dadosCtrl.createDados );
  routs.put("/alunos/:id",dadosCtrl.updateDados);
  routs.get("/alunos/:id",dadosCtrl.getuniqueDados);
  routs.delete("/alunos/:id",dadosCtrl.deleteDados);


  module.exports = routs;