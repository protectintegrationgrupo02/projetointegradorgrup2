const express = require('express');
const app = express();
const path = require('path');
const pathCode = path.join(__dirname,'views/salao');
//const viewPath = path.join(__dirname,'views/Barbearia');

const PORT = 3000;

///app.set('views', viewPath);
app.set('views', pathCode);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/telainicial/sobre', (req, res) => {
  res.render('sobre');
});

app.get('/telainicial/agenda', (req, res) => {
  res.render('agenda');
});

app.get('/telainicial/planos', (req, res) => {
  res.render('planos');

});

app.get('/telainicial/barbearia', (req, res) => {
  res.render('telainicial');
});
app.get('/telainicial/recuperasenha', (req, res) => {
  res.render('recuperasenha');

});

app.get('/telainicial/servico', (req, res) => {
  res.render('servico');

});

// region ADM

app.use('/adm', express.static(__dirname + '/System ADM BArbearia/template'))

app.get('/adm/cadastro', (req, res) => {
  res.render('cadastroadm');

});

app.get('/adm/configconta', (req, res) => {
  res.render('configconta');

});

app.get('/adm/configgeral', (req, res) => {
  res.render('configgeral');

});

app.get('/adm/lista', (req, res) => {
  res.render('lista');

});
// endregion

///ROUTS DO SALÃO DE BELEZA//////

app.get('/sobre.sa', (req, res) => {
  res.render('sobre-sa');
});

app.get('/agenda.sa', (req, res) => {
  res.render('agenda-sa');
});

app.get('/planos.sa', (req, res) => {
  res.render('planos-sa');

});

app.get('/indextelainicial/salao', (req, res) => {
  res.render('indextelainicial-sa');

});
app.get('/recuperasenha.sa', (req, res) => {
  res.render('recuperasenha-sa');

});

app.get('/servico.sa', (req, res) => {
  res.render('servico-sa');

});

// region ADM

app.use('/adm.sa', express.static(__dirname + '/System ADM Salão/template'))

app.get('/adm/cadastro.sa', (req, res) => {
  res.render('cadastroadm-sa');

});

app.get('/adm/contaconf.sa', (req, res) => {
  res.render('contaconf-sa');

});

app.get('/adm/configugeral.sa', (req, res) => {
  res.render('geralconf-sa');

});

app.get('/adm/atendlist', (req, res) => {
  res.render('atendimento-l');

});
app.listen(PORT, () => console.info(`Server running on port ${PORT}`));
