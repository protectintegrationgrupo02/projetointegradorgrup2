const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();





const getAllAdm = async (req, res) => {
    const alunos = await prisma.adms.findMany({
      include: { disciplinas: false },
    });
    res.send(alunos);
  }

const createAdm = async (req, res) => {
    try {
      const data = req.body;
    //  data.disciplinas = { create: [req.body.disciplinas] };
      const insert = await prisma.adms.create({ data });
      res.send(insert);
    } catch (err) {
      console.log(err);
    }
  }


 const updateAdm = async (req, res) => {
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
      const result = await prisma.adms.update({ where: { id }, data });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

 const getuniqueAdm = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.adms.findUnique({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

const deleteAdm = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.adms.delete({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }
  
  module.exports = {
    getAllAdm,
    createAdm,
    updateAdm,
    getuniqueAdm,
    deleteAdm
  };