const bibliotecaService = require('./biblioteca.service')

test('verificar se o nome do livro é obrigatorio', function() {

const resultado = bibliotecaService.criarLivro("", 'Kaique', 2015, 'ficcao')

expect(resultado).toBe("Erro: Nome é obrigatório!")

} ) 

test('verificar se o autor do livro é obrigatorio', function() {

const resultado = bibliotecaService.criarLivro("nome", 'Kaique', 2015, 'ficcao')

expect(resultado).toBe("Erro: Autor é obrigatório!")

} ) 

test('deve retornar erro se o ano de publicação não for informado', function () {
  const resultado = bibliotecaService.criarLivro("nome", "Kaique", "", "ficcao");

  expect(resultado).toBe("Erro: Ano de publicação é obrigatório!");
});


test('verificar se o ano de publicação está vazio', function() {
  const resultado = bibliotecaService.criarLivro("nome", "Kaique", "2015", "ficcao");

  expect(resultado).toBe("Erro: Ano de publicação é obrigatório!");
  
});


test('deve retornar erro se o título não for informado', function() {
  const resultado = bibliotecaService.buscarLivroPorNome("nome", "Kaique", "2015", "");

  expect(resultado).toBe("Erro: Título é obrigatório para busca");
});

  
test('deve retornar erro se o título não for informado na busca', function () {
  const resultado = bibliotecaService.buscarLivroPorNome("", "Kaique", "2015", "ficcao");

  expect(resultado).toBe("Erro: Título é obrigatório para busca");
});

test('deve retornar erro se o título estiver vazio na busca', function () {
  const resultado = bibliotecaService.buscarLivroPorNome("", "Kaique", "2015", "");

  expect(resultado).toBe("Erro: Título é obrigatório para busca");
});


test('verificar se a busca por categoria retorna com sucesso', function () {

  const resultado = bibliotecaService.buscarLivroPorCategoria("");

  expect(resultado).toBe("Erro: Categoria é obrigatória para busca");
});

