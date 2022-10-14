const express = require('express');
const app = express();
const PORT = process.env.PORT ;


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// TELA INICIAL //

app.get('/Home', (req, res) => {
  res.render('index');
});

//atualização//


app.get('/barbearia/home', (req, res) => {
  res.render('Barbearia/telainicial');
});

app.get('/telainicial/sobre', (req, res) => {
  res.render('Barbearia/sobre');
});

app.get('/telainicial/agenda', (req, res) => {
  res.render('Barbearia/agenda');
});

app.get('/telainicial/planos', (req, res) => {
  res.render('Barbearia/planos');

});

app.get('/telainicial/barbearia', (req, res) => {
  res.render('Barbearia/telainicial');
});
app.get('/telainicial/recuperasenha', (req, res) => {
  res.render('Barbearia/recuperasenha');

});

app.get('/telainicial/servico', (req, res) => {
  res.render('Barbearia/servico');

});


app.use('/adm', express.static(__dirname + '/System ADM BArbearia/template'))

app.get('/adm/cadastro', (req, res) => {
  res.render('Barbearia/cadastroadm');

});

app.get('/adm/configconta', (req, res) => {
  res.render('Barbearia/configconta');

});

app.get('/adm/configgeral', (req, res) => {
  res.render('Barbearia/configgeral');

});

app.get('/adm/lista', (req, res) => {
  res.render('Barbearia/lista');

});
// endregion

///ROUTS DO SALÃO DE BELEZA//////

app.get('/salao/home', (req, res) => {
  res.render('salao/indextelainicial-sa');
});

app.get('/sobre.sa', (req, res) => {
  res.render('salao/sobre-sa');
});

app.get('/agenda.sa', (req, res) => {
  res.render('salao/agenda-sa');
});

app.get('/planos.sa', (req, res) => {
  res.render('salao/planos-sa');

});

app.get('/indextelainicial/salao', (req, res) => {
  res.render('salao/indextelainicial-sa');

});
app.get('/recuperasenha.sa', (req, res) => {
  res.render('salao/recuperasenha-sa');

});

app.get('/servico.sa', (req, res) => {
  res.render('salao/servico-sa');

});

// region ADM

app.use('/adm.sa', express.static(__dirname + '/System ADM Salão/template'))

app.get('/adm/cadastro.sa', (req, res) => {
  res.render('salao/cadastroadm-sa');

});

app.get('/adm/contaconf.sa', (req, res) => {
  res.render('salao/contaconf-sa');

});

app.get('/adm/configugeral.sa', (req, res) => {
  res.render('salao/geralconf-sa');

});

app.get('/adm/atendlist', (req, res) => {
  res.render('salao/atendimento-l');

});
app.listen(PORT, () => console.info(`Server running on port ${PORT}`));

//jiokdndjcnkjnd//
