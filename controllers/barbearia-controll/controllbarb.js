
 const getAllDados = async (req, res) => {
    const alunos = await prisma.alunos.findMany({
      include: { disciplinas: true },
    });
    res.send(alunos);
  }

const createDados = async (req, res) => {
    try {
      const data = req.body;
      data.disciplinas = { create: [req.body.disciplinas] };
      const insert = await prisma.alunos.create({ data });
      res.send(insert);
    } catch (err) {
      console.log(err);
    }
  }


 const updateDados = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const data = req.body;
      
      data.disciplinas = {   
          update: [
               {
                  data: req.body.disciplinas,
                  where:{
                      id: req.body.disciplinas.id
                  } 
              }
          ]
      };
      
      
      const result = await prisma.alunos.update({ where: { id }, data });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

 const getuniqueDados = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.alunos.findUnique({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

const deleteDados = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.alunos.delete({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }