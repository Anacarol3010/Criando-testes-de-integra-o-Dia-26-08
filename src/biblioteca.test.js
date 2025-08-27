const bibliotecaService = require('./biblioteca.service')

test('verificar se o nome do livro é obrigatorio', function() {

const resultado = bibliotecaService.criarLivro("", 'Kaique', 2015, 'ficcao')

expect(resultado).toBe("Erro: Nome é obrigatório!")

} ) 

test('verificar se o autor do livro é obrigatorio', function() {

const resultado = bibliotecaService.criarLivro("nome", '', 2015, 'ficcao')

expect(resultado).toBe("Erro: Autor é obrigatório!")

} ) 

test('deve retornar erro se o ano de publicação não for informado', function () {
  const resultado = bibliotecaService.criarLivro("nome", "Kaique", "", "ficcao");

  expect(resultado).toBe("Erro: Ano de publicação é obrigatório!");
});


test('verificar se o ano de publicação está vazio', function() {
  const resultado = bibliotecaService.criarLivro("nome", "Kaique", "", "ficcao");

  expect(resultado).toBe("Erro: Ano de publicação é obrigatório!");
  
});