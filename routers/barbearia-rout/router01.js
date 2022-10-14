
  const  { Router} =  require("express");
  const routs = Router()
  const userCtrl = require("../../controllers/barbearia-controll/controlluserbarb")
  const agendamentoCtrl = require("../../controllers/barbearia-controll/controllagendbarb")
  const admCtrl = require("../../controllers/barbearia-controll/controlladmsbarb")
  const servicoCtrl = require("../../controllers/barbearia-controll/controllservicobarb")
  const planoCtrl = require("../../controllers/barbearia-controll/controllplanosbarb")
  const precoCtrl = require("../../controllers/barbearia-controll/controllprecosbarb")
  const funcionCtrl = require("../../controllers/barbearia-controll/controllfunciobarb")
  
  
  
  
  routs.get("/usuarios",userCtrl.getAllUser);
  routs.post("/usuarios",userCtrl.createUser );
  routs.put("/usuarios/:id",userCtrl.updateUser);
  routs.get("/usuarios/:id",userCtrl.getuniqueUser);
  routs.delete("/usuarios/:id",userCtrl.deleteUser);

  routs.get("/agendamentos",agendamentoCtrl.getAllAgend);
  routs.post("/agendamentos",agendamentoCtrl.createAgend );
  routs.put("/agendamentos/:id",agendamentoCtrl.updateAgend);
  routs.get("/agendamentos/:id",agendamentoCtrl.getuniqueAgend);
  routs.delete("/agendamentos/:id",agendamentoCtrl.deleteAgend);

  routs.get("/adms",admCtrl.getAllAdm);
  routs.post("/adms",admCtrl.createAdm );
  routs.put("/adms/:id",admCtrl.updateAdm);
  routs.get("/adms/:id",admCtrl.getuniqueAdm);
  routs.delete("/adms/:id",admCtrl.deleteAdm);

  routs.get("/servicos",servicoCtrl.getAllServ);
  routs.post("/servicos",servicoCtrl.createServ );
  routs.put("/servicos/:id",servicoCtrl.updateServ);
  routs.get("/servicos/:id",servicoCtrl.getuniqueServ);
  routs.delete("/servicos/:id",servicoCtrl.deleteServ);

  routs.get("/planos",planoCtrl.getAllPlano);
  routs.post("/planos",planoCtrl.createPlano );
  routs.put("/planos/:id",planoCtrl.updatePlano);
  routs.get("/planos/:id",planoCtrl.getuniquePlano);
  routs.delete("/planos/:id",planoCtrl.deletePlano);

  routs.get("/precos",precoCtrl.getAllPreco);
  routs.post("/precos",precoCtrl.createPreco );
  routs.put("/precos/:id",precoCtrl.updatePreco);
  routs.get("/precos/:id",precoCtrl.getuniquePreco);
  routs.delete("/precos/:id",precoCtrl.deletePreco);

  routs.get("/funcionarios",funcionCtrl.getAllFuncion);
  routs.post("/funcionarios",funcionCtrl.createFuncion );
  routs.put("/funcionarios/:id",funcionCtrl.updateFuncion);
  routs.get("/funcionarios/:id",funcionCtrl.getuniqueFuncion);
  routs.delete("/funcionarios/:id",funcionCtrl.deleteFuncion);


  module.exports = routs;