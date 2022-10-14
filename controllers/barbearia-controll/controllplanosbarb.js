const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();





const getAllPlano = async (req, res) => {
    const alunos = await prisma.planos.findMany({
      include: { disciplinas: false },
    });
    res.send(alunos);
  }

const createPlano = async (req, res) => {
    try {
      const data = req.body;
    //  data.disciplinas = { create: [req.body.disciplinas] };
      const insert = await prisma.planos.create({ data });
      res.send(insert);
    } catch (err) {
      console.log(err);
    }
  }


 const updatePlano = async (req, res) => {
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
      const result = await prisma.planos.update({ where: { id }, data });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

 const getuniquePlano = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.planos.findUnique({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

const deletePlano = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.planos.delete({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

  module.exports = {
    getAllPlano,
    createPlano,
    updatePlano,
    getuniquePlano,
    deletePlano
  };