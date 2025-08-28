const bibliotecaService = require('./biblioteca.service')

// verificando se criarLivro aceita valor vazio
test('verificar se o nome do livro é obrigatorio', function() {
  const resultado = bibliotecaService.criarLivro("", 'Kaique', 2015, 'ficcao')
  expect(resultado).toBe("Erro: Nome é obrigatório!")
});
test('verificar se o autor do autor é obrigatorio', function() {
  const resultado = bibliotecaService.criarLivro("nome", '', 2015, 'ficcao')
  expect(resultado).toBe("Erro: Autor é obrigatório!")
});
test('verificar se o ano de publicacao do autor é obrigatorio', function () {
  const resultado = bibliotecaService.criarLivro("nome", "Kaique", "", "ficcao");
  expect(resultado).toBe("Erro: Ano de publicação é obrigatório!");
});

// verifica se funcoes de busca por nome e categoria dao msg de erro quando vazias
test('deve retornar erro se o título não for informado', function() {
  bibliotecaService.criarLivro("nome", "Kaique", 2020, "ficcao");
  const resultadoNome = bibliotecaService.buscarLivroPorNome("");
  expect(resultadoNome).toBe("Erro: Título é obrigatório para busca");
  const resultadoCategoria = bibliotecaService.buscarLivroPorCategoria("");
  expect(resultadoCategoria).toBe("Erro: Categoria é obrigatória para busca");
});
// verifica se funcoes de busca por nome e categoria estao mesmo buscando
test('verificando se sistema de busca funciona', function() {
  bibliotecaService.criarLivro("nome", "Kaique", 2020, "ficcao");
  const resultadoNome = bibliotecaService.buscarLivroPorNome("nome");
  expect(resultadoNome.nome).toBe("nome");
  const resultadoCategoria = bibliotecaService.buscarLivroPorCategoria("ficcao");
  expect(resultadoCategoria.categoria).toBe("ficcao");
});