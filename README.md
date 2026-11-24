# Reciclagem na Escola

Página única de tema livre, feita em HTML, CSS e JavaScript puros (sem bibliotecas).
O tema é a reciclagem de garrafas PET na escola, com uma calculadora que mostra
quantas garrafas e quantos quilos de plástico uma turma recicla.

- **Autor:** Théo Lorentz Padilha
- **Curso:** SENAI — turma T TDSEM25M1/M3
- **Unidade curricular:** Programação de Aplicativos
- **Docente:** Ewerton de Oliveira Cercal
- **Repositório:** https://github.com/theopadilha2009-hash/pagina-tema-livre

## O que a página tem

- Cabeçalho com menu de navegação (links para as seções da própria página).
- Seção de texto com foto: por que reciclar.
- Seção com lista: como separar o lixo por cor da lixeira, com foto.
- Seção com a calculadora (formulário).
- Rodapé com os créditos das fotos.
- Layout responsivo: no celular o menu fica em coluna e os espaços diminuem.

## Como a calculadora funciona

Campos (todos numéricos):

| Campo | Valores aceitos |
|-------|-----------------|
| Quantos alunos participam? | inteiro de 1 a 1000 |
| Garrafas por aluno por semana | inteiro de 1 a 50 |
| Por quantas semanas? | inteiro de 1 a 52 |

Regras de validação (em `js/script.js`):

1. Campo vazio ou só com espaços é recusado ("Preencha o campo ...").
2. O valor é convertido com `Number()`; se não for número, é recusado.
3. Número decimal é recusado (precisa ser inteiro).
4. Número fora do intervalo acima é recusado.
5. A mensagem de erro aparece na própria página, abaixo do formulário, e o resultado
   antigo é apagado. Depois de um erro, o formulário continua funcionando.
6. A leitura dos campos fica dentro de `try/catch`.

Cálculo, quando tudo é válido:

```
total de garrafas = alunos × garrafas por aluno × semanas
quilos de plástico = total de garrafas × 0,025 kg
```

Exemplo: 30 alunos, 2 garrafas e 4 semanas dão 240 garrafas, cerca de 6 kg.

## Estrutura do repositório

```
index.html        página (HTML semântico)
css/style.css     estilos e layout responsivo (comentado)
js/script.js      validação e cálculo do formulário (comentado)
img/              fotos usadas na página
docs/             evidências: prints e testes
README.md         este arquivo
```

## Como abrir

Baixe ou clone o repositório e abra o arquivo `index.html` no navegador.
Não precisa instalar nada.

## Evidências e testes

Os prints (computador, celular, formulário recusando e aceitando) e a tabela com
os 10 testes do formulário estão em [`docs/evidencias.md`](docs/evidencias.md).

## Origem das imagens

As duas fotos vêm do Wikimedia Commons, com licença livre, e os créditos também
aparecem no rodapé da página.

| Arquivo | Título | Autor | Licença | Link |
|---------|--------|-------|---------|------|
| `img/garrafas-pet.jpg` | Plastic bottles for recycling | Radulf del Maresme | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Plastic_bottles_for_recycling.jpg |
| `img/lixeiras.jpg` | Sorted waste containers close-up | E961 | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Sorted_waste_containers_close-up.jpg |

As fotos foram redimensionadas para 960 px de largura.

## Material usado

O código segue o que foi visto nos slides da aula (HTML, CSS e JavaScript).
Não foi usada nenhuma biblioteca ou framework.
