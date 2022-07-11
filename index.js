const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/sobre', (req, res) => {
  res.render('sobre');
});

app.get('/agenda', (req, res) => {
  res.render('agenda');
});

app.get('/planos', (req, res) => {
  res.render('planos');

});

app.get('/indextelainicial', (req, res) => {
  res.render('indextelainicial');

});

app.get('/servico', (req, res) => {
  res.render('servico');

});

// region ADM

app.use('/adm', express.static(__dirname + '/System ADM BArbearia/template'))

app.get('/adm/cadastro', (req, res) => {
  res.render('admhtml/cadastroadm');

});

app.get('/adm/configconta', (req, res) => {
  res.render('admhtml/configconta');

});

app.get('/adm/configgeral', (req, res) => {
  res.render('admhtml/configgeral');

});

app.get('/adm/lista', (req, res) => {
  res.render('admhtml/lista');

});
// endregion

app.listen(PORT, () => console.info(`Server running on port ${PORT}`));
