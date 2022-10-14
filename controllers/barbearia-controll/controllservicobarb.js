const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();





const getAllServ = async (req, res) => {
    const alunos = await prisma.servicos.findMany({
      include: { disciplinas: false },
    });
    res.send(alunos);
  }

const createServ = async (req, res) => {
    try {
      const data = req.body;
    //  data.disciplinas = { create: [req.body.disciplinas] };
      const insert = await prisma.servicos.create({ data });
      res.send(insert);
    } catch (err) {
      console.log(err);
    }
  }


 const updateServ = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const data = req.body;
      
     // data.disciplinas = {   
      //    update: [
      //         {
     //             data: req.body.disciplinas,
    //              where:{
   //                   id: req.body.disciplinas.id
   //               } 
    //          }
//]
  //    };
      const result = await prisma.servicos.update({ where: { id }, data });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

 const getuniqueServ = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.servicos.findUnique({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

const deleteServ = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.servicos.delete({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

  module.exports = {
    getAllServ,
    createServ,
    updateServ,
    getuniqueServ,
    deleteServ
  };