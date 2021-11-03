<h1 align="center"> New Devs C&A </h1>

<h2> Descrição do projeto💻 </h2>

<p>Pensando em trazer uma vivência mais próxima da realidade do dia a dia do programador, construímos um gerenciador de estoques para uma loja de roupas. A aplicação possui funcionalidades para visualização da quantidade produtos em estoque, realização de cadastros, edição de produtos e a possibilidade de adicionar ou subtrair a quantidade de itens disponíveis em estoque.</p>
<img src="https://github.com/davids182/ProjetoC-A_photos/blob/f3fd89f76f05d20f9ca6077d99ba17ccfa7fc71b/Fluxograma_do_Sistema_v2.png" alt="Diagrama de descrição do projeto">

# Descrição do front end🖌
O Front End do projeto foi baseado no layout criado através do Figma, pensando em um visual minimalista e clean com semelhanças próprias do site da C&A.

<img src="https://github.com/davids182/ProjetoC-A_photos/blob/87c783c586c6172219b6eee49802d8cd0fd48a17/figmascreen.png" alt="Diagrama de descrição do projeto">

Na criação do CSS, foi utilizado de forma pura com criações de variáveis CSS para deixar a criação de estilos de uma forma intuitiva e reduzir o código com CSS desnecessários.

<div align="start">
    <img src="https://github.com/davids182/ProjetoC-A_photos/blob/87c783c586c6172219b6eee49802d8cd0fd48a17/cssvariablesprint.png" alt="Pequeno bloco de variaveis css">
    <img src="https://github.com/davids182/ProjetoC-A_photos/blob/87c783c586c6172219b6eee49802d8cd0fd48a17/cssvariablesprintbtn.png" alt="Pequeno bloco de variaveis css">
</div>

<h2> Como usar👨‍🏫 </h2>

<p> Com o projeto do repositório aberto no Visual Studio 2019, vá na pasta Properties e entre no arquivo launchSettings.json e troque a sslPort para a mesma do seu ProjetoAPI e vá também na pasta Pages > Produtos e troque a baseURL de cada arquivo com a terminação "cshtml.cs" para o endereço do seu localhost(mesmo do ProjetoAPI).
</p>

<h2> Tecnologias utilizadas para criar⚙️ </h2>
<div align="start">
  <p> ▪️ C# (ASP.NET Core, EntityFramework) </p>
  <p> ▪️ JavaScript </p>
  <p> ▪️ MySQL </p>
  <p> ▪️ CSS </p>
  <p> ▪️ HTML </p>
</div>

 ### Features
- [x] Listagem dos produtos
- [x] Cadastro de novo produto
- [x] Detalhes do produto
- [x] Alterar quantidade do produto
- [x] Exclusão do produto

<h2> Oportunidades de melhoria </h2>

<p>Etapa realizada para o mapeamento de melhorias, tanto de novas funcionalidades, como melhorias identificadas no decorrer do projeto para correção de bugs.</p>

<h3>Melhorias Implementadas</>
    
<h3> Página de produtos </h3>

<p>Objetivo: Inclusão da informação dos tamanhos na tela de Controle de estoque, total de itens cadastrados e total de peças em estoque para disponibilizar ao usuário uma visão mais completa do estoque atual.</p>

<h3> Separar página de edição </h3>

<p>Objetivo: Melhorar a organização das etapas de edição, desmembrando as alterações entre edição de características do produto e edição da quantidade em estoque.</p>

<h3> Aplicação de normas de convenção </h3>

<p>Objetivo: Refatorar o código utilizando normas para criação de nomenclaturas para classes, métodos e objetos (correção de grafia padrão para classe produto, correção de annotations, correção de nomes de campos para as páginas do CRUD, correção de Migrations na API.</p>

<h3> Página de erros </h3>

<p>Objetivo: Direcionar o usuário para uma página de comunicação de erro caso algo dê errado.</p>

<h3>Melhorias à implementar</>
    
 <h3> Tratamento de banco de dados - Não exclusão </h3>

<p>Objetivo: Desenvolver funcionalidade que garanta a não exclusão de itens do banco de dados, a fim de obter histórico. Inserir um campo de flag para identificar itens ATIVOS e DESCONTINUADOS</p>   

 <h3>Página de erros interativa</h3>

<p>Objetivo: Informar o usuário o motivo do erro apresentado (Substituir as condicionais por TRY / CATCH de modo que seja possível identificar erro e gerar tratativa para melhor informação do usuário)</p>   

<h3> Inclusão de filtro para consulta de produtos por departamento/categoria</h3>

<p>Objetivo: Melhorar a experiência do usuário, possibilitando a realização de consultas mais direcionadas dos itens em estoque.</p>   

<h3> Registros de usuário</h3>

<p>Objetivo: Definir o usuário loggado  como o usuário de cadastro e edição dos produtos automaticamente, de modo a garantir que apenas o dono do login tenha acesso a alterações com o seu username.</p>  

<h3> Criação de endereços de armazenagem</h3>

<p>Objetivo: Facilitar a localização dos produtos em estoque.</p>  

<h3> Desenvolvimento de relatórios de entradas e saídas</h3>

<p>Objetivo: Objetivo: Analisar o comportamento das entradas e saídas para que com base no histórico seja possível realizar projeções de demanda, avaliar o nível de cobertura do estoque atual e determinar o momento exato de realizar compras de reposição de estoque, possibilitando um melhor planejamento da loja.
*Habilitar filtro no cabeçalho</p>  
<img src="https://github.com/davids182/ProjetoC-A_photos/blob/c1004dcf673336287ac4b4d44ba16b34f7870f67/Registros%20de%20Entradas%20e%20Sa%C3%ADdas.png" alt="image"   height="500" width="700">

<h3> Controle para acompanhamento do tempo do produto em estoque</h3>

<p>Objetivo: Identificar os produtos com maior tempo de permanência para que seja possível estruturar ações (formato de exposição, remarcação etc), de modo a garantir que não hajam itens obsoletos em estoque.
*Habilitar filtro no cabeçalho</p>  

<img src="https://github.com/davids182/ProjetoC-A_photos/blob/c1004dcf673336287ac4b4d44ba16b34f7870f67/Controle%20de%20perman%C3%AAncia%20em%20estoque.png" alt="image"  height="500" width="700">

<h3> Desenvolvimento de funcionalidades  para realização de inventários</h3>

<p>Objetivo: Possibilitar a realização de inventários cíclicos para garantir a acuracidade do estoque (criação de documentos com lista prévia de itens de acordo com o dia da semana, criação livre de documentos na qual o usuário seleciona os itens a serem inventariados e registro do estoque atual do produto após realização da contagem.</p>  

<img src="https://github.com/davids182/ProjetoC-A_photos/blob/c1004dcf673336287ac4b4d44ba16b34f7870f67/Criar%20Invent%C3%A1rio_Dia%20da%20semana.png" alt="image"   height="500" width="700">

<img src="https://github.com/davids182/ProjetoC-A_photos/blob/c1004dcf673336287ac4b4d44ba16b34f7870f67/Criar%20Invent%C3%A1rio_Livre.png" alt="image" height="500" width="700">

<br>

<img src="https://github.com/davids182/ProjetoC-A_photos/blob/c1004dcf673336287ac4b4d44ba16b34f7870f67/Registrar%20Contagem%20de%20Invent%C3%A1rio.png" alt="image"  height="500" width="700">


<h3> Criação de testes automatizados</h3>

<p>Objetivo: Facilitar a identificação de erros através da repetição e da simulação de cenários específicos, minimizando os problemas da abordagem manual, o tempo dedicado e consequentemente o custo do desenvolvimento.</p>  

<p>Desenvolvido por:
NewDevs-C&A (Beatriz Medina, Bruno Lopes, David de Oliveira, Gustavo Yuji Watanabe, Neilyane Silva, Thiago Vieira)</p>



