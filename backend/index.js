const express = require('express');

const app = express();

app.post('/',(request, response) => {
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Francyglaucio D. Ribeiro'
  });
})
app.listen(3333);
