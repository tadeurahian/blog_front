# Teste de Desenvolvimento - Engenheiro de Software - Framework
## Problema Proposto

Requisitos Técnicos:

- Código versionado em repositório GIT
- Java versão 8 ou superior
- Spring Boot
- Banco de Dados Postgresql
- API Restful
- Maven- Angular 8
- Arquivo README informando os passos necessários para execução da aplicação.
Deverão ser construídas interfaces Web e APIs de forma a suportar as seguintes operações:

Segurança
Permitir o cadastro de usuários e login com autenticação via token JWT.

Post
Permitir o cadastro e consulta de posts com texto, imagens e links.
Apenas o criador do post poderá ter permissão para excluí-lo.

Comentários
Suportar a adição e exclusão de comentários em posts. Os posts
poderão ser visíveis a todos os usuários. Apenas o criador do comentário poderá ter permissão para excluí-lo.

Fotos
Permitir a criação de álbuns de fotos. As fotos dos álbuns poderão ser visíveis a todos os usuários. Apenas o dono de um álbum poderá excluí-lo.

 
O design das interfaces e APIs é livre.

## Premissas

Como foi alinhado com a equipe, será usada a stack .Net por maior domínio do desenvolvedor.

## Ferramentas Utilizadas

- Visual Code
- Visual Studio Community 2019
- Azure DevOps
- Azure

## Infraestrutura

A infraestrutura para a hospedagem da aplicação foi feita utilizando a plataforma Cloud da Azure, os seguintes componentes foram criados:

- Dois WebApps para hospedagem do frontend e backend
- Um Azure Blob, para armazenamento das imagens
- Um banco SQL Server, para persistência das informações
- Dois AppInsights, para monitoramento dos WebApps

## Frameworks Utilizadas

- Frontend: Angular 8
- Backend: .Net Core 3.1

## Repositórios Utilizados:

- Frontend: https://github.com/tadeurahian/blog_front
- Backend: https://github.com/tadeurahian/blog_back

Os repositórios são públicos.

## Execução
### Backend

Para a execução do backend é necessário um Visual Studio instalado, para que ele possa hospedar a aplicação em um IIS Express. Tendo ele instalado, apenas abra o arquivo Frame.Host.sln e execute a aplicação.

### Frontend

Para a execução do frontend é necessário que se tenha o node instalado na maquina. Após a clonagem do repositório execute os seguintes comandos dentro da pasta **blog**:

- npm install
- ng serve

### Comunicação Back - Front

Para que seja possível rodar localmente e manter a comunicação entre o frontend e o backend é necessário alterar o arquivo enviroment.ts, dentro do frontend, colocando o endereço gerado pelo backend em sua execução.

## DevOps

Todos as alterações que são efetuadas no branch de **master** dos repositórios passa por um pipeline de integração de e de deploy, consequentemente, as alterações já são testadas e disponibilizadas nos seguintes links públicos:

- https://frame-front.azurewebsites.net/
- https://frame-back.azurewebsites.net/

## Acesso a Azure

Foi criada uma conta de avaliação gratuita para utilizar os recursos da Azure, seguem as credenciais:

- Usuário: tadeu.framework@outlook.om
- Senha: FrameWork

Seguem os links os acessos:

- Portal Azure (infra, etc): https://portal.azure.com/
- VSTS (DevOps): https://dev.azure.com/blogtadeuframe/Blog/

## Pontos de Melhoria

- Devido ao meu grande atraso na entrega, eu não fiz o desenvolvimento da parte de comentários, considerando que os fluxos de post já abordam os fluxos que seriam abordados no desenvolvimento dos comentários. A modelagem do banco foi realizada, por apresentar um aspecto diferente, que seria a relação de uma tabela com ela mesma;
- Poderiam ter sido desenvolvimentos testes de componentes no Backend e testes E2E no frontend;
- Para a criação do post, deveria ter sido criado um proxy para fazer um controle transacional;

## Contato

Qualquer dúvida, pergunta ou dificuldade seguem meus contatos:

- tadeurahian@gmail.com
- (31) 99701-9643