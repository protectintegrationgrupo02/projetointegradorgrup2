const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();





const getAllPreco = async (req, res) => {
    const alunos = await prisma.precos.findMany({
      include: { disciplinas: false },
    });
    res.send(alunos);
  }

const createPreco = async (req, res) => {
    try {
      const data = req.body;
    //  data.disciplinas = { create: [req.body.disciplinas] };
      const insert = await prisma.precos.create({ data });
      res.send(insert);
    } catch (err) {
      console.log(err);
    }
  }


 const updatePreco = async (req, res) => {
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
      const result = await prisma.precos.update({ where: { id }, data });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

 const getuniquePreco = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.precos.findUnique({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

const deletePreco = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.precos.delete({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }
  module.exports = {
    getAllPreco,
    createPreco,
    updatePreco,
    getuniquePreco,
    deletePreco
  };